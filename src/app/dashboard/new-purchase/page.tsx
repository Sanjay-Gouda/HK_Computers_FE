import ReportTable from "@/components/report-table";
import { getAllPurchaseItems } from "@/services/purchase-services";
import { PurchaseDataResponse } from "@/types/purchase-data";
import { columnData } from "./components/purchase-columns";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function NewPurchasePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  let res: PurchaseDataResponse | undefined;
  let errorMessage = "";

  try {
    res = await getAllPurchaseItems(token);
  } catch (err) {
    console.error("Error loading purchase items:", err);
    errorMessage = "Unable to load purchases right now.";
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Import Purchases</h1>

      {errorMessage ? (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {errorMessage}
        </div>
      ) : (
        <ReportTable columns={columnData} data={res?.data || []} />
      )}
    </div>
  );
}
