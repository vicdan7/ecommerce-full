import React from 'react';
import Productdetail from './productdetail';
import './product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

const Product = () => {
  return (
    <>
    <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                    <ul>
                        <li>Tablet</li>
                        <li>Smart Watch</li>
                        <li>Headphone</li>
                        <li>Camera</li>
                        <li>Gaming</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        Productdetail.map((produ) =>
                        {
                            return(
                                <div className='box' key={produ.id}>
                                    <div className='img_box'>
                                        <img src={produ.Img} alt={produ.Title}></img>
                                        <div className='icon'>
                                            <li><AiOutlineShoppingCart /></li>
                                            <li><BsEye /></li>
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
