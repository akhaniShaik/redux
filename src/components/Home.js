import React from "react";

function Home(props) {
  // console.warn("Home", props.cardData);
  console.warn("props", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone 11 </span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "Iphone 12" })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-car-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
