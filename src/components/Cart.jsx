import { useDispatch, useSelector } from "react-redux";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { selectCartState, setCloseCart } from "../app/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      {/* overlay */}
      <div
        className={`overlay ${ifCartState ? "open-overlay" : "close-overlay"}`}
      ></div>

      <div className={`cart-div ${ifCartState ? "cart-open" : "cart-closed"}`}>
        <CartCount onCartToggle={onCartToggle} />
        <CartEmpty onCartToggle={onCartToggle} />
        <CartItem />
      </div>
    </>
  );
}

export default Cart;
