import './css/App.css';
import React, {useState} from 'react';

const Footer = () => {

    return (
      <footer>
        <div className='footer-content'>
            <div className='footer-content-item'>
                <h2 className='text-footer-title'>Copyright</h2>
                <p className='text-footer'>This is an academic project. Please do not distribute or contribute.</p>
            </div>
            <div className='v-div'></div>
            <div className='footer-content-item'>
                <h2 className='text-footer-title'>Links</h2>
                <article>
                    <p className='text-footer'>Dashboard<br/>Issues<br/>EC</p>
                    <p className='text-footer'>Services<br/>FAQ<br/>Account</p>
                </article>
            </div>
            <div className='v-div'></div>
            <div className='footer-content-item'>
            <h2 className='text-footer-title'>Authors</h2>
                <article>
                    <p className='text-footer'>Roman Pretty<br/>Aarti Mukesh Chandnani<br/>Amelia Hussain</p>
                    <p className='text-footer'>Pardis Habibi<br/>Dhiren Hitescumar Daialal<br/>Darien Perpepa</p>
                    <p className='text-footer'>Darien Perpepa</p>
                </article>
            </div>
        </div>
      </footer>
  );
};
export default Footer;
