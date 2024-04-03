import "./Header.css"
import icons8 from "../../images/icons8-person-48.png"


const Head = () =>{

    return(

        <div className="head">

          <header>
          <div className="house">
            <div className="info">
            <h1><span className="become">Become</span> part of a private <br />
            <span className="comm">community</span> for your loccal <br />
            <span className="neigh">neighbourhood</span>
            </h1>
              
              <div className="p-button">
              <p>VERZ: Neighbourhood is for everyone who wants to participate in their <br />
            community and share responsibility for making their surrondings better.
            </p>

            <button type="button">Join Wallet</button>
              </div>
           
            </div>

            <div className="main-date">
            <div className="date">
              <i className="fa-solid fa-calendar"></i>
              <div className="info">
              <p>Coming in</p>
              <h2>Q4 2024</h2>
              </div>

            </div>
            
            <div className="arrow">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              
            </div>

           

           
          </div>

          </header>

     
     <div className="messages">
     <i className="fa-solid fa-message"></i>
     </div>
    
    <div className="welcome">
    <h2><span className="welcome-text">Welcome</span>Neighbor</h2>
    </div>
    


<div className="desc">

<p className="bring">Bringig neigbors together <br />
    for a more comfortable life
    </p>

    <p className="stream">Streamine community, management, discuss issues, get news, vote on initiative, <br />
    manage finances,inventory,knowledge, database,devices,policies and more
    </p>
</div>


<hr />


 <div className="back-img">

  <div className="back-main">

    <div className="im-inf">
    <img src={icons8} alt="" className="img-round"/>
<p className="img-inf">John did you vote for the playground equipment ?</p>
    </div>
  
 
 

 
<div className="card">
  <h2>An equipped sports ground</h2>
  <p>REsdents and the administartion will <br />
  co-finance the propossed initiative
  </p>

<div className="person">
<div className="person-info">
<img src={icons8} alt="" className="person-image" />
  <p className="john">John Doe</p>
</div>

  <p className="john">27 Nov, 2024</p>
</div>


<div className="card2">

<div className="ca-info">
<i className="fa-solid fa-check"></i>
  <p>153 votes received</p> 
  
</div>


<p className="votes">78% of votes were [A quarium percent]</p>
  
</div>
 
 </div>

  </div>



 </div>
   

   <div className="card3">

   <h2><span className="hood">Neighbourhood</span> by the numbers</h2>
   
<div className="img-church">

<div className="card3-images">

<img src={icons8} alt="" className="img-response" />
   <img src={icons8} alt=""  className="img-response1"/>
   <img src={icons8} alt="" className="img-response2" />
   <img src={icons8} alt="" className="img-response3" />
</div>
   
   <div className="card3-church">
    <i className="fa-solid fa-city"></i>
   </div>

</div>


   </div>
  


        </div>
    )
}

export default Head