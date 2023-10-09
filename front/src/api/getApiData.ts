import axios from "axios";
import { IProject } from "../interface/IProject";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const getApiData = async (dataName: string) => {
    const config = {
        headers: { 
          API_KEY: '$2y$10$0v9CVfz1eE8jBW4sgFuCUuUuoGtpnaQHCexSFMQ.EHSJxxPRzelCa'
        }
    };
    try {
        // console.log("url", base_url + dataName)
        const { data } = await axios.get(base_url + dataName, config);
        return data;
    } catch (e: any) {
        throw new Error('ApiData :' + e.message);
    };    
}

// export const getApiData = async (dataName: string) => {
//     const config = {
//         headers: { 
//           API_KEY: '$2y$10$0v9CVfz1eE8jBW4sgFuCUuUuoGtpnaQHCexSFMQ.EHSJxxPRzelCa'
//         }
//     };
//     try {
//         // console.log("url", base_url + dataName)
//         const { data } = await axios.get<IProject>(base_url + dataName, config);
//         return data;
//     } catch (e: any) {
//         throw new Error('ApiData :' + e.message);
//     };    
// }
