import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/images';

// Solicitud GET
export const fetchData = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        //console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
};

// Solicitud POST
export const postData = async (data) => {
    try {
        const response = await axios.post(API_BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error al crear datos:', error);
        throw error;
    }
};
