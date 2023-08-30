import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;
const config = {
    headers : {
        API_KEY : import.meta.env.VITE_API_KEY
    }
};

export const getApiData = async (dataName: string) => {
    try {
        const { data } = await axios.get(base_url + dataName, config);
        return data;
    } catch (e) {
        console.log(e);
    }
}