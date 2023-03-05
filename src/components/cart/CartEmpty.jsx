import emptybag from "../../assets/emptybag.png";

function CartEmpty() {
  return (
    <>
      <div className="empty-div">
        <img src={emptybag} alt="bag-img" />
        <button type="button">
          <i className="fa-solid fa-angle-left"></i> Back to Store
        </button>
      </div>
    </>
  );
}

export default CartEmpty;
