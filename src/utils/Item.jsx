import React from "react";

function Item({ id, ifExists, title, text, img, btn, rating, price }) {
  return (
    <>
      <div className={`item-div ${ifExists ? "item-div-popular" : ""} `}>
        {/* text */}
        <div className="item-div__title">
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="item-div__price-star">
            <p>{price}$</p>
            <span>
              <i className="fa-solid fa-star"></i> {rating}
            </span>
          </div>
          <div className="item-div__bag-buy">
            <button>
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
            <button>{btn}</button>
          </div>
        </div>
        {/* img */}
        <div className="item-div__item-img">
          <img src={img} alt="shoe-img" />
        </div>
      </div>
    </>
  );
}

export default Item;
