const API_URL = import.meta.env.VITE_API_URL;

export const getPromos = async () => {

    const response = await fetch(
        `${API_URL}/promos`
    );

    return response.json();
};