import { useCart } from "../CartProvider";
const Cart = ({ onClick }) => {
  const { itemsCount } = useCart();
  return (
    <>
      <div className="badge">
        <i onClick={onClick} className="badge__icon fas fa-cart-plus"></i>
        <span className="badge__number">{itemsCount}</span>
      </div>
    </>
  );
};

export { Cart };
