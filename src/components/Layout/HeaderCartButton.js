import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [btnIsHigh, setBtnIsHigh] = useState("");

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartitems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHigh(true);

    const timer = setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClickOnCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  );
}
