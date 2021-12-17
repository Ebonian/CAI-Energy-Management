import axios from "axios";

const instance = axios.create({
  baseURL: "https://cai-energy-management.herokuapp.com",
});

export default instance;
