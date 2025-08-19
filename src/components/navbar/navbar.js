import './navbar.css'

function Navbar({ onLoginClick, onContactClick }) {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <h1>Pichanga.cl</h1>
      </div>
      <ul className="navbar-links">
        <li><a onClick={onContactClick}>
            Contactanos
            </a>
        </li>
        <li>
            <a onClick={onLoginClick}>
              Login
            </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
