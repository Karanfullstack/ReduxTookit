import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/cartSlice";

const Card = () => {
  const { items } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {items.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-main">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <div>
              <span>Price: ${item.price}</span>
              <button onClick={() => dispatch(add(item))}>ADD</button>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Card;
