export interface PurchaseDataResponse {
  status: ResponseStatus
  message: string
  data: PurchaseData[]
  meta: Meta
}

export interface ViewPurchaseDataResponse {
  status: ResponseStatus
  message: string
  data: PurchaseData
  meta: Meta
}

export interface PurchaseData {
  _id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  itemName: string
  purchaseDate: string
  serialNumber: string
  price: number
  quantity: number
  createdAt: string
  updatedAt: string
  totalCost: number
  __v: number
  paidAmount?: number
  dueAmount?: number
}

export interface Meta {}


export type CreatePurchasePayload ={
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    itemName: string,
    purchaseDate: string,
    serialNumber: string,
    price: number,
    quantity: number,
    totalCost: number,
    paidAmount?: number,
}


export const ResponseStatus = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    FAILED: "FAILED",
} as const

export type ResponseStatus = typeof ResponseStatus[keyof typeof ResponseStatus]
