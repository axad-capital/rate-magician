import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavComp from './components/NavComp/NavComp';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import Thanks from './pages/Thanks/Thanks';
import QuoteForm from './components/QuoteForm/QuoteForm';
import ThanksQ from './pages/ThanksQ/ThanksQ'
import TransparentlyEmail from './components/TransparentlyForm/TransparentlyEmail';
import TransparentlyNative from './components/TransparentlyForm/TransparentlyNative'
import TransparentlySocial from './components/TransparentlyForm/TransparentlySocial'
import QuoteFormNative from './components/QuoteForm/QuoteFormNative';
import ThanksNat from './pages/ThanksQ/ThanksNat';
import QuoteFormSocial from './components/QuoteForm/QuoteFormSocial';
import ThanksSoc from './pages/ThanksQ/ThanksSoc';
import TThanksEmail from './pages/Thanks/TThanksEmail';
import TThanksNative from './pages/Thanks/TThanksNative';
import TThanksSocial from './pages/Thanks/TThanksSocial';

function App() {
  return (
    <div className="App">
       <Router>
         <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/get-quote' element={<QuoteForm />} />
          <Route exact path='/thank-you' element={<ThanksQ />} />
          <Route exact path='/t-form/email' element={<TransparentlyEmail />} />
          <Route exact path='/t-form/native' element={<TransparentlyNative />} />
          <Route exact path='/t-form/social' element={<TransparentlySocial />} />
          <Route exact path='/get-quote/nat' element={<QuoteFormNative />} />
          <Route exact path='/thank-you/nat' element={<ThanksNat />} />
          <Route exact path='/get-quote/soc' element={<QuoteFormSocial />} />
          <Route exact path='/thank-you/soc' element={<ThanksSoc />} />
          <Route exact path='/t-thanks/email' element={<TThanksEmail />} />
          <Route exact path='/t-thanks/native' element={<TThanksNative />} />
          <Route exact path='/t-thanks/social' element={<TThanksSocial />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
