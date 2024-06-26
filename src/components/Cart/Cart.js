// import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
// import CartContext from "../../store/cart-context";

export default function Cart(props) {
  // const ctx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items ']}>
      {[{ id: "c1", name:'sushi',amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>23.32</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>CLOSE</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
