'use client'

import { Column } from "@/components/report-table"
import { Button } from "@/components/ui/button"
import { PurchaseData } from "@/types/purchase-data"
import { useRouter } from "next/navigation"


function ViewPurchaseButton({ purchase }: { purchase: PurchaseData }) {
  const router = useRouter()

  return (
    <Button
      className="cursor-pointer"
      variant="default"
      onClick={() => router.push(`/dashboard/new-purchase/view/${purchase._id}`)}
    >
      View
    </Button>
  )
}

function EditPurchaseButton({ purchase }: { purchase: PurchaseData }) {
  const router = useRouter()

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      onClick={() => router.push(`/dashboard/new-purchase/edit/${purchase._id}`)}
    >
      Edit
    </Button>
  )
}




export const columnData:Column<PurchaseData>[]  = [
  {
    key: "firstName",
    header: "Customer Name",
    render: (value, row) => `${row.firstName} ${row.lastName}`
  },
 
  {
    key: "email",
    header: "Email"
  },
  {
    key: "phoneNumber",
    header: "Phone Number"
  },
  {
    key: "itemName",
    header: "Item Name"
  },
  {
    key: "serialNumber",
    header: "Serial Number"
  },
  {
    key: "totalCost",
    header: "Total Cost"
  },
  {
    header: "Actions" ,
    render:( value, row)=>{
        return (
          <div className="flex gap-2">

            <EditPurchaseButton purchase={row} />
            <ViewPurchaseButton purchase={row} />
          </div>
        )
    }
  }
]