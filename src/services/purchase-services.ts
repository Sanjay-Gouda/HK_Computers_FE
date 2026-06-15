
import type {
  CreatePurchasePayload,
  PurchaseDataResponse,
  ViewPurchaseDataResponse,
} from "@/types/purchase-data";
import { apiFetch } from "./api-utility";
import { endpoints } from "./endpoints";



export const getAllPurchaseItems = async (token:string | undefined): Promise<PurchaseDataResponse> => {
 
  try{
     const response = await apiFetch<PurchaseDataResponse>(
    endpoints.GET_ALL_PURCHASE_ITEMS,
    {
      method: "GET",
      headers: token ? { Cookie: `token=${token}` } : undefined,
    },
  );

  return response;
  }catch(err){
    console.log("Error fetching purchase items:", err);
    throw err;
  }
 
};

export const createPurchaseItem = async (
  payload: CreatePurchasePayload,
): Promise<PurchaseDataResponse> => {
  try {
    const response = await apiFetch<PurchaseDataResponse>(
      endpoints.CREATE_PURCHASE,
      {
        method: "POST",
        body: JSON.stringify(payload),
         credentials: "include",
      },
    );

    return response;
  } catch (err) {
    throw err;
  }
};

export const viewPurchaseItem = async (
  id: string,
  token?: string | undefined,
): Promise<ViewPurchaseDataResponse> => {
  try {
    const response = await apiFetch<ViewPurchaseDataResponse>(
      endpoints.VIEW_PURCHASE(id),
      {
        method: "GET",
         credentials: "include",
        headers: token ? { Cookie: `token=${token}` } : undefined,
      },
    );

    return response;
  } catch (err) {
    throw err;
  }
};

export const updatePurchaseItem = async (id: string, payload: CreatePurchasePayload) => {
  try {
    const response = await apiFetch<ViewPurchaseDataResponse>(
      endpoints.UPDATE_PURCHASE(id),
      {
        method: "PUT",
        body: JSON.stringify(payload),
         credentials: "include",
      },
    );

    return response;
  } catch (err) {
    throw err;
  }
};
