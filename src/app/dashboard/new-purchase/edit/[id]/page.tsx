
import { viewPurchaseItem } from "@/services/ajax-services";
import PurchaseForm from "../../components/new-purchase-form";
import { PurchaseData, ViewPurchaseDataResponse } from "@/types/purchase-data";
 


type Props = {
  params: {
    id: string;
  };
};




export default async function EditPurchasePage({params}: Props) {
    
      const { id } = await params
      
    const res:ViewPurchaseDataResponse  = await viewPurchaseItem(id)
    const extractedData: PurchaseData = res?.data
   

    return (
        <>
        <PurchaseForm initialData={extractedData}  />
        </>
    );
}


