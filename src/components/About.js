import React from 'react'

const About = () => {
  return (

    <>
    <div className="jumbotron bg-light">
      <div className="wrapper__jumbotron d-flex">
        <div className="jumbotron__content d-flex flex-column">
          <h1>Hello</h1>
          <p>Project Description:

The recipe app is an application that allows users to search for their favourite recipes. The app has a user-friendly interface that allows users to search for recipes based on keywords, ingredients, or dietary restrictions. The website provides step-by-step instructions for each recipe, along with ingredient lists, nutritional information.

Description/User Story:
As a user, I want to be able to search for recipes based on specific ingredients or keywords. I want the app to return relevant recipes that match my search criteria, along with a list of required ingredients and instructions on how to prepare the dish.

Who is your audience?
The audience for a recipe app could be anyone who is interested in cooking or wants to learn new recipes. This includes people of all ages and backgrounds who enjoy cooking or want to improve their cooking skills. Additionally, the app could cater to individuals with specific dietary requirements or preferences, such as vegans, vegetarians, gluten-free or dairy-free diets.

What is the problem the product will address?
The recipe app will address the problem of people not having access to a convenient and comprehensive resource for finding recipes. It will provide users with a platform to easily search for and save recipes based on their dietary preferences, ingredients, and cooking time. 

How does the product solve that problem?
The product aims to solve the problem of finding recipes by providing a platform where users can easily search recipes. By offering a variety of recipes, as well as the ability to add multiple search criteria and search based on ingredients or dietary restrictions, the app makes it easier for users to find recipes that fit their needs and preferences. Overall, the product streamlines the recipe-finding and meal planning process, saving users time and reducing the stress of meal preparation.</p>
          <div className="d-flex gap-2">
            <p>
              
            </p>
            <p>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              ;
              <button onClick={handleSearch}>Search</button>
              ;
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
    
  )
  }
export default About