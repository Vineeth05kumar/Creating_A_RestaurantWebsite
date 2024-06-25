import classes from "./Header.module.css";
import imageMeal from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Meals from "../Meals/Meals";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageMeal} alt="Mealimage" />
      </div>
      <Meals />
    </>
  );
}
