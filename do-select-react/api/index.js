import axios from "axios";

export const getProducts = async () => {
  const data = await axios.get("http://localhost:4000/api/products");
  return data;
};
