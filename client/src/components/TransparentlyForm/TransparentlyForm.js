import React, { useState } from 'react';
import HeaderImg from '../HomeComp/header-img.png'

const TransparentlyForm = () => {

  const [blankHandler, setBlankHandler] = useState('')

  function handleStateFormSubmit() {
    let zip = document.getElementById('magic-zip').value
    console.log(zip);
    if (document.getElementById('magic-zip').value === null || document.getElementById('magic-zip').value === '' || document.getElementById('magic-zip').value.length < 5) {
      setBlankHandler('You Must Enter A Valid Zipcode!')
      return
    }
    let autoZip = document.getElementById('magic-zip').value
    localStorage.setItem('zipcodeMagic', autoZip)
    window.location.href = '/thanks'
  }

  // endpoint - https://api.transparent.ly/search/blue/green
  // required fields - "state" - "pubcampaignid" - "vertical"
  // might be pubcampaignid? - 6068
  // or this ? - email 6363
  // or this ? - native 6348

  return (
    <div>
      <div className='form-container'>
        <h1 className='form-container-title'>Get A Free Quote Now</h1>
        <label htmlFor="zip"><strong>Enter Your Zipcode</strong></label>
        <input type="text" name="zip" id="magic-zip" placeholder='Zipcode' />

        <label htmlFor="home-owner">Are you a Home Owner?</label>
        <select id='home-owner' className='form-input' name="home-owner">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
        <label htmlFor="insured">Are you currently insured?</label>
        <select id='insured' className='form-input' name="insured">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="vehicles">How Many Vehicles Do You Own</label>
        <input id='vehicles' name='vehicles' className='form-input' type="number" placeholder='Vehicle Count' />
        <br />

        <button className='submit-btn' onClick={handleStateFormSubmit}>Submit</button>
        <p style={{ color: 'red', textAlign: 'center' }} >{blankHandler}</p>
      </div>
      <div className='header-container'>
        <div className='header-info'>
          <h1 className='header-info-title'>Save Up To <span className='orange'>30%</span> Get A Car Insurance Quote In Minutes!</h1>
        </div>
        <div className='header-img-container'>
          <img className='header-img' src={HeaderImg} alt="magic" />
        </div>
      </div>
    </div>
  )
}

export default TransparentlyForm