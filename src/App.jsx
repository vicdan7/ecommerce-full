import React from "react";
import Nav from "./comp/nav";
import Rout from "./comp/rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./comp/footer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
