import React from "react";
import "./index.css";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );

  // return (
  //   <Router>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} /> 
  //     </Routes>
  //   </Router>
  // )


}

export default App;
