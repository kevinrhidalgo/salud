import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
import logo from "./mylogo.jpg"


//basic inline styling
const buttonStyle1 = {
  marginRight: 10, 
};



function Nav() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };


  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (
    
    <nav className="navbar navbar-expand-lg navbar-primary bg-light mb-2">
      <Link className="navbar-brand" to="/home">
      <img className="myLogo" src={logo}></img> 
        </Link>
               
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-dark ml-3 pt-1" to="#">Hi {user.username}!</span> : ""}
        
        <ul className="navbar-nav md-flex">
          <li className="nav-item ">
            <Link style={buttonStyle1}  className=" btn btn-info" to="/home">Home</Link>
            <Link style={buttonStyle1} className=" btn btn-info" to="/voices">Voices</Link>
            <Link style={buttonStyle1} className="btn btn-info" to="/mealplan">Meal Plan</Link>
            <Link style={buttonStyle1} className="btn btn-info" to="/recipes">Recipes</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto ">
          <li>
          {user.username ? "" :
              <Link style={buttonStyle1} className="btn btn-dark" to="/register">Sign Up!</Link>
            }
            <AuthButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
