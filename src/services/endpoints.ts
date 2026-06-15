

export const endpoints = {
    LOGIN: '/api/login',
    CREATE_PURCHASE: '/api/create/new-purchase',
    GET_ALL_PURCHASE_ITEMS:'/api/getAllPurchaseItems',
    VIEW_PURCHASE: (id: string) => `/api/view/new-purchase/${id}`,
    UPDATE_PURCHASE: (id: string) => `/api/update/new-purchase/${id}`,
    CREATE_REPAIRING_ITEM: '/api/create/repairing-item',
    GET_ALL_REPAIRING_ITEMS: '/api/getAllRepairingItems',
    UPDATE_REPAIRING_ITEM: (id: string) => `/api/update/repairing-item/${id}`,
    VIEW_REPAIRING_ITEM: (id: string) => `/api/view/repairing-item/${id}`,
    LOGOUT : '/api/logout',
};


