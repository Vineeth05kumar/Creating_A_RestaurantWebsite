import classes from "./Header.module.css";
import imageMeal from "../assets/meals.jpg";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Your Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={imageMeal} alt="Mealimage" />
      </div>
    </>
  );
}
