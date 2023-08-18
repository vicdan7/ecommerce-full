import React from 'react';
import logo from '../assets/img/logo3.png';
import { BiLogoFacebook } from 'react-icons/bi';
import {BiLogoInstagram } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';
import './footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='container'>
        <div className='about'>
          <div className='logo2'>
            <img src={logo} alt="" />
          </div>
          <div className='detail'>
            <p>I am a designer and developer that create high quality WordPress</p>
            <div className='icon'>
              <li><BiLogoFacebook /></li>
              <li><BiLogoInstagram /></li>
              <li><BiLogoTwitter /></li>
              <li><BiLogoYoutube /></li>
            </div>
          </div>
        </div>
        <div className='account'>
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>
        <div className='page'>
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Term & Condition</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
