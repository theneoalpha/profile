import React from 'react'
import "../components/assets/navbar.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Navbar2() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
      <div className="title"> <div className="typing-demo"> TheNeoAlpha</div>   </div>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
         <li className="nav-item  mx-3">
          <a href="https://ollymods.blogspot.com/" className="nav-link" target="_blank">Blog</a>
        </li>
        <li className="social"> <a href="https://www.instagram.com/theneoalpha/" ><InstagramIcon/></a>
        <a href="https://github.com/theneoalpha" ><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/vikash-kaushik-08a688240/" ><LinkedInIcon/></a>
        <a href="https://www.youtube.com/c/TheNeoAlpha"><YouTubeIcon/></a>
       
        </li>
        
        
        
        
        
        
        
        </ul>
        
      </form>
    </div>
  </div>
</nav>
    
    
    
    </>
  )
}
