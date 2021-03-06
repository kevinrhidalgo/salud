import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
import saludLogo from "./saludLogo.jpg"

const userNameHead={
  backgroundColor:"white",
  boxShadow: "10px 10px 5px grey",
  padding:5,
  marginRight:5
}


//basic inline styling
const buttonStyle1 = {
  marginRight: 10, 
  color:"#222222",
  fontSize: "29px",
  fontWeight: 600,
  fontFamily: "Stint Ultra Condensed, cursive"
};

const headerName ={
  width:350,
  height:200,
  marginLeft:180
}


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
    
    <nav className="navbar navbar-expand-lg navbar-primary mb-2">
      
               
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span style={userNameHead}  className="userText text-dark ml-3 pt-1" to="#">Hi {user.username}!</span> : ""}
        
        <ul className="navbar-nav md-flex">
          <li className="nav-item ">
            <Link style={buttonStyle1}  className=" btn" to="/home">Home</Link>
            <Link style={buttonStyle1} className=" btn " to="/voices">Voices</Link>
            <Link style={buttonStyle1} className="btn" to="/mealplan">Planner</Link>
            <Link style={buttonStyle1} className="btn " to="/recipes">Recipes</Link>
          </li>
        </ul>
       
        <Link className="navbar-brand" to="/home">
     <div ><img style={headerName} src= {saludLogo}/></div> 
        </Link>

        <ul className="navbar-nav ml-auto ">
          <li>
          {user.username ? "" :
              <Link style={buttonStyle1} className="btn" to="/register">Sign Up</Link>
            }
            <AuthButton />
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Nav;
