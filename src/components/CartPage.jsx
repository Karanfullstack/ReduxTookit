import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal, deleteItem, increment, decrement } from "../features/cartSlice";
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.allCart);

  useEffect(()=>{
    dispatch(getTotal());
  })

  return (
    <React.Fragment>
      <section className="cart">
        <h2>Total Price: ${totalPrice}</h2>
        {cart.map((item) => (
          <div className="cart-main" key={item.id}>
            <div className="image-title">
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
            </div>
            <div className="buttons">
              <button onClick={()=> dispatch(decrement(item))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={()=> dispatch(increment(item))}> +</button>
            </div>
            <div className="price">price: ${item.price}</div>
            <div className="delete">
              <button onClick={()=> dispatch(deleteItem(item))}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default CartPage;
