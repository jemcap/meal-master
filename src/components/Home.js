import React from "react";

const Home = () => {
  return (
    <>
      <div className="jumbotron bg-light">
        <div className="wrapper__jumbotron d-flex">
          <div className="jumbotron__content d-flex flex-column">
            <h1>Hello</h1>
            <p>Lorem Ipsum.</p>
            <div className="d-flex gap-2">
              <p>
                <a href="https://github.com/jemcap">
                  <button className="btn-cta">Read More</button>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/capitogram/">
                  <button className="btn btn-primary"></button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
