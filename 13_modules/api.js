export const BASE_URL = 'https://thebozgun.com';
export const API_KEY = 'berlin2506';

const fetchData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    return response.json();
};

export default fetchData;