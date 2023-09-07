import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './Component/Page/Footer';
import Signup from './Component/Page/Signup';
import Login from './LogIn';
import FruitList from './Component/Tab';
import Home from './Component/Page/Home/Home.jsx';
import AboutUs from './Component/Page/Aboutus';
import ContactUs from './Component/Page/Contactus';
import FruitDetails from './Component/Page/FruitsDetails';
import SummaryPage from './Component/Page/Summary';
import NavCart from './Component/Page/Bcart';
import TermsAndConditionsPage from './Component/Page/Tac';
import Navigation from './Component/Page/Navigation';
import PrivateDashboard from './Component/PrivateRoutes/PrivateDashboard';
import PLogin from './Component/PrivateRoutes/page/Login';
import FruitsForm from './Component/Page/FruitsForm';

import Offer from './Component/Page/Offer';
// import NotFound from './Component/Page/Notfound';
// import NepalMap from './NepalMap';

function App() {
  return (
    <>
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/private/*" element={<PrivateDashboard />} />
          <Route path='/private/login' element={<PLogin/>}/>
          <Route path="/" element={<Home />} />
          <Route exact path="/SignIn" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fruits" element={<FruitList />} />
          <Route path="/fruitform" element={<FruitsForm/>} />
          <Route exact path="/fruits/:fruitId" element={<FruitDetails />} />

          <Route path="/aboutus/tac" element={<TermsAndConditionsPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/order-summary" element={<SummaryPage />} />
          <Route path="/navcart" element={<NavCart />} />
          <Route path="/trmsandcdn" element={<TermsAndConditionsPage />} />
          <Route path='/offer' element={<Offer/>} />
          {/* <Route element={<NotFound/>}/> */}
        </Routes>
        <Footer />
      </>
    </Router>
    </>
  );
}

export default App;
