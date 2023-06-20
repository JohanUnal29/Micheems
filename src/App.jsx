import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarr from './components/sub-components/navbar/Navbarr';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/sub-components/footer/Footer';

function App() {

  
  return (
    
    <div>
      <BrowserRouter>
        {/* <Navbarr/> */}
        
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route exact path='/nosotros' element={<AboutUs />} />
          <Route exact path='/contacto' element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
