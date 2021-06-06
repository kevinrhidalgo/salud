import React from "react";
import Meal from "../Meal/Meal";
import "./index.css";

const macrosList={
  boxShadow: "7px 7px 3px gray",
  backgroundColor: "white" 
}
const macrosHeader={
  boxShadow: "7px 7px 3px gray",
  backgroundColor: "white",
  fontFamily: "Song Myung, serif",
 marginLeft:190,
 marginRight:190
}
  

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h1 style={macrosHeader}>|Macros|</h1>
        <ul style={macrosList}>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>|
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>|
          <li>Fat: {nutrients.fat.toFixed(0)}</li>|
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
