import axios from "axios";

export const getAxios = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/movie");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
