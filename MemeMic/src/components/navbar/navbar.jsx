import { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="landing-nav" aria-label="Main navigation">
      <a className="landing-nav__logo" href="/">
        <span className="landing-nav__logo-meme">MEME</span>
        <span className="landing-nav__logo-mic">MIC</span>
      </a>

      <button
        type="button"
        className={`landing-nav__toggle${menuOpen ? ' is-open' : ''}`}
        aria-expanded={menuOpen}
        aria-controls="landing-nav-menu"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="landing-nav-menu" className={`landing-nav__menu${menuOpen ? ' is-open' : ''}`}>
        <li>
          <a className="landing-nav__link" href="#how-to-play" onClick={closeMenu}>
            HOW TO PLAY
          </a>
        </li>
        <li>
          <a className="landing-nav__link" href="#about" onClick={closeMenu}>
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
