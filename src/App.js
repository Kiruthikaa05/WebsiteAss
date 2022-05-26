import React from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
//import './App.css';
 import Service from './Pages/Service';
 import Login from './Pages/Login';

 import Branch from './Pages/Branch';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/branch" element={<Branch/>} />
      </Routes></Router>
    </div>
  );
}

export default App;
