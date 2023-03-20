import React, { useState } from "react";
import axios from "axios";
import RecipeResults from "./RecipeResults";

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
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: query },
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

  return (
    <>
      <div
        className="jumbotron bg-light bg-image"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="wrapper__jumbotron d-flex">
          <div className="jumbotron__content d-flex flex-column">
            <h1>Hello</h1>
            <p>Lorem Ipsum.</p>
            <div className="d-flex gap-2">
              <p>
                <a href="www.google.com">
                  <button className="btn-cta">Read More</button>
                </a>
              </p>
              <p>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipeResults">
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
