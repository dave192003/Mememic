import akinNaLisensiyaMo from '../../assets/images/memesPhilippines/akinNaLisensiyaMo.jpg';
import anongKailanganKongGawin from '../../assets/images/memesPhilippines/anongKailanganKongGawin.jpg';
import finishNa from '../../assets/images/memesPhilippines/finishNa.jpg';
import ohSiggee from '../../assets/images/memesPhilippines/ohSiggee.jpg';
import memeImage from '../../assets/images/memesPhilippines/OIP (31).webp';
import taposNaPo from '../../assets/images/memesPhilippines/taposNaPo.gif';
import { useState } from 'react';
import CursorFollower from '../../components/cursorFollower/cursorFollower';
import emotionalDamage from "../../assets/videos/emotionalDamage.mp4";
import whoAreYou from "../../assets/videos/whoAreYou.mp4";
import './landingPage.css';

// Every meme image from src/assets/images/memesPhilippines
const images = [
  { src: akinNaLisensiyaMo, type: 'image' },
  { src: anongKailanganKongGawin, type: 'image' },
  { src: finishNa, type: 'image' },
  { src: ohSiggee, type: 'image' },
  { src: taposNaPo, type: 'image' },
  { src: memeImage, type: 'image' },
  { src: emotionalDamage, type: 'video' },
  { src: whoAreYou, type: 'video' }
];

// Directions alternate: left, right, left, right, left.
// `items` are indices into the `images` array so all memes are used.
const rows = [
  { direction: 'left', duration: 38, items: [0, 1, 2, 3,4,5,6,7] },
  { direction: 'right', duration: 46, items: [4, 5, 0, 1] },
  { direction: 'left', duration: 42, items: [2, 3, 4, 5] },
  { direction: 'right', duration: 50, items: [0, 1, 2, 3, 4, 5] },
];


function buildSequence(indices, minTiles = 11) {
  const picked = indices.map((index) => images[index]);
  const sequence = [];
  while (sequence.length < minTiles) {
    sequence.push(...picked);
  }
  return sequence;
}

function MarqueeRow({ direction, duration, items }) {
  const sequence = buildSequence(items);

  return (
    <div className={`marquee marquee--${direction}`}>
      <div className="marquee__track" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((group) => (
          <div className="marquee__group" key={group} aria-hidden={group === 1}>
            {sequence.map((img, index) => (
              <figure className="marquee__item" key={`${group}-${index}`}>
                {img.type === 'video' ? (
                  <video
                    src={img.src}
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter ={(e) => {e.currentTarget.play().catch(() => {})}}
                    onMouseLeave = {(e) => { e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    aria-label={img.alt}
                    draggable="false"
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    draggable="false"
                  />
                )}
                <figcaption>{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="landing-page-main">
      {/* Comic-poster background: pure CSS decorations, always behind content */}
      <div className="landing-page__decor" aria-hidden="true">
        {/* Yellow halftone dots near the four corners */}
        <span className="landing-decor__dots landing-decor__dots--tl" />
        <span className="landing-decor__dots landing-decor__dots--tr" />
        <span className="landing-decor__dots landing-decor__dots--bl" />
        <span className="landing-decor__dots landing-decor__dots--br" />
        {/* A pair of red + yellow comic paint strokes */}
        <span className="landing-decor__stroke landing-decor__stroke--red-a" />
        <span className="landing-decor__stroke landing-decor__stroke--yellow-a" />
        {/* One subtle paint splash with droplets */}
        <span className="landing-decor__splash landing-decor__splash--red-a" />
        {/* Small decorative accents */}
        <span className="landing-decor__spark landing-decor__spark--a" />
        <span className="landing-decor__spark landing-decor__spark--b" />
      </div>

      {/* Top navigation bar: near-black with a solid yellow bottom divider */}
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

      <header className="landing-page__header">
        <h1 className="landing-page__title">
          <span className="landing-page__title-part landing-page__title-part--meme">Meme</span>
          <span className="landing-page__title-part landing-page__title-part--mic">Mic</span>
        </h1>
        <p className="landing-page__subtitle">Say the <span className="txt-highlight">meme</span>. Match the <span className="txt-underline">line</span>. Become the <span className="txt-highlight txt-highlight--tilt">meme</span>.</p>
      </header>

      <section className="landing-page__marquee-stack" aria-label="Scrolling meme gallery">
        {rows.map((row, index) => (
          <MarqueeRow
            key={index}
            direction={row.direction}
            duration={row.duration}
            items={row.items}
          />
        ))}
      </section>

      {/* Cursor-following mascot pinned to the far-left edge of the page */}
      <CursorFollower
        className="landing-page__mascot"
        image={finishNa}
        eyes={{ x: 6, y: -4, scale: 0.6 }}
      />

      {/* Start CTA, centred at the bottom */}
      <div className="landing-page__cta">
        <button className="proceed-button flex-centered flex">Start Mememicing</button>
      </div>
    </div>
  );
}

export default LandingPage;