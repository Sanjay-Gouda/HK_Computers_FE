import ReportTable from "@/components/report-table";
import { repairingColumnData } from "./components/repairing-columns";
import { getAllRepairingItems } from "@/services/repairing-services";
import { RepairingDataResponse } from "@/types/repairing-data";
import { connection } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RepairingPage() {
   const cookieStore = await cookies();
   const token = cookieStore.get("token")?.value;
  await connection();

  if (!token) {
      redirect("/login");
    }

  const res:RepairingDataResponse = await getAllRepairingItems(token);

  return (
      <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Repairing</h1>
        
        <ReportTable columns={repairingColumnData} data={ res.data || []} />
        </div>
  )
}
