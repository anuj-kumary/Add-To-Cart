import { useState } from "react";
import { useCart } from "../CartProvider";
import { Data } from "../Data";
import { CartItem } from "./CartItem";
import { Cart } from "./Cart";

const ProductListing = () => {
  const { cartItem, cartValue } = useCart();

  const [route, setRoute] = useState(false);

  return (
    <>
      <Cart onClick={() => setRoute(true)} cartItem={cartItem} />

      <button className="btn btn__primary" onClick={() => setRoute(false)}>
        ProductListing
      </button>
      {!route && (
        <div className="product__cards">
          {Data.map((product) => {
            return (
              <>
                <div key={product.id} className="product__card">
                  <div className="product__image">
                    <img src={product.img} alt={product.name} />
                    <span className="product__favourite">
                      <i className="fas fa-heart"></i>
                    </span>
                  </div>
                  <h3 className="product__heading">{product.name}</h3>
                  <div className="product__price">₹ {product.price}</div>
                  <div className="product__button">
                    <button
                      onClick={() => cartValue(product)}
                      className="btn btn__primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}

      {route && <CartItem />}
      <hr />
    </>
  );
};

export { ProductListing };
