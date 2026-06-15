import { viewRepairingItem } from "@/services/repairing-services"
import type {
  RepairingData,
  ViewRepairingDataResponse,
} from "@/types/repairing-data"
import RepairingForm from "../../components/repairing-form"
import { cookies } from "next/headers"

type Props = {
  params: {
    id: string
  }
}

export default async function EditRepairingPage({ params }: Props) {
   const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
  const { id } = await params

  const res: ViewRepairingDataResponse = await viewRepairingItem(id,token)
  const extractedData: RepairingData = res.data

  return <RepairingForm initialData={extractedData} paramsId={id} />
}
