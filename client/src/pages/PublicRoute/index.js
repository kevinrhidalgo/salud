import React from 'react'
import "./style.css"


/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
const authorName = {
fontSize: 15,
fontWeight: "bold",

};



function PublicRoute() {

    return (
      <>
    <div className="articleSection">   

    
   <div className="leftPage"> 
   <div className="desc">
        <a href="https://lifeandhealth.org/fitness/3-questions-to-ask-yourself-when-setting-a-fitness-goal/1014895.html"><img src="https://lifeandhealth.org/wp-content/uploads/2019/03/jeremy-lapak-553145-unsplash-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6>3 Questions To Ask Yourself<br></br>When Setting A Fitness Goal</h6>
                <p style ={authorName}>by: PATRICK WOOD, ATC, CSCS</p>
              </div> 
    </div>
    <div className="desc">
        <a href="https://lifeandhealth.org/lifestyle/the-truth-about-burning-and-storing-fat/08406.html"><img src="https://lifeandhealth.org/wp-content/uploads/2018/12/vera-cho-789594-unsplash-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6>The Truth About Burning<br></br> And Storing Fat</h6>
                <p style ={authorName}> by: DICK NUNEZ FT</p>
              </div> 
    </div>
</div> 


<div className="descTwo">
        <a href="https://lifeandhealth.org/lifestyle/intermittent-fasting-does-it-work/1017874.html"><img src="https://lifeandhealth.org/wp-content/uploads/2020/02/shutterstock_209969872-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6>Intermittent Fasting Does It Work?</h6>
                <p style ={authorName}>by: HARVEY HAHN, MD, FACC</p>
              </div> 
    </div>  


</div>   


</> 

    )
}


export default PublicRoute