import axios from "axios";
import { PaintingDTO } from "./types/painting.types";

const API_TOKEN = process.env.API_TOKEN;
const API_URL = process.env.API_URL;

export const api = {
  get: async (route: string) => {
    const { data } = await axios({
      method: "get",
      url: `${API_URL}/api/${route}?populate=Images`,
      headers: { Authorization: `bearer ${API_TOKEN}` },
    });

    return data as PaintingDTO;
  },
};
