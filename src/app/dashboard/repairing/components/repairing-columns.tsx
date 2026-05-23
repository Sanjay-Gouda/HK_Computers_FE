'use client'

import { Column } from "@/components/report-table"
import { Button } from "@/components/ui/button"
import { RepairingData } from "@/types/repairing-data"
import { useRouter } from "next/navigation"

function ViewRepairingButton({ repairing }: { repairing: RepairingData }) {
  const router = useRouter()

  return (
    <Button
      className="cursor-pointer"
      variant="default"
      onClick={() => router.push(`/dashboard/repairing/view/${repairing._id}`)}
    >
      View
    </Button>
  )
}

function EditRepairingButton({ repairing }: { repairing: RepairingData }) {
  const router = useRouter()

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      onClick={() => router.push(`/dashboard/repairing/edit/${repairing._id}`)}
    >
      Edit
    </Button>
  )
}

export const repairingColumnData: Column<RepairingData>[] = [
  {
    key: "customerName",
    header: "Customer Name",
  },
  {
    key: "mobileNumber",
    header: "Mobile Number",
  },
  {
    key: "itemName",
    header: "Item Name",
  },
  // {
  //   key: "issueDescription",
  //   header: "Issue",
  // },
  {
    key: "repairStatus",
    header: "Repair Status",
  },
  {
    key: "repairCost",
    header: "Repairing Cost",
  },
  {
    key: "paymentStatus",
    header: "Payment Status",
  },
  {
    header: "Actions",
    render: (_value, row) => (
      <div className="flex gap-2">
        <EditRepairingButton repairing={row} />
        <ViewRepairingButton repairing={row} />
      </div>
    ),
  },
]
