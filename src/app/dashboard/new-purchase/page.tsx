import ReportTable, { Column } from "@/components/report-table";
import { getAllPurchaseItems } from "@/services/ajax-services";
import { PurchaseData, PurchaseDataResponse } from "@/types/purchase-data";
import { columnData } from "./components/purchase-columns";




export default async function NewPurchasePage() {
  const res:PurchaseDataResponse =  await getAllPurchaseItems()

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Import Purchases</h1>
    
    <ReportTable columns={columnData} data={res?.data || []} />
		</div>
	);
}