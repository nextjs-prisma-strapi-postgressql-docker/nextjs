import axios from "axios";
import { PaintingDTO, PaintingsDTO } from "./types/painting.types";

const API_TOKEN = process.env.API_TOKEN;
const API_URL = process.env.API_URL;

export const api = {
  getPaintings: async () => {
    const { data } = await axios({
      method: "get",
      url: `${API_URL}/api/paintings?populate=Images`,
      headers: { Authorization: `bearer ${API_TOKEN}` },
    });

    return data as PaintingsDTO;
  },

  getPaintingById: async (id: string) => {
    const { data } = await axios({
      method: "get",
      url: `${API_URL}/api/paintings/${id}?populate=Images`,
      headers: { Authorization: `bearer ${API_TOKEN}` },
    });

    return data as PaintingDTO;
  },
};
