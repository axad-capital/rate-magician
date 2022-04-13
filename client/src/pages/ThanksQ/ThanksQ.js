import React from 'react'
import './thanksQ.css'

const ThanksQ = () => {

  let adData = JSON.parse(localStorage.getItem('adData'))
  // console.log(adData);
  let listings = adData.listings
  console.log(listings)

  return (
    <div>
      <div className='ad-container'>
        <h1 className='ad-title'>Compare Insurance Quotes in Your Area. Click on 2 or more Insurance Partners below to compare quotes and maximize your savings.</h1>
        <div className='ads'>
          {listings.map(ads => (
            <div className='ad' key={ads.buyerID}>
              <img src={ads.logo} alt={ads.displayname} />
              <div>
                <p className='listing-title'>{ads.listingTitle}</p>
                <div>{ads.listingDescription.replace(/(<([^>]+)>)/gi, "").replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
              <button onClick={() => window.location.href = ads.url} className='get-quote-btn'>GET QUOTE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThanksQ