import React from 'react'
import {AiOutlineGithub} from "react-icons/ai";
import "../../styles/about.css";
function About() {
  return (
    <div className='Container'>
     <h1>this is about page !</h1>
     <div className='info'>
                <p>
                It is a e-commerce website, calling an external API (dummy json) to fetch the products and manipulate it inside your application 
                </p>
                <span> - using react js ,axios,redux.and css .</span>
                 <div className='git'>
                  <h4 >developed by : </h4> <span className='name'> Yassine radim</span> <a href='https://github.com/RadimYassin' target="_blank"><AiOutlineGithub/></a>
                 </div>
     </div>
    </div>
  )
}

export default About
