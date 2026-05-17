

'use client';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreatePurchasePayload ,PurchaseData,ResponseStatus, ViewPurchaseDataResponse} from "@/types/purchase-data";
import { createPurchaseItem, updatePurchaseItem } from "@/services/ajax-services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { set } from "zod";


type NewPurchaseFormProps = {
  initialData?: ViewPurchaseDataResponse['data']
  paramsId?:  string 
  isViewMode?: boolean
}


export default function PurchaseForm({ initialData, paramsId='', isViewMode=false    }: NewPurchaseFormProps) {
    const initialFormState = {
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        mobileNo: initialData?.phoneNumber || "",
        email: initialData?.email || "",
        itemName: initialData?.itemName || "",
        serialNumber: initialData?.serialNumber || "",
        purchaseDate: initialData?.purchaseDate ?  new Date(initialData?.purchaseDate).toISOString().split('T')[0] :   "",
        purchasePrice: initialData ? String(initialData.price) : "",
        quantity: initialData ? String(initialData.quantity) : "",
        totalCost: initialData ? String(initialData.totalCost) : "",
      };
  const router = useRouter(); 

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    if(isViewMode) return;
    e.preventDefault();
      const {
        firstName,
        lastName,
        mobileNo,       
        email,
        itemName,
        serialNumber,
        purchaseDate,
        purchasePrice,
        quantity,
        totalCost

      }=form
   
      const payload:CreatePurchasePayload = {
        firstName,
        lastName,
        phoneNumber: mobileNo,
        email,
        itemName,
        serialNumber,
        purchaseDate,
        price: Number(purchasePrice),
        quantity: Number(quantity),
        totalCost: Number(totalCost),
        paidAmount: 1000
      }
      try{
        const res = initialData ?  await updatePurchaseItem(paramsId, payload) : await createPurchaseItem(payload)
          if(res?.status === ResponseStatus.SUCCESS){
              toast.success("Purchase created successfully!")
              router.push('/dashboard/new-purchase')
              setForm({
                firstName: "",
                lastName: "",
                mobileNo: "",
                email: "",
                itemName: "",
                serialNumber: "",
                purchaseDate: "",
                purchasePrice: "",
                quantity: "",
                totalCost: "",
              })

          }
      }catch(err){

      }


      
      

  };

  const handleCancel = ()=>{
    router.push('/dashboard/new-purchase')
  }

  return (
    <div className="w-full mx-auto p-8 bg-white rounded-lg shadow mx-8 m-8">
      <h1 className="text-2xl font-bold mb-6 text-center">New Purchase</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} disabled={isViewMode}   required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="mobileNo">Mobile No</label>
            <Input id="mobileNo" name="mobileNo" value={form.mobileNo} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email Id</label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} disabled={isViewMode}  required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="itemName">Item Name</label>
            <Input id="itemName" name="itemName" value={form.itemName} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="modelNumber">Model Number</label>
            <Input id="serialNumber" name="serialNumber" value={form.serialNumber} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="purchaseDate">Purchase Date</label>
            <Input id="purchaseDate" name="purchaseDate" type="date" value={form.purchaseDate} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="purchasePrice">Purchase Price</label>
            <Input id="purchasePrice" name="purchasePrice" type="number" value={form.purchasePrice} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="quantity">Quantity</label>
            <Input id="quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="totalCost">Total Cost</label>
            <Input id="totalCost" name="totalCost" type="number" value={form.totalCost} onChange={handleChange} disabled={isViewMode} required />
          </div>
        </div>

        <div className="flex justify-end gap-2">
        <Button type="button" variant="outline"  onClick={handleCancel} className="mt-6 ml-4 cursor-pointer">Cancel</Button>
        <Button type="submit" className="mt-6 cursor-pointer" disabled={isViewMode}>Submit</Button>
        </div>
      </form>
    </div>
  );
}
