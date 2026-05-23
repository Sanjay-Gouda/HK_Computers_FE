import ReportTable from "@/components/report-table";
import { repairingColumnData } from "./components/repairing-columns";
import { getAllRepairingItems } from "@/services/ajax-services";
import { RepairingDataResponse } from "@/types/repairing-data";

export default async function RepairingPage() {

  const res:RepairingDataResponse = await getAllRepairingItems()
  console.log("Repairing items:", res);

  return (
      <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Repairing</h1>
        
        <ReportTable columns={repairingColumnData} data={ res.data || []} />
        </div>
  )
}
