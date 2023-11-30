import React from "react"
import "./Header.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBox from "../../pages/SearchBox"



const Header = () => {

   
    const [searchValue, setSearchValue] = useState('');
   
    return (
        
       
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="cineview logo.png" alt="logo"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                
                {/* <Link to="/movies/search" style={{textDecoration: "none"}}><input type="text"></input></Link> */}
                

            </div>
        </div>
     
    
    )
}

export default Header