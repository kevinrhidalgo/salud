
import React from 'react'
import "./style.css"



const authorName = {
fontSize: 10,
fontWeight: "bold",
marginLeft:14

};

const titleName = {
fontSize: 16,
fontWeight:110,
color:"red",
paddingLeft:18
}

const descName = {
  fontSize: 15,
fontWeight:160,
margin: 30,
font:"Helvetica"
}
const headerTitle = {
  fontSize: 90,
  fontFamily: "Stint Ultra Condensed, cursive",
  fontWeight:"bold"
}



function PublicRoute() {

    return (
      <>
    
      <h1 style ={headerTitle}>The Weekender</h1>

    <div class="vl"></div>

    <div className="articleSection">   

    
   <div className="leftPage"> 
   <div className="desc">
        <a href="https://lifeandhealth.org/fitness/3-questions-to-ask-yourself-when-setting-a-fitness-goal/1014895.html"><img src="https://lifeandhealth.org/wp-content/uploads/2019/03/jeremy-lapak-553145-unsplash-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6 style ={titleName}>3 Questions To Ask Yourself When Setting A Fitness Goal</h6>
                <p style ={authorName}>by: PATRICK WOOD, ATC, CSCS</p>
              </div> 
    </div>

    <br/>

    <div className="desc">
        <a href="https://lifeandhealth.org/lifestyle/the-truth-about-burning-and-storing-fat/08406.html"><img src="https://lifeandhealth.org/wp-content/uploads/2018/12/vera-cho-789594-unsplash-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6 style ={titleName}>The Truth About Burning <br/> And Storing Fat</h6>
                <p style ={authorName}> by: DICK NUNEZ FT</p>
              </div> 
    </div>
</div> 

<div class="hl"></div>

<div className="descTwo">
        <a href="https://lifeandhealth.org/lifestyle/intermittent-fasting-does-it-work/1017874.html"><img src="https://lifeandhealth.org/wp-content/uploads/2020/02/shutterstock_209969872-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6 style ={titleName}>Intermittent Fasting Does It Work?</h6>
            <p style={descName}>The big three areas of healthy living are diet, exercise, and sleep.  
              One, currently popular dietary technique that integrates all 3 of these areas is i
              ntermittent fasting.  So what is intermittent fasting and what are the benefits? <a className="linkBtn" href="https://lifeandhealth.org/lifestyle/intermittent-fasting-does-it-work/1017874.html">Read More..</a></p>
                <p style ={authorName}>by: HARVEY HAHN, MD, FACC</p>
              </div> 
    </div>  

    <div class="hl"></div>


    <div className="scrollmenu">
 
     <div className="descThree">
           <a href="https://lifeandhealth.org/nutrition/whats-the-big-deal-about-protein/1611935.html"><h6 style ={titleName}>What’s The Big Deal About <br/> Protein?</h6></a> 
                <p style ={authorName}>by: RAEANN LEAL</p>
             </div>

             <div class="vLine"></div>

            <div className="descThree">
      <a href="https://lifeandhealth.org/lifestyle/can-your-diet-and-lifestyle-affect-your-vision/1611990.html"> <h6 style ={titleName}>Can Your Diet And Lifestyle<br></br> Affect Your Vision?</h6></a>
                <p style ={authorName}>by: JUSTIN LEAL</p>
          </div>
<div class="vLine"></div>

            <div className="descThree">
        <a href="https://lifeandhealth.org/nutrition/the-surprising-connection-between-diet-and-alzheimers-disease/0911063.html"><h6 style ={titleName}>What’s The Connection <br/>Between Diet And Alzheimer’s <br/> Disease?</h6></a>
                <p style ={authorName}>by: RAEANN LEAL</p>   
            </div>

<div class="vLine"></div>


            <div className="descThree"> 
        <a href="https://lifeandhealth.org/lifestyle/your-gut-health-and-why-you-should-care-about-it/109138.html"><h6 style ={titleName}>Your Gut Health And Why <br></br>You Should Care About It</h6></a>
              <p style ={authorName}>by: RAEANN LEAL</p>
            </div>

<div class="vLine"></div>

            <div className="descThree">
        <a href="https://lifeandhealth.org/healing/natural-remedies-a-brief-history/1711827.html"><h6 style ={titleName}>Natural Remedies: A Brief History</h6></a>
                <p style ={authorName}>by: GRACE JAUWENA</p>
             
            </div>

<div class="vLine"></div>


<div className="descThree">
        <a href="https://lifeandhealth.org/nutrition/turmeric-the-what-the-why-and-the-how/1511117.html"><h6 style ={titleName}>Turmeric: The What, The Why,<br></br> And The How</h6></a>
                <p style ={authorName}>by:JUSTIN LEAL </p>
          </div>

<div class="vLine"></div>

            <div className="descThree">
            <a href="https://lifeandhealth.org/food/why-plant-based/an-interview-with-a-plant-based-doctor-and-autoimmune-disease-cookbook-author/0815050.html"><h6 style ={titleName}>We Sit Down With Plant-Based <br/> Doctor And Autoimmune <br/> Disease Cookbook Author, <br/> Dr. Joyce Choe</h6></a>
                  <p style ={authorName}>by: GRACE JAUWENA</p>   
            </div>  
   </div> 
   

</div>   

<div class="vl"></div>


<div class="bottomHalf">

<div className="descFour">
        <a href="https://lifeandhealth.org/lifestyle/how-to-get-better-sleep/1717188.html"><img src="https://lifeandhealth.org/wp-content/uploads/2019/09/vladislav-muslakov-CwIU33KGToc-unsplash-600x600.jpg" alt="magazineCover"></img></a>
        <div className="infosec">
            <h6 style ={titleName}>How To Get Better Sleep</h6>
                <p style ={authorName}>by: HARVEY HAHN, MD, FACC</p>
              </div>            
    </div>

    <div class="hl"></div>

<div className="bottomLeft">
    <div className ="descfiveOne">

    <div className="descFive">
        <a href="https://lifeandhealth.org/nutrition/morning-coffee-can-impair-blood-sugar-response/1520002.html"><h6 style ={titleName}>Morning Coffee Can Impair <br></br>Blood Sugar Response</h6></a>
            <p style ={authorName}>by: DANNY KWON JD</p>
          
        </div>



        <div className="descFive">
        <a href="https://lifeandhealth.org/fitness/do-you-really-need-10000-steps-per-day/1719782.html"><h6 style ={titleName}>Do You Really Need 10,000<br></br> Steps Per Day?</h6></a>
       
                <p style ={authorName}>by: DANNY KWON JD</p>
             
    </div>
    </div>
    
    <div class="vlFive"></div>
    

    <div className = "descfiveOne">
    <div className="descFive">
        <a href="https://lifeandhealth.org/fitness/the-7-keys-to-a-long-and-healthy-life-exercise/0214317.html"><h6 style ={titleName}>The 7 Keys To A Long And<br></br>Healthy Life: Exercise</h6></a>
            <p style ={authorName}>by: WESTNEY WHITE</p>  
        </div>


        <div className="descFive">
        <a href="https://lifeandhealth.org/fitness/do-you-really-need-10000-steps-per-day/1719782.html"><h6 style ={titleName}>5 Ways To Keep Your<br></br> Motivation To Exercise</h6></a>
       
                <p style ={authorName}>by: WESTNEY WHITE</p>         
    </div>

 </div>
 </div>
    
  </div>   

</> 

    )
}


export default PublicRoute