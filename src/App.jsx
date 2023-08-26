import React, { useState } from "react";
import Nav from "./comp/nav";
import Rout from "./comp/rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./comp/footer";
import Productdetail from "./comp/productdetail";


const App = () => {
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
