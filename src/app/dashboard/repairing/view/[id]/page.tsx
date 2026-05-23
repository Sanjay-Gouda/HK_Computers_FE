import { viewRepairingItem } from "@/services/ajax-services"
import type {
  RepairingData,
  ViewRepairingDataResponse,
} from "@/types/repairing-data"
import RepairingForm from "../../components/repairing-form"

type Props = {
  params: {
    id: string
  }
}

export default async function ViewRepairingPage({ params }: Props) {
  const { id } = await params

  const res: ViewRepairingDataResponse = await viewRepairingItem(id)
  const extractedData: RepairingData = res.data

  return (
    <RepairingForm initialData={extractedData} paramsId={id} isViewMode />
  )
}
