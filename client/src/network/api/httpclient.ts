import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://fip-be.herokuapp.com/v1",
  // baseURL: "/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;
