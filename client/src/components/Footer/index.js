import React from "react";
import "../Footer/Footer.css";
import myLogo from "./logo.PNG"



function Footer() {
  return (
    <div class="flex-wrapper"> 
    <footer>     
    <p> Copyright © 2021 Kevin Hidalgo. <img src={myLogo}></img> </p>
</footer>  
</div>
    
  );
}

export default Footer;
