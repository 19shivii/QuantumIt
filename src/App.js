import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Navbar/>}>
      </Route>
     
    </Routes>
    <Home/>
    <About/>
    <Services/>
    <Footer/>
    </>
    </BrowserRouter>
  
  )
}

export default App;
