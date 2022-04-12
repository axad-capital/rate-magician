import React, { useState } from 'react';
import './homeComp.css'
import HeaderImg from './header-img.png'
import Footer from '../Footer/Footer'
import { v4 as uuidv4 } from 'uuid'

const HomeComp = () => {

    function quoteFormHandler() {
        fetch('https://api.ipify.org/?format=json')
            .then(result => result.json())
            .then(data => {
                let autoData = {
                    id: uuidv4(),
                    firstName: document.getElementById('first').value,
                    lastName: document.getElementById('last').value,
                    birth: document.getElementById('bday').value,
                    email: document.getElementById('email').value,
                    homeOwner: document.getElementById('home-owner').value,
                    insured: document.getElementById('insured').value,
                    vehicles: document.getElementById('vehicles').value,
                    phone: document.getElementById('phone-num').value,
                    zipcode: document.getElementById('auto-zip').value
                }

                let testData = {
                    "tracking": {
                        "content_type": "xml/json",
                        "ni_ad_client": 663989,
                        "ni_zc": autoData.zipcode,
                        "ip": data.ip,
                        "ua": navigator.userAgent,
                        "ni_var1": autoData.id,
                        "ni_ref": "/auto-thank-you"
                    },
                    "contact": {
                        "first_name": autoData.firstName,
                        "last_name": autoData.lastName,
                        "email": autoData.email,
                        "zip": autoData.zipcode,
                        "homeowner": autoData.homeOwner,
                    },
                    "current_insurance": {
                        "currently_insured": autoData.insured,
                    },
                    "requested_coverage": {
                        "vehicle_count": autoData.vehicles,
                    },
                    "individuals": {
                        "birthdate": autoData.birthdate,
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
                    console.log(data)
                })
            })
    }

    const [blankHandler, setBlankHandler] = useState('')

    function handleFormSubmit() {
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

    function handleFormSubmit2() {
        let zip = document.querySelector('.magic-zip2').value
        console.log(zip);
        if (document.querySelector('.magic-zip2').value === null || document.querySelector('.magic-zip2').value === '' || document.querySelector('.magic-zip2').value.length < 5) {
            setBlankHandler('You Must Enter A Valid Zipcode!')
            return
        }
        let autoZip = document.querySelector('.magic-zip2').value
        localStorage.setItem('zipcodeMagic', autoZip)
        window.location.href = '/thanks'
    }

    return (
        <div>
            <div className='header-container'>
                <div className='header-info'>
                    <h1 className='header-info-title'>Save Up To <span className='orange'>30%</span> Get A Car Insurance Quote In Minutes!</h1>
                </div>
                <div className='header-img-container'>
                    <img className='header-img' src={HeaderImg} alt="magic" />
                </div>
            </div>

            <div className='form-container'>
                <h1 className='form-container-title'>Get A Free Quote Now</h1>
                <label htmlFor="zip"><strong>Enter Your Zipcode</strong></label>
                <input type="text" name="zip" id="magic-zip" placeholder='Zipcode' />
                <button className='submit-btn' onClick={handleFormSubmit}>Submit</button>
                <p style={{ color: 'red', textAlign: 'center' }} >{blankHandler}</p>
            </div>

            <div className='we-work-container'>
                <h1 className='we-work-title'>We Work For You Not The Insurance Companies.</h1>
                <br />
                <p className='we-work-text'>Rate Magician helps Auto Insurance consumers find the perfect rate for their needs. We do this with state-of-the-art technology to match users with the insurance carrier that can provide the best rate and stellar service. It's all simple, easy and free to get a quote in minutes!</p>
            </div>

            <div className="get-insured">
                <div className='get-insured-title'>
                    <h2>Get Insured In 3 Easy Steps</h2>
                </div>
                <div className='get-insured-steps'>
                    <p>☑️ Fill in the details about yourself and your vehicle.</p>
                    <p>☑️ Request a free quote in just minutes</p>
                    <p>☑️ Find the best policy for your budget</p>
                </div>
            </div>

            <div id='about-us' className='steps-container'>
                <h1>We Make Insurance Complanice Fight For Your Business.</h1>
                <br />
                <br />
                <div className='steps'>
                    <div className='step-info'>
                        <h4 className='step-titles'>Find Companies In Your Area</h4>
                        <div className='line'></div>
                        <p>Start by typing in your zipcode within our form.</p>
                    </div>
                    <div className='step-info'>
                        <h4 className='step-titles'>Compare Insurance Providers</h4>
                        <div className='line'></div>
                        <p>Let us do all the work by find the best and morst affordable plans.</p>
                    </div>
                    <div className='step-info'>
                        <h4 className='step-titles'>Connect With Licensed Agents</h4>
                        <div className='line'></div>
                        <p>Click on one of the options we find for you and move onto major savings.</p>
                    </div>
                </div>
            </div>

            <div className="get-quote-container">
                <div>
                    <h4>Get Your Auto Quote Today</h4>
                    <p>Join with over hundreds of customers in your area who already saved big</p>
                </div>
                <div className='get-quote-form'>
                    <label htmlFor="zip"><strong>Enter Your Zipcode</strong></label>
                    <input className='magic-zip2' type="text" name="zip" id="magic-zip" placeholder='Zipcode' />
                    <button className='submit-btn' onClick={handleFormSubmit2}>Submit</button>
                    <p style={{ color: 'red', textAlign: 'center' }} >{blankHandler}</p>
                </div>
            </div>

            <Footer />



            <div className='quote-form'>
                <h1 id='quote-heading'>Get A Free Quote Now</h1>
                <p>Stay Home & Find Affordable Car Insurance In 2 Minutes</p>
                <div className='auto-form'>

                    <label htmlFor="first">First Name</label>
                    <input id='first' name='first' className='form-input' type="text" placeholder='First Name' />
                    <label htmlFor="last">Last Name</label>
                    <input id='last' name='last' className='form-input' type="text" placeholder='Last Name' />

                    <label className='zip-code-label' htmlFor="zip">Enter Your Zipcode</label>
                    <input id='auto-zip' name='zip' className='form-input' type="text" placeholder='Zipcode' />

                    <label htmlFor="email">Email</label>
                    <input id='email' name='email' className='form-input' type="text" placeholder='Email' />
                    <label htmlFor="bday">Date of Birth</label>
                    <input id='bday' name='bday' className='form-input' type="date" />

                    {/* <label htmlFor="vehicles">Current Age</label>
                    <input id='age' name='age' className='form-input' type="number" placeholder='Age' /> */}

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

                    <label htmlFor="phone-num">Phone Number</label>
                    <input id='phone-num' name='phone-num' className='form-input' type="text" placeholder='Phone Number' />

                    <br />
                    <button className='form-btn disable' onClick={quoteFormHandler}>Submit</button>
                    <br />
                    <p style={{ color: 'red', textAlign: 'center' }} >{blankHandler}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeComp