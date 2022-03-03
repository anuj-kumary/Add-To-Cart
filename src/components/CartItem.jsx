import { useCart } from "../CartProvider";
import { CartTotal } from "./CartTotal";

const CartItem = () => {
  const {
    cartItem,
    setItemsCount,
    cartValue,
    setCartItem,
    removeItems
  } = useCart();

  const removeItem = (id) => {
    const item = cartItem.find((ele) => ele.id === id);

    setItemsCount((count) => count - item.qty);
    setCartItem((currentItem) => {
      const findIndex = currentItem.findIndex((cartItem) => cartItem.id === id);
      if (findIndex === -1) {
        return currentItem;
      } else {
        return [
          ...currentItem.slice(0, findIndex),
          ...currentItem.slice(findIndex + 1)
        ];
      }
    });
  };

  return (
    <>
      <h2 className="text__center">Cart Item</h2>
      <div>
        {cartItem.length === 0 && (
          <h2 className="text__center fw__400">Cart is Empty</h2>
        )}
      </div>
      <div className="product__cards">
        {cartItem.map((item) => {
          return (
            <>
              <div className="product__card">
                <div className="product__image">
                  <img src={item.img} alt="name" />
                  <span className="product__favourite">
                    <i className="fas fa-heart"></i>
                  </span>
                </div>
                <h3 className="product__heading">{item.name}</h3>
                <div className="product__price">₹ {item.price}</div>
                <div className="cart__quantity">
                  <p className="cart__text">Quantity:</p>
                  <p>
                    <i
                      onClick={() => removeItems(item)}
                      className="fas fa-minus-circle"
                    ></i>
                  </p>
                  <p className="cart__quantity-number">{item.qty}</p>
                  <p>
                    <i
                      onClick={() => cartValue(item)}
                      className="fas fa-plus-circle"
                    ></i>
                  </p>
                </div>
                <div className="product__button">
                  <button
                    onClick={() => [removeItem(item.id)]}
                    className="btn btn__primary"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <CartTotal />
    </>
  );
};

export { CartItem };
