import axios from "axios";

const Axios = axios.create({
  baseURL: "https://backend-5ny2.vercel.app/",
  withCredentials: true,
});

export default Axios;
