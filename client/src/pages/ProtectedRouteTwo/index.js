import React, { useEffect, useContext, useState } from 'react'
import Calendar from 'react-calendar';
import "./index.css"
import styled from 'styled-components';
import { UserContext } from "../../utils/UserContext";
import Header from '../../components/Header'
import Body from '../../components/Body'

const plannerTop={
   fontSize:"80px",
   fontFamily:"Stint Ultra Condensed, cursive",
   boxShadow: "10px 8px 5px grey",
   fontWeight: 550
}

const Wrapper = styled.section`
width:350px;
height:250px;
background-color:#f4f0db;
box-shadow: 10px 10px 5px grey;
color:black;
margin-bottom:120px;
`;


function ProtectedRoute() {
	const [user, dispatch] = useContext(UserContext)
	console.log(user)
    const [value, onChange] = useState(new Date());

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
        <>
        <Header />
<Body />
        <Wrapper >
      <Calendar 
        onChange={onChange}
        value={value}
      />
    </Wrapper>
		<div className = "weeklyPlanner">
      <h1 style={plannerTop}>WEEKLY MEAL <br/>PLANNER</h1>
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
     </>
	)

}

export default ProtectedRoute