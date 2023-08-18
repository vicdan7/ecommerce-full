import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaPercentage } from 'react-icons/fa'
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import Homeproduct from './homeproduct';
import slider from "../assets/img/slider-img.png";
import mobile from "../assets/img/Mobile Phone.png";
import head from "../assets/img/headphone.png";
import cpu from "../assets/img/cpu.png";
import smart from "../assets/img/smart watch.png";
import './home.css';

const Home = () => {
 
  return (
    <>
      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Note Book Collection 2023 By Victor</h2>
            <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
            <img src={slider} alt="" />
          </div>
        </div>
      </div>
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src={mobile} alt="" />
            </div>
            <div className='detail'>
              <p>23 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={smart} alt="" />
            </div>
            <div className='detail'>
              <p>18 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={head} alt="" />
            </div>
            <div className='detail'>
              <p>52 products</p>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={cpu} alt="" />
            </div>
            <div className='detail'>
              <p>63 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <FiTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BsCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <FaPercentage />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
          {
           Homeproduct.map((produ) => 
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
      <div className='banner'>
        <div className='container'>
        <div className='detail'>
          <h4>LATEST TECHNOLOGY ADDED</h4>
          <h3>Apple iPad 10.2 9th Gen - 2021</h3>
          <p>$ 986</p>
          <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
        </div>
        <div className='img_box'>
          <img src={slider} alt="" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
