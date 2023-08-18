import React from "react";
import Nav from "./comp/nav";
import Rout from "./comp/rout";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  );
};

export default App;
