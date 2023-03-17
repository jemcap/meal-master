import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

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
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <div className="jumbotron bg-light">
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
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.recipe.uri}>{recipe.recipe.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

