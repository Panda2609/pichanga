import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/navbar/navbar';
import  Modal from './components/Modal/Modal';
import LoginForm from './components/LoginForm/LoginForm';


function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className="App">
      <Navbar onLoginClick = { () => setIsLoginOpen(true)}/>
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm />
      </Modal>
      {/* <Routes> */}
        {/* Aqui van las rutas, por ejemplo: */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
