import './App.css';

import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
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
