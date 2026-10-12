import akinNaLisensiyaMo from '../../assets/images/memesPhilippines/akinNaLisensiyaMo.jpg';
import anongKailanganKongGawin from '../../assets/images/memesPhilippines/anongKailanganKongGawin.jpg';
import finishNa from '../../assets/images/memesPhilippines/finishNa.jpg';
import ohSiggee from '../../assets/images/memesPhilippines/ohSiggee.jpg';
import memeImage from '../../assets/images/memesPhilippines/OIP (31).webp';
import taposNaPo from '../../assets/images/memesPhilippines/taposNaPo.gif';

import './landingPage.css';

// Every meme image from src/assets/images/memesPhilippines
const images = [
  { src: akinNaLisensiyaMo },
  { src: anongKailanganKongGawin },
  { src: finishNa },
  { src: ohSiggee },
  { src: taposNaPo },
  { src: memeImage},
];

// Directions alternate: left, right, left, right, left.
// `items` are indices into the `images` array so all memes are used.
const rows = [
  { direction: 'left', duration: 38, items: [0, 1, 2, 3] },
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
                <img src={img.src} alt={img.alt} loading="lazy" draggable="false" />
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
  return (
    <div className="landing-page-main">
      <header className="landing-page__header">
        <h1 className="landing-page__title  ">MemeMic</h1>
        <p className="landing-page__subtitle">Say the meme. Match the line. Become the meme.</p>
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

      <button className = "proceed-button  fixed flex-centered flex">Start Mememicing</button>
    </div>
  );
}

export default LandingPage;