import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <h1>Pichanga.cl</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Contactanos</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
