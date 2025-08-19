import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/navbar/navbar';
import  Modal from './components/Modal/Modal';
import LoginForm from './components/LoginForm/LoginForm';
import InProgress from './components/InProgress/InProgress';
import RegisterForm from './components/RegisterForm/RegisterForm';


function App() {
  // Estados para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('login');
  // Funciones para abrir, cerrar y cambiar de vista
  const openLogin = () => { setModalView('login'); setIsModalOpen(true); }
  const openRegister = () => { setModalView('register'); setIsModalOpen(true); }
  const closeModal = () => { setIsModalOpen(false); }
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="App">
      {/* Estados para manejar los modals */}
      <Navbar onLoginClick={openLogin} onContactClick={() => setIsContactOpen(true)} />
      {/* Modal para login */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalView === 'login' ? (
          <LoginForm 
            onLogin={() => console.log("Login")}
            onShowRegister={openRegister} />
        ) : (
          <RegisterForm 
            onRegister={() => console.log("Register")}
            onShowLogin={openLogin} />
        )}
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
