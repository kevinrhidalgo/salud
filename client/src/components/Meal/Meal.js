import React, { useState, useEffect } from "react";



const foodLink={
  color:"teal"
}
const foodHeader={
  color:"black",
  fontSize:30,
  fontFamily: "Song Myung, serif"
}


export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");



  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1 style={foodHeader}>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a style={foodLink} href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}
