import classes from './MealSummary.module.css';

export default function MealSummary(){
    return(
        <div className={classes.summary}>
        <h1>Delicious Food, Delivered To You</h1>
        <p>Choose from fav meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
      </div>
    )
}