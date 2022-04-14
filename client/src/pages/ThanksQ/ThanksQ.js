import React from 'react'
import './thanksQ.css'

const ThanksQ = () => {

  let adData = JSON.parse(localStorage.getItem('adData'))
  // console.log(adData);
  let listings = adData.listings
  console.log(listings)

  if (!listings) {
    return (
      <div className='no-ads'>
        <h1 className='ad-title'>Sorry! There are currently no offers for your area at this time, try a different zipcode or try again later.</h1>
        <button onClick={() => window.location.href = '/get-quote'} className='back-btn'>Back</button>
      </div>
    )
  } else {

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
                  {/* <div>{ads.listingDescription.replace(/(<([^>]+)>)/gi, "").replace(/([A-Z])/g, ' $1').trim()}</div> */}
                </div>
                <button onClick={() => window.location.href = ads.url} className='get-quote-btn'>GET QUOTE</button>
              </div>
            ))}
          </div>
        </div>
        {/* Offer Conversion: RateTrooper - Affordable Auto Insurance Quotes - US */}
        <iframe title='pixel' src="https://offers.axtracking.com/aff_l?offer_id=1295" scrolling="no" frameborder="0" width="1" height="1"></iframe>
        {/* End Offer Conversion */}
      </div>
    )
  }
}

export default ThanksQ