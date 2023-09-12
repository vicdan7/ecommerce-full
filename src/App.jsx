import React, { useState } from "react";
import Nav from "./comp/nav";
import Rout from "./comp/rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./comp/footer";
import Productdetail from "./comp/productdetail";

const App = () => {
  // product detail
  const [close, setClose] = useState(true);
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
    setClose(true)
  }
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
