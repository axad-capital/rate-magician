import React from 'react'
import NavHome from '../../components/NavComp/NavComp';
import './legal.css';


const Disclaimer = () => {
  return (
    <div>
      <NavHome />
      <div className='legal center-text'>
        <h1>Disclaimer</h1>
        <br />
        <p>By clicking “Yes” I provide my signature expressly consenting to contact from Allied Insurance Partners, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy.</p>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Disclaimer