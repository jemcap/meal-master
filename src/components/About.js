import React from 'react'
import Logo from "../assets/logo-badge.png"
import "./About.css"
// import Footer from ‘./Footer’

const About = () => {
  return (

    <>
    <div className="jumbotron bg-light">
      <div className="wrapper__jumbotron d-flex">
        <div className="jumbotron__content d-flex flex-column">
          <div className="logo"><img src = {Logo} alt="mealmasterlogo"/></div>
          <h1>Hello</h1>
          <p>Project Description:

The recipe app is an application that allows users to search for their favourite recipes. </p>
          <div className="d-flex gap-2">
            <p>
              
            </p>
            {/* <p>
              <input
                type="text"
              />
              ;
            
              ;
            </p> */}
            <div className='button'> <a href = "https://github.com/DesislavaMetodieva/meal-master">View Repo</a></div> 
          </div>
        </div>
      </div>
    </div>
    {/* <div className=""> <Footer /></div> */}
  </>
    
  )
  }
export default About
