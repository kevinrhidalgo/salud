import React from "react";
import "../Footer/Footer.css";

import Ig from "./ig.PNG"
import Github from "./github.PNG"
import Twitter from "./twitter.PNG"
import Email from "./email.PNG"

const footerImg ={
border: "black solid 1px",
width: 40,
height: 50
}


function Footer() {
  return (

    <div className="footerFlexer"> 
    <br/>
    <br/>
    <br/>
    <br/>

    <footer>     

    <p> Copyright © 2021 Kevin Hidalgo. 
    <br/>
    <div className="contactList">
   <a href="https://www.instagram.com/"><img style={footerImg} src={Ig}/></a> 
   <a href="https://github.com//kevinrhidalgo"><img style={footerImg} src={Github}/></a> 
    <a href="https://twitter.com"><img style={footerImg} src={Twitter}/></a>
    <a href="mailto:EmailAddress@.XYZ.com"><img style={footerImg} src={Email}/></a>
    </div>
    </p>
    
   
</footer>  

</div>
    
  );
}

export default Footer;
 