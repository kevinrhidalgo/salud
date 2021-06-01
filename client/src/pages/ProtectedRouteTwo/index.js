import React, { useEffect, useContext } from 'react'
import "./index.css"
import { UserContext } from "../../utils/UserContext";

function ProtectedRoute() {

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
	
	return (
		<div className = "weeklyPlaner">
     <div className = "planTitle"> <h1>WEEKLY MEAL PLANNER</h1> </div>
     <div className = "firstThree">
         <div className="weeklyDay"><h3>Monday</h3>
          <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" /> 
        </div>

         <div className="weeklyDay"> <h3>Tuesday</h3>
         <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" /> 
         </div>
         <div className="weeklyDay"> <h3>Wednesday</h3>
         <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" /> 
         </div>
     </div>
     <br/>
     <br/>
    
     <div className = "nextThree">
     <div className="weeklyDay">  <h3>Thursday</h3>
         <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" />  
     </div>
     <div className="weeklyDay">  <h3>Friday</h3>
         <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" /> 
     </div>
     <div className="weeklyDay">  <h3>Saturday</h3>
         <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" /> 
     </div>
     </div>
     <br/>
     <br/>
     <div className = "lastDay">
     <div className="weeklyDay">  <h3>Sunday</h3>
         <textarea className="textArea" type="text" name="Name" placeholder = "Breakfast:" /> 
         <textarea className="textArea" type="text" name="Name" placeholder = "Lunch:" />
         <textarea className="textArea" type="text" name="Name" placeholder = "Dinner:" /> 
     </div>
     <div id="shoppingList">    <h3>Shopping list</h3>
     <textarea id="textArea" type="text" name="Name" placeholder = "Shopping List:" /> 
     </div>
     </div>

     </div>
	)

}

export default ProtectedRoute