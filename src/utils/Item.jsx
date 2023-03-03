import React from "react";

function Item({ id, color, shadow, title, text, img, btn, rating, price }) {
  return (
    <>
      <div className={`item-div ${shadow} ${color}`}>
        {/* text */}
        <div className="item-text">
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="price-star">
            <p>{price}</p>
            <span>
              <i className="fa-solid fa-star"></i> 5+
            </span>
          </div>
        </div>
        {/* img */}
        <div className="item-img">
          <img src={img} alt="shoe-img" />
        </div>
      </div>
    </>
  );
}

export default Item;
