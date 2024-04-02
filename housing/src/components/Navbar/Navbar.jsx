import "./Navbar.css"



const Nav = () =>{

    return(

        <div className="Nav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        <nav>
         

           <ul>

            <div className="logo">
            <img src="" alt="logo" />
            <div className="h2-p">
            <h2>VERZ</h2>
            <p>neighbourhood</p>
            </div>
            
            </div>
            
            <li><a href="#">Product</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Blog</a></li>
           </ul>
            
        </nav>

        <nav>

            <div className="location-main">
            <div className="location">
            <i className="fa-solid fa-globe"></i>
            <p><span>Eng</span></p>
            <i className="fa-solid fa-chevron-down"></i>
            </div>
           <button type="button">Join Wallet</button>
            </div>
           
        </nav>
              
        </div>
    )
}
export default Nav