import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './quoteForm.css'
import CarLogoQuote from './header-img.png'

const QuoteFormNative = () => {

    const [error, setError] = useState('')

    clearLocal()

    function clearLocal() {
        localStorage.removeItem('adDataNat')
    }

    function getVarId() {
        var url = window.location.href;
        var match = url.match(/source=(\d+)/)
        if (match) {
            var varId = match[1];
            return varId
        }
        return 21
    }

    function quoteFormHandler() {
        fetch('https://api.ipify.org/?format=json')
            .then(result => result.json())
            .then(data => {
                let autoData = {
                    id: uuidv4(),
                    homeOwner: document.getElementById('home-owner').value,
                    insured: document.getElementById('insured').value,
                    vehicles: document.getElementById('vehicles').value,
                    zipcode: document.getElementById('auto-zip').value
                }

                if (autoData.homeOwner === '' || autoData.insured === '' || autoData.vehicles === '' || autoData.zipcode === '') {
                    setError('All fields are required*')
                    return
                } else {

                    let testData = {
                        "tracking": {
                            "content_type": "xml/json",
                            "ni_ad_client": 669682,
                            "ni_zc": autoData.zipcode,
                            "ip": data.ip,
                            "ua": navigator.userAgent,
                            "ni_var1": getVarId(),
                            "ni_ref": "https://www.ratemagician.com/thank-you/nat"
                        },
                        "contact": {
                            "zip": autoData.zipcode,
                            "homeowner": autoData.homeOwner,
                        },
                        "current_insurance": {
                            "currently_insured": autoData.insured,
                        },
                        "requested_coverage": {
                            "vehicle_count": autoData.vehicles,
                        }
                    }

                    fetch("https://www.nextinsure.com/listingdisplay/listings", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(testData)

                    }).then(res => {
                        return res.json()
                    }).then(data => {
                        if (data.listings === '') {
                            window.location.href = '/thank-you/nat'
                        }
                        console.log(data)
                        localStorage.setItem('adDataNat', JSON.stringify(data))
                        window.location.href = '/thank-you/nat'
                    })
                }
            })
    }
    return (
        <div>
            <div className='quote-main-container'>
                <div className='quote-main-img'>
                    <img className='quote-img' src={CarLogoQuote} alt="car" />
                </div>
                <div className='quote-form'>
                    <h1 id='quote-heading'>Get A Free Quote Now</h1>
                    <p className='quote-sub-heading'>Stay Home & Find Affordable Car Insurance In 2 Minutes</p>
                    <div className='auto-form'>

                        <label className='zip-code-label' htmlFor="zip">Enter Your Zipcode</label>
                        <input id='auto-zip' name='zip' className='form-input' type="text" placeholder='Zipcode' />

                        <label htmlFor="home-owner">Are you a Home Owner?</label>
                        <select id='home-owner' className='form-input' name="home-owner">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <label htmlFor="insured">Are you currently insured?</label>
                        <select id='insured' className='form-input' name="insured">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <label htmlFor="vehicles">How Many Vehicles Do You Own</label>
                        <input id='vehicles' name='vehicles' className='form-input' type="number" placeholder='Vehicle Count' />

                        <br />
                        <button className='form-btn' onClick={quoteFormHandler}>Submit</button>
                        <p style={{ color: 'red', textAlign: 'center', fontWeight: 600 }} >{error}</p>
                    </div>
                    <p className='permission'>By clicking "Submit", I provide my express written consent via electronic signature authorizing Rate Magician and one or more Auto Insurance specialists, their agents and marketing partners to contact me and other related products and services to the number and email address I provided (including any wireless number). I further expressly consent to receive telemarketing emails, calls, text messages, pre-recorded messages, and artificial voice messages via an autodialed phone system, even if my telephone number is a mobile number that is currently listed on any state, federal or corporate “Do Not Call” list. I understand that my consent is not a condition of purchase of any goods or services and that standard message and data rates may apply.</p>
                </div>
            </div>
        </div>
    )
}

export default QuoteFormNative