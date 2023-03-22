import React from "react";
import Logo from "../assets/logo-badge.png";
import "./About.css";
// import Footer from ‘./Footer’

const About = () => {
  return (
    <>
      <div className="jumbotron bg-light">
        <div className="wrapper__jumbotron d-flex">
          <div className="jumbotron__content d-flex flex-column">
            <div className="logo">
              <img src={Logo} alt="mealmasterlogo" />
            </div>
            <h1>About Us</h1>
            <p>
              We have created this recipe app to allow users to search for their
              favourite recipes. You can simply type in the key ingredient and
              our app will give you many options. The website provides
              step-by-step instructions for each recipe, along with ingredient
              lists, nutritional information.
              <br></br>
              <br></br>
              <br></br>
              This includes people of all ages and backgrounds who enjoy cooking
              or want to improve their cooking skills. Additionally, the app
              could cater to individuals with specific dietary requirements or
              preferences, such as vegans, vegetarians, gluten-free or
              dairy-free diets.
              <br></br>
              <br></br>
              <br></br>
              The recipe app will address the problem of people not having
              access to a convenient and comprehensive resource for finding
              recipes. It will provide users with a platform to easily search
              for and save recipes based on their dietary preferences,
              ingredients, and cooking time. Our product streamlines the
              recipe-finding and meal planning process, saving users time and
              reducing the stress of meal preparation.
            </p>
            <div className="d-flex gap-2">
              <p></p>

              <div className="button">
                {" "}
                <a href="https://github.com/DesislavaMetodieva/meal-master">
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=""> <Footer /></div> */}
    </>
  );
};
export default About;
