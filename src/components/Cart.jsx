import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

function Cart() {
  return (
    <>
      {/* overlay */}
      <div className="overlay"></div>

      <div className="cart-div">
        <CartCount />
        <CartEmpty />
        <CartItem />
      </div>
    </>
  );
}

export default Cart;
