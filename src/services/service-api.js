import axios from "axios";
import { BASE_URL, API_KEY } from "./config";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export async function getImages(query = "pug", page = 1) {
  const response = await axios({ params: { query, page, per_page: 4 } });
  return response.data
}
