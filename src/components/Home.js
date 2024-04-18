import React, { useState } from "react";
import axios from "axios";
import RecipeResults from "./RecipeResults";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import BonApetit from "../assets/bonapetit.png";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
  ];

  const [currentImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2",
      params: {
        type: "public",
        co2EmissionsClass: "A+",
        beta: "true",
        random: "true",
        q: query,
      },
      headers: {
        "X-RapidAPI-Key": "47ea3bc783mshf2462813017f5a9p100c35jsnb736c52e8a6c",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setRecipes(response.data.hits);
        console.log(response.data.hits);
        console.log(response.data.hits[0].recipe.label);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/About");
  };

  return (
    <>
      <div
        className="jumbotron bg-light bg-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="wrapper__jumbotron d-flex">
          <div className="jumbotron__content d-flex flex-column">
            <img
              className="jumbotron__content-head"
              src={BonApetit}
              alt="Bon Apetit"
              width={750}
            />
            <div className="jumbotron__content-para mb-4">
              <p>
                Having a hard time deciding what to cook? Are you struggling to
                plan meals for the week? Or, maybe you just want a spontaneous
                adventure for your palate...
              </p>

              <p>Meal Master will help ease your stress in just a few steps!</p>
            </div>

            <p className="jumbotron__content-para-steps">
              1. Enter your desired{" "}
              <span className="steps-span">ingredients</span>,{" "}
              <span className="steps-span">meals</span>,{" "}
              <span className="steps-span">category</span>, or even{" "}
              <span className="steps-span">cuisine</span> in the input box
              below!
              <br />
              2. Hit <span className="steps-span">Search</span> whenever you are
              ready
              <br />
              3. Scroll down to view the many recipes Meal Master has generated
              for you
              <br />
              4. Choose one to dive into and Enjoy!
            </p>
            <div className="d-flex gap-2 jumbotron__content-cta">
              <p>
                <button onClick={navigateToAbout} className="btn-cta">
                  Read More
                </button>
              </p>
              <p>
                <input
                  className="inputBox"
                  type="text"
                  placeholder="What do you fancy?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} className="inputBox-btn">
                  Search
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipeResults grid-container">
        {recipes.map(({ recipe }) => (
          <RecipeResults
            key={recipe.url}
            label={recipe.label}
            mealType={recipe.mealType}
            cuisineType={recipe.cuisineType}
            image={recipe.image}
            recipeUrl={recipe.url}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
