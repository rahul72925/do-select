import "./index.css";
const ProductCard = ({ product }) => {
  return (
    <section id="product">
      <a className="product_card_anchor">
        <div className="product_image_section">
          <img
            className="product_image productCard_image"
            src={product.image}
          />
        </div>
        <div className=" productCard_details">
          <p className="productCard_title">{product.title}</p>
          <br />
          <span className="productCard_price">Rs {product.price}</span>
          <br />
          <div className="product_rating_container">
            Rating{"   "}
            <img
              src="https://www.freepnglogos.com/uploads/star-png/star-transparent-background-29.png"
              width="12px"
              height="12px"
            />
            <span className="productCard_rating">{product.rating.rate}</span>
          </div>
          <br />
          <p className="productCard_description">{product.description}</p>
        </div>
      </a>
    </section>
  );
};

export { ProductCard };
