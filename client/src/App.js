
import './App.css';
import React  from 'react';

// import Navbar2 from './components/Navbar2';
import Home from './components/Home';

// import Footer from './components/Footer';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Thankyou from './components/Thankyou';
import  from './components/Thankyou';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Overview from './components/Overview';

function App() {

  return (
   <>

      <BrowserRouter>
        {/* <Navbar2/> */}
        {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/overview" element={<Overview />} />


          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>











   {/* <Navbar/> */}
 
{/* <Home/> */}
{/* <Skill/> */}
{/* <Contact/> */}

   
   </>
  );
}

export default App;
