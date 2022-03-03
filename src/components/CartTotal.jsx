import { useCart } from "../CartProvider";

const CartTotal = () => {
  const { cartItem } = useCart();

  return (
    <>
      <div className="card card--text">
        <header className="card__heading">CART PRICE DETAILS</header>
        {cartItem.map((product) => {
          return (
            <>
              <p>
                <span className="space">{product.name}</span>{" "}
                <span className="space">Quantity: {product.qty}</span>
                <span>₹ {product.price * product.qty}</span>
              </p>
            </>
          );
        })}
        <hr />
        <h3>
          Total : <span>₹ </span>
          {cartItem.reduce((acc, curr) => {
            return acc + curr.price * curr.qty;
          }, 0)}
        </h3>
      </div>
    </>
  );
};

export { CartTotal };
