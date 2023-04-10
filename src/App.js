
import { Routes , Route} from 'react-router-dom';
import './App.css';

import Footer from './Component/Page/Footer';
import Navigation from './Component/Page/Navigation';
import Signup from './Signup';
import LoginTwo from './LoginTwo';
import VideoBackground from './Component/Page/Videobackground';
import FruitList from './Component/Tab';

import AboutUs from './Component/Page/Aboutus';
import ContactUs from './Component/Page/Contactus';
import Homepage from './Component/Page/Home';
function App() {
  return (
    <>
 <Navigation/>
 <VideoBackground/>
<Routes>
<Route exact path="/" element={<Homepage/>} />
 
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/SignIn' element={<LoginTwo/>}/> 
<Route path='/fruits' element={<FruitList/>}/>
<Route path='/Aboutus' element={<AboutUs/>}/>
  <Route path='/Fruits' element={<FruitList/>}/>
  <Route path='/Contactus' element={<ContactUs/>}/>
</Routes> 

<Footer/>
    </>
  );
}

export default App;
