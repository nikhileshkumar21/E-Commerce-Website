import React from 'react';
import Home from './components/Home';
import about from './components/about';
import Contact from './components/Contact';
import Loginform from './components/Loginform';
import Signup from './components/Signup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/NAvbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<Contact/>}/>
          <Route path='/Loginform' element={<Loginform/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Navbar' element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
