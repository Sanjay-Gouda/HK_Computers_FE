import ReportTable from "@/components/report-table";
import { repairingColumnData } from "./components/repairing-columns";
import { getAllRepairingItems } from "@/services/ajax-services";
import { RepairingDataResponse } from "@/types/repairing-data";
import { connection } from "next/server";

export default async function RepairingPage() {
  await connection();

  const res:RepairingDataResponse = await getAllRepairingItems()

  return (
      <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Repairing</h1>
        
        <ReportTable columns={repairingColumnData} data={ res.data || []} />
        </div>
  )
}
