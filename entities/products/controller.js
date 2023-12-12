import axios from "axios";

const getProducts = async (req, res) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    return res.status(200).json({
      data,
      success: true,
      error: null,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id param missing");
    }
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    if (data.length === 0) {
      return res.status(404).json({
        data: {},
        success: false,
        error: "Product not found",
      });
    }
    return res.status(200).json({
      data,
      success: true,
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      error: error.message,
    });
  }
};
export { getProducts, getProduct };
