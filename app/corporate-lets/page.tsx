import { ServicePage, serviceMetadata } from "@/components/ServicePage"
import { CORPORATE_SERVICE } from "@/lib/services"

export const metadata = serviceMetadata(CORPORATE_SERVICE)

export default function CorporateLets() {
  return <ServicePage content={CORPORATE_SERVICE} />
}
