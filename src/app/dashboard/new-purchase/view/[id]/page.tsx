
import { viewPurchaseItem } from "@/services/purchase-services";
import PurchaseForm from "../../components/new-purchase-form";
import { PurchaseData, ViewPurchaseDataResponse } from "@/types/purchase-data";
import { cookies } from "next/headers"; 


type Props = {
  params: {
    id: string;
  };
};




export default async function ViewPurchasePage({params}: Props) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    
      const { id } = await params
      
    const res:ViewPurchaseDataResponse  = await viewPurchaseItem(id, token);
    const extractedData: PurchaseData = res?.data
   

    return (
        <>
        <PurchaseForm initialData={extractedData} paramsId={id} isViewMode={true} />
        </>
    );
}


