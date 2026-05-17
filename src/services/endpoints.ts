

export const endpoints = {
    LOGIN: '/api/login',
    CREATE_PURCHASE: '/api/create/new-purchase',
    GET_ALL_PURCHASE_ITEMS:'/api/getAllPurchaseItems',
    VIEW_PURCHASE: (id: string) => `/api/view/new-purchase/${id}`,
    UPDATE_PURCHASE: (id: string) => `/api/update/new-purchase/${id}`,
    
};

// Fetch API utility


