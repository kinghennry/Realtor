import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d7ee0c0264mshbc88a6842fca64ap1cac34jsn3d69ad6774de",
    },
  });
  return data;
};
