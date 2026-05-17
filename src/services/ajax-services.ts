import type {
  CreatePurchasePayload,
  PurchaseDataResponse,
  ViewPurchaseDataResponse,
} from "@/types/purchase-data";
import { apiFetch } from "./api-utility";

import { endpoints } from "./endpoints";

const { LOGIN } = endpoints;

export const Login = async (payload: {
  userName: string;
  password: string;
}) => {
  const response = await apiFetch(LOGIN, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return response;
};

export const getAllPurchaseItems = async (): Promise<PurchaseDataResponse> => {
  const response = await apiFetch<PurchaseDataResponse>(
    endpoints.GET_ALL_PURCHASE_ITEMS,
    {
      method: "GET",
    },
  );

  return response;
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
      },
    );

    return response;
  } catch (err) {
    throw err;
  }
};