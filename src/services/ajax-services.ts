import type {
  CreatePurchasePayload,
  PurchaseDataResponse,
  ViewPurchaseDataResponse,
} from "@/types/purchase-data";
import { apiFetch } from "./api-utility";

import { endpoints } from "./endpoints";
import type {
  CreateRepairingPayload,
  RepairingDataResponse,
  ViewRepairingDataResponse,
} from "@/types/repairing-data";

const { LOGIN ,LOGOUT} = endpoints;

export const Login = async (payload: {
  userName: string;
  password: string;
}) => {
  const response = await apiFetch(LOGIN, {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include", // Include cookies for authentication

  });

  return response;
};

export const logout = async () => {
  try{

    const response = await apiFetch(LOGOUT,{
      method: "POST",
      credentials: "include"
    })

    return response


  }catch(err){
    console.log("Error during logout:", err);
    throw err;
  }
}



export const getAllPurchaseItems = async (token:string | undefined): Promise<PurchaseDataResponse> => {
 
  try{
     const response = await apiFetch<PurchaseDataResponse>(
    endpoints.GET_ALL_PURCHASE_ITEMS,
    {
      method: "GET",
       headers:{
        Cookie: `token=${token}`,
       }
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
): Promise<ViewPurchaseDataResponse> => {
  try {
    const response = await apiFetch<ViewPurchaseDataResponse>(
      endpoints.VIEW_PURCHASE(id),
      {
        method: "GET",
         credentials: "include",
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



export const getAllRepairingItems = async (
  token?: string | undefined,
): Promise<RepairingDataResponse> => {
  try {
    const response = await apiFetch<RepairingDataResponse>(
      endpoints.GET_ALL_REPAIRING_ITEMS,
      {
        method: "GET",
        // headers: {
        //   Cookie: `token=${token}`,
        // },
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
): Promise<ViewRepairingDataResponse> => {
  try {
    const response = await apiFetch<ViewRepairingDataResponse>(
      endpoints.VIEW_REPAIRING_ITEM(id),
      {
        method: "GET",
        credentials: "include",
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
): Promise<ViewRepairingDataResponse> => {
  try {
    const response = await apiFetch<ViewRepairingDataResponse>(
      endpoints.UPDATE_REPAIRING_ITEM(id),
      {
        method: "PUT",
        body: JSON.stringify(payload),
        credentials: "include",
      },
    )

    return response
  } catch (err) {
    throw err
  }
}
