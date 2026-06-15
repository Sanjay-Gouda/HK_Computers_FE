'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  createRepairingItem,
  updateRepairingItem,
} from "@/services/repairing-services"
import type {
  CreateRepairingPayload,
  ViewRepairingDataResponse,
} from "@/types/repairing-data"
import { ResponseStatus } from "@/types/purchase-data"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

type RepairingFormProps = {
  initialData?: ViewRepairingDataResponse["data"]
  paramsId?: string
  isViewMode?: boolean
  token?: string
}

const repairStatusOptions = ["Pending", "InProgress", "Completed",]
const paymentStatusOptions = [ "Paid", "UnPaid", "PartiallyPaid"  ]

export default function RepairingForm({
  initialData,
  paramsId = "",
  isViewMode = false,
  token
}: RepairingFormProps) {
  const router = useRouter()

  const initialFormState = {
    customerName: initialData?.customerName || "",
    mobileNumber: initialData?.mobileNumber || "",
    itemName: initialData?.itemName || "",
    issueDescription: initialData?.issueDescription || "",
    repairStatus: initialData?.repairStatus || "",
    repairCost: initialData ? String(initialData.repairCost) : "",
    paymentStatus: initialData?.paymentStatus || "",
    receivedAt: initialData?.receivedAt
      ? new Date(initialData.receivedAt).toISOString().split("T")[0]
      : "",
    completedAt: initialData?.completedAt
      ? new Date(initialData.completedAt).toISOString().split("T")[0]
      : "",
  }

  const [form, setForm] = useState(initialFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isViewMode) return

    const payload: CreateRepairingPayload = {
      customerName: form.customerName,
      mobileNumber: form.mobileNumber,
      itemName: form.itemName,
      issueDescription: form.issueDescription,
      repairStatus: form.repairStatus.toLocaleLowerCase(),
      repairCost: Number(form.repairCost),
      paymentStatus: form.paymentStatus.toLocaleLowerCase(),
      receivedAt: form.receivedAt,
      completedAt: form.completedAt || undefined,
    }

    try {
      const res = initialData
        ? await updateRepairingItem(paramsId, payload, token)
        : await createRepairingItem(payload)

      if (res?.status === ResponseStatus.SUCCESS) {
        toast.success(
          initialData
            ? "Repairing item updated successfully!"
            : "Repairing item created successfully!",
        )
        router.push("/dashboard/repairing")
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.")
    }
  }

  const handleCancel = () => {
    router.push("/dashboard/repairing")
  }

  return (
    <div className="w-full mx-auto p-8 bg-white rounded-lg shadow mx-8 m-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Repairing Item</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="customerName">
              Customer Name
            </label>
            <Input id="customerName" name="customerName" value={form.customerName} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <Input id="mobileNumber" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="itemName">
              Item Name
            </label>
            <Input id="itemName" name="itemName" value={form.itemName} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="issueDescription">
              Issue Description
            </label>
            <Input id="issueDescription" name="issueDescription" value={form.issueDescription} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="repairStatus">
              Repair Status
            </label>
            <Select
              value={form.repairStatus}
              onValueChange={(value) => {
                if (value !== null) {
                  setForm({ ...form, repairStatus: value })
                }
              }}
              disabled={isViewMode}
            >
              <SelectTrigger id="repairStatus" className="w-full">
                <SelectValue placeholder="Select repair status" />
              </SelectTrigger>
              <SelectContent>
                {repairStatusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="repairCost">
              Repair Cost
            </label>
            <Input id="repairCost" name="repairCost" type="number" value={form.repairCost} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="paymentStatus">
              Payment Status
            </label>
            <Select
              value={form.paymentStatus}
              onValueChange={(value) => {
                if (value !== null) {
                  setForm({ ...form, paymentStatus: value })
                }
              }}
              disabled={isViewMode}
            >
              <SelectTrigger id="paymentStatus" className="w-full">
                <SelectValue placeholder="Select payment status" />
              </SelectTrigger>
              <SelectContent>
                {paymentStatusOptions.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="receivedAt">
              Received Date
            </label>
            <Input id="receivedAt" name="receivedAt" type="date" value={form.receivedAt} onChange={handleChange} disabled={isViewMode} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="completedAt">
              Completed Date
            </label>
            <Input id="completedAt" name="completedAt" type="date" value={form.completedAt} onChange={handleChange} disabled={isViewMode} />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={handleCancel} className="mt-6 ml-4 cursor-pointer">
            Cancel
          </Button>
          <Button type="submit" className="mt-6 cursor-pointer" disabled={isViewMode}>
            {initialData ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </div>
  )
}
