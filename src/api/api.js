import axios from "axios";

const API_URL = "https://www.jsondataai.com/api/guK8Sdo";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
