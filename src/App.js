import Header from "./Components/Header";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import "./App.css";
import Home from "./Pages/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import SellYourCar from "./Pages/SellYourCar";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/SellYourCar' element={<SellYourCar/>} />
        

      
      </Routes>    
    </div>
  );
}

export default App;