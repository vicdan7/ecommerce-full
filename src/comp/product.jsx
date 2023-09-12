import React from 'react';
import Productdetail from './productdetail';
import './product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Product = ({product, setProduct, detail, view, close, setClose}) => {
    
   const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x) =>
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => 
    {
        setProduct(Productdetail)
    }
  return (
    <>
    {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)}><AiOutlineCloseCircle /></button>
            {
                detail.map((deta) =>
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={deta.Img} alt={deta.Title} />
                            </div>
                            <div className='detail'>
                                <h4>{deta.Cat}</h4>
                                <h2>{deta.Title}</h2>
                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends</p>
                                <h3>{deta.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }

    <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                        <li onClick={() => AllProducts()}>All Products</li>
                        <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                        <li onClick={() => filtterproduct("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                        <li onClick={() => filtterproduct("Camera")}>Camera</li>
                        <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
                        <li onClick={() => filtterproduct("Powerbank")}>Powerbank</li>
                        <li onClick={() => filtterproduct("Electronics")}>Electronics</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((produ) =>
                        {
                            return(
                                <div className='box' key={produ.id}>
                                    <div className='img_box'>
                                        <img src={produ.Img} alt={produ.Title}></img>
                                        <div className='icon'>
                                            <li><AiOutlineShoppingCart /></li>
                                            <li onClick={() => view(produ)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{produ.Cat}</p>
                                        <h3>{produ.Title}</h3>
                                        <h4>{produ.Price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Product;
