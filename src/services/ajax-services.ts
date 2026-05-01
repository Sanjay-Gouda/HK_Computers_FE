import { apiFetch } from "./api-utility"

import { endpoints } from "./endpoints"

const { LOGIN } = endpoints

export const Login = async (payload: { userName: string; password: string }) => {

    const response = await apiFetch(LOGIN, {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    return response

}

export const getAllPurchaseItems = async () => {

    const response = await apiFetch(endpoints.GET_ALL_PURCHASE_ITEMS, {
        method: 'GET',
    })

    return response

}