
import type { ResponseStatus } from "./purchase-data"


export interface RepairingDataResponse {
  status: ResponseStatus
  message: string
  data: RepairingData[]
  meta: Meta
}

export interface ViewRepairingDataResponse {
  status: ResponseStatus
  message: string
  data: RepairingData
  meta: Meta
}

export interface RepairingData {
  _id: string
  customerName: string
  mobileNumber: string
  itemName: string
  issueDescription: string
  repairStatus: string
  repairCost: number
  paymentStatus: string
  receivedAt: string
  completedAt: string
  __v: number
}


export interface Meta {}

export type CreateRepairingPayload = {
  customerName: string
  mobileNumber: string
  itemName: string
  issueDescription: string
  repairStatus: string
  repairCost: number
  paymentStatus: string
  receivedAt: string
  completedAt?: string
}
