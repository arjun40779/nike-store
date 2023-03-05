function CartCount() {
  return (
    <>
      <div className="cart-top">
        <div className="cart-top__left">
          <i className="fa-solid fa-chevron-left"></i>
          <p>
            Your Cart <span>(1 items)</span>
          </p>
        </div>
        <div className="cart-top__right">
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </>
  );
}

export default CartCount;
