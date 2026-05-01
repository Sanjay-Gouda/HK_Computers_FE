


// Base URL for API requests
// export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
export const BASE_URL = 'http://localhost:8001'; // Adjust as needed for development


export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;
    const res = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });
    if (!res.ok) {
        // Optionally, handle errors globally here
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    return res.json();
}