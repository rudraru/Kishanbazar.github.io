
import { Routes , Route} from 'react-router-dom';
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
import Bcart from './Component/Page/Bcart';
import TermsAndConditionsPage from './Component/Page/Tac';


function App() {
  return (
    <>


<Routes>
<Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Login/>} />
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/SignIn' element={<Login/>}/> 
<Route path='/fruits' element={<FruitList/>}/>
<Route exact path="/fruits/:fruitId" element={<FruitDetails/>} />

<Route exact path="/fruits/:fruitId/:size" element={<FruitDetails/>} />
<Route path='/Aboutus/tac' element={<TermsAndConditionsPage/>}/>
<Route path='/Aboutus/us' element={<AboutUs/>}/>

  <Route path='/Fruits' element={<FruitList/>}/>
  <Route path='/Contactus' element={<ContactUs/>}/>
  <Route path='/order-summary' element={<SummaryPage/>}/>
  <Route path='/Bcart' element={<Bcart/>}/>
  <Route path='/Trmsandcdn' element={<TermsAndConditionsPage/>}/>
</Routes> 

<Footer/>
    </>
  );
}

export default App;




