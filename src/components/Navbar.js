import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../features/cartSlice";
const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  });
  return (
    <React.Fragment>
      <nav className="navbar">
        <div>
          <Link to="/">
            <h2>Shopify</h2>
          </Link>
        </div>
        <div className="flex align between">
          <div className="flex link">
            <a href="/">Home</a>
          </div>
          <div>
            <Link to="/cartPage">
              <button>
                Cart: {totalQuantity} {totalQuantity > 1 ? "Items" : "Item"}{" "}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
