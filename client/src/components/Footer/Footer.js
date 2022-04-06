import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
            <div>
                <Link to='/privacy-policy'><h6>Privacy Policy</h6></Link>
                <Link to='/terms'><h6>Terms and Conditions</h6></Link>
                <Link to='/disclaimer'><h6>Disclaimer</h6></Link>
                <Link to='/partners'><h6>Partners</h6></Link>
            </div>
            <br />
            <p>&copy; 2022 Rate Trooper</p>
        </div>
    </div>
  )
}

export default Footer