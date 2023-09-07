import React, { useState } from "react";
import Nav from "./comp/nav";
import Rout from "./comp/rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./comp/footer";
import Productdetail from "./comp/productdetail";

const App = () => {
  // product detail
  const [detail, setDetail] = useState([]);
  // filter product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat.toLowerCase() === product.trim().toLowerCase();
    });
    
    setProduct(change);
  };
  // product detail
  const view = (product) => 
  {
    setDetail([{...product}])
  }
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
