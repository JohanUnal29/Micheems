import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarr from './components/sub-components/navbar/Navbarr';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/sub-components/footer/Footer';
import ItemDetailContainer from "./components/Adopt/ItemDetailContainer";
import ItemListContainer from "./components/Adopt/ItemListContainer";
import Request from './components/request/Request';
function App() {

  
  return (
    
    <div>
      <BrowserRouter>
        {/* <Navbarr/> */}
        
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route exact path='/adopta' element={<ItemListContainer />} />
          <Route path="/adopta/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path='/contacto' element={<Contact />} />
          <Route exact path='/adopcion' element={<Request />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
