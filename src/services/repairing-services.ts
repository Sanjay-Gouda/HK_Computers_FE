import type {
  CreateRepairingPayload,
  RepairingDataResponse,
  ViewRepairingDataResponse,
} from "@/types/repairing-data";
import { apiFetch } from "./api-utility";
import { endpoints } from "./endpoints";





export const getAllRepairingItems = async (
  token?: string | undefined,
): Promise<RepairingDataResponse> => {
  try {
    const response = await apiFetch<RepairingDataResponse>(
      endpoints.GET_ALL_REPAIRING_ITEMS,
      {
        method: "GET",
        headers: {
          Cookie: `token=${token}`,
        },
      },
    )

    return response
  } catch (err) {
    console.log("Error fetching repairing items:", err)
    throw err
  }
}

export const createRepairingItem = async (
  payload: CreateRepairingPayload,
): Promise<RepairingDataResponse> => {
  try {
    const response = await apiFetch<RepairingDataResponse>(
      endpoints.CREATE_REPAIRING_ITEM,
      {
        method: "POST",
        body: JSON.stringify(payload),
        credentials: "include",
      },
    )

    return response
  } catch (err) {
    throw err
  }
}

export const viewRepairingItem = async (
  id: string,
  token?: string | undefined,
): Promise<ViewRepairingDataResponse> => {
  try {
    const response = await apiFetch<ViewRepairingDataResponse>(
      endpoints.VIEW_REPAIRING_ITEM(id),
      {
        method: "GET",
        headers: {
          Cookie: `token=${token}`,
        },
      },
    )

    return response
  } catch (err) {
    throw err
  }
}

export const updateRepairingItem = async (
  id: string,
  payload: CreateRepairingPayload,
  token?: string | undefined,
): Promise<ViewRepairingDataResponse> => {
  try {
    const response = await apiFetch<ViewRepairingDataResponse>(
      endpoints.UPDATE_REPAIRING_ITEM(id),
      {
        method: "PUT",
        body: JSON.stringify(payload),
        credentials: "include",
        headers:{
          Cookie: `token=${token}`,
        }
      },
    )

    return response
  } catch (err) {
    throw err
  }
}
