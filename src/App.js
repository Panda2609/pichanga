import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/navbar/navbar';
import  Modal from './components/Modal/Modal';
import LoginForm from './components/LoginForm/LoginForm';
import InProgress from './components/InProgress/InProgress';


function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="App">
      {/* Estados para manejar los modals */}
      <Navbar onLoginClick = { () => setIsLoginOpen(true)} onContactClick={() => setIsContactOpen(true)}/>
      {/* Modal para login */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm />
      </Modal>
      {/* Modal temporal para contacto */}
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <InProgress />
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
