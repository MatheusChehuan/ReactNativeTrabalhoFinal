import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const api = axios.create({
    baseURL: "http://192.168.1.4:8080"
})


api.interceptors.request.use(async(config)=>{

    const token = await AsyncStorage.getItem("token");
   if (token && token !== "null" && token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api;