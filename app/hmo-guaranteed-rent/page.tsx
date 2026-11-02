import { ServicePage, serviceMetadata } from "@/components/ServicePage"
import { HMO_SERVICE } from "@/lib/services"

export const metadata = serviceMetadata(HMO_SERVICE)

export default function HMOGuaranteedRent() {
  return <ServicePage content={HMO_SERVICE} />
}
