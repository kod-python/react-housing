import "./Header.css"


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
    
    <h2><span>Welcome Neighbor</span></h2>
        </div>
    )
}

export default Head