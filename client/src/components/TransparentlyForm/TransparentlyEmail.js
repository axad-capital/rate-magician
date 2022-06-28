import React, { useState } from 'react';
import HeaderImg from '../HomeComp/header-img.png'

const TransparentlyForm = () => {

  const [blankHandler, setBlankHandler] = useState('')

  function handleStateFormSubmit() {
    // let zip = document.getElementById('magic-zip').value
    // console.log(zip);

    // if (zip.value === null || zip.value === '' || zip.value.length < 5) {
    //   setBlankHandler('You Must Enter A Valid Zipcode!')
    //   return
    // }

    if (document.getElementById('state').value === '' || document.getElementById('home-owner').value === '' || document.getElementById('insured').value === '' || document.getElementById('age').value === '') {
      setBlankHandler('All fields required')
      return
    }

    if (parseInt(document.getElementById('age').value) <= 0) {
      setBlankHandler('Please enter a valid age')
      return
    }

    let userInput = {
      "state": document.getElementById('state').value,
      "pubcampaignid": "6364",
      "vertical": "2",
      "age": document.getElementById('age').value,
      "homeowner": document.getElementById('home-owner').value,
      "currentlyinsured": document.getElementById('insured').value
    }

    fetch('https://api.transparent.ly/search/blue/green', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('transparentlyAutoEmail', JSON.stringify(data))
        window.location.href = '/t-thanks/email'
      })
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

        <label htmlFor="state"><strong>Please choose the current state you're in</strong></label>
        <select id='state' className='form-input' name="state">
          <option disabled selected value=''> -- Select An Option -- </option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>

        <label htmlFor="home-owner"><strong>Are you a homeowner?</strong></label>
        <select id='home-owner' className='form-input' name="home-owner">
          <option disabled selected value=''> -- Select An Option -- </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label htmlFor="insured"><strong>Are you a insured?</strong></label>
        <select id='insured' className='form-input' name="insured">
          <option disabled selected value=''> -- Select An Option -- </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label htmlFor="age"><strong>Enter your age</strong></label>
        <input id='age' className='form-input' type="number" placeholder='Enter your age' />
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