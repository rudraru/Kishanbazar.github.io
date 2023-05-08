
import { Routes , Route} from 'react-router-dom';
import './App.css';

import Footer from './Component/Page/Footer';
import Navigation from './Component/Page/Navigation';
import Signup from './Component/Page/Signup';
import Login from './LogIn';

import FruitList from './Component/Tab';
import VideoBackground from './Component/Page/Videobackground';
import AboutUs from './Component/Page/Aboutus';
import ContactUs from './Component/Page/Contactus';
import Homepage from './Component/Page/Home';
import FruitDetails from './Component/Page/FruitsDetails';
import BackgroundImage from './Component/Page/BackgroundImage';
import SummaryPage from './Component/Page/Summary';
import Bcart from './Component/Page/Bcart';
import TermsAndConditionsPage from './Component/Page/Tac';
function App() {
  return (
    <>
 <Navigation/>
 {/* <VideoBackground/> */}
 {/* <BackgroundImage image='https://wallpapercave.com/wp/wp8558453.jpg'/> */}
<Routes>
<Route exact path="/" element={<Homepage/>} />
 
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/SignIn' element={<Login/>}/> 
<Route path='/fruits' element={<FruitList/>}/>
<Route exact path="/fruits/:fruitId" element={<FruitDetails/>} />
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




