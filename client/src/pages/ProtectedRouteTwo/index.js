import React, { useEffect, useContext, useState } from 'react'
import MealList from "../../components/MealList/MealList";
import { UserContext } from "../../utils/UserContext";

function ProtectedRoute() {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);

	const [user, dispatch] = useContext(UserContext)
	console.log(user)

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, );
	function getMealData() {
		fetch(
		  `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
		)
		  .then((response) => response.json())
		  .then((data) => {
			setMealData(data);
		  })
		  .catch(() => {
			console.log("error");
		  });
	  }
	
	  function handleChange(e) {
		setCalories(e.target.value);
	  }
	return (
		<div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
	)

}

export default ProtectedRoute