import { getProducts } from "./api";
import axios from "axios";

jest.mock("axios");

describe("getUsers", () => {
  it("product fetch success", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 1091.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
      ],
      error: null,
      success: true,
    });

    const result = await getProducts();
    expect(result).toHaveProperty("data");
    expect(result.success).toBe(true);
  });
});
