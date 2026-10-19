"""
Rebuild lib/rents.json from the ONS Price Index of Private Rents monthly workbook.

1. Download the latest "priceindexofprivaterentsukmonthlypricestatistics.xlsx" from
   https://www.ons.gov.uk/economy/inflationandpriceindices/datasets/priceindexofprivaterentsukmonthlypricestatistics
2. pip install openpyxl
3. python scripts/update-rents.py path/to/priceindexofprivaterentsukmonthlypricestatistics.xlsx

Keeps the latest month for every local authority in London and the South East (the areas
Alali Homes covers). Values are the ONS average monthly rental price in pounds; anything ONS
marks as unavailable ([x]) is stored as null and never filled in.
"""
import json
import sys
from pathlib import Path

import openpyxl

REGIONS = {"London", "South East"}
COLS = {
    "all": "Rental price",
    "b1": "Rental price one bed",
    "b2": "Rental price two bed",
    "b3": "Rental price three bed",
    "b4": "Rental price four or more bed",
    "detached": "Rental price detached",
    "semi": "Rental price semidetached",
    "terraced": "Rental price terraced",
    "flat": "Rental price flat maisonette",
}

wb = openpyxl.load_workbook(sys.argv[1], read_only=True)
rows = wb["Table 1"].iter_rows(values_only=True)
header = None
for r in rows:
    if r and r[0] == "Time period":
        header = list(r)
        break
idx = {k: header.index(v) for k, v in COLS.items()}
latest = {}
for r in rows:
    if not r or r[3] not in REGIONS or not str(r[1]).startswith("E0"):
        continue
    code = r[1]
    if code not in latest or r[0] > latest[code][0]:
        latest[code] = r

period = max(r[0] for r in latest.values())
num = lambda v: v if isinstance(v, (int, float)) else None
areas = {
    code: {"name": r[2], "region": r[3], **{k: num(r[i]) for k, i in idx.items()}}
    for code, r in sorted(latest.items())
    if r[0] == period
}
out = {
    "source": "Office for National Statistics, Price Index of Private Rents, UK: monthly price statistics",
    "period": period.strftime("%Y-%m"),
    "areas": areas,
}
Path(__file__).resolve().parent.parent.joinpath("lib", "rents.json").write_text(json.dumps(out, indent=1) + "\n")
print(f"{len(areas)} areas, period {out['period']}")
