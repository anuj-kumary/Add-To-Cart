import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const [itemsCount, setItemsCount] = useState(0);

  const cartValue = (item) => {
    setItemsCount((itemsCount) => itemsCount + 1);
    const productExist = cartItem.find((product) => product.id === item.id);
    if (productExist) {
      setCartItem(
        cartItem.map((element) =>
          element.id === item.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : element
        )
      );
    } else {
      setCartItem([...cartItem, { ...item, qty: 1 }]);
    }
  };

  useEffect(() => {
    setCartItem(JSON.parse(localStorage.getItem("cart")));
    setItemsCount(Number(localStorage.getItem("count")));
  }, []);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cartItem)), [
    cartItem
  ]);

  useEffect(() => localStorage.setItem("count", JSON.stringify(itemsCount)), [
    itemsCount
  ]);

  const removeItems = (item) => {
    const productExist = cartItem.find((product) => product.id === item.id);
    if (productExist) {
      if (productExist.qty > 1) {
        setItemsCount((itemsCount) => itemsCount - 1);
        setCartItem(
          cartItem.map((element) =>
            element.id === item.id
              ? { ...productExist, qty: productExist.qty - 1 }
              : element
          )
        );
      }
    } else {
      setCartItem([...cartItem, { ...item, qty: 1 }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        itemsCount,
        setItemsCount,
        cartItem,
        setCartItem,
        cartValue,
        removeItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
