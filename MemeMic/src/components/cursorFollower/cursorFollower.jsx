import { useEffect, useRef } from 'react';
import './cursorFollower.css';

// How far (in % / px / deg) the character reacts toward the cursor.
const MAX_PUPIL = 37.5; // pupil travel, as % of the pupil size (scales with the eyes)
const MAX_SHIFT = 6; // whole-body nudge toward the cursor
const MAX_LEAN = 10; // body tilt 

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// Unit vector pointing from the centre of `rect` toward the mouse.
function unitToward(mouse, rect) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = mouse.x - cx;
  const dy = mouse.y - cy;
  const dist = Math.hypot(dx, dy) || 1;
  return { ux: dx / dist, uy: dy / dist };
}

function CursorFollower({ image, size = 150, eyes, className = '', style }) {
  const bodyRef = useRef(null);
  const eyeLRef = useRef(null);
  const eyeRRef = useRef(null);
  const pupLRef = useRef(null);
  const pupRRef = useRef(null);

  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    let scheduled = false;
    let rafId = 0;

    const update = () => {
      const body = bodyRef.current;
      const eyeL = eyeLRef.current;
      const eyeR = eyeRRef.current;
      const pupL = pupLRef.current;
      const pupR = pupRRef.current;

      if (eyeL && pupL) {
        const { ux, uy } = unitToward(mouse, eyeL.getBoundingClientRect());
        // % translate scales with the pupil, so it follows the eye/character size.
        pupL.style.transform = `translate(${(ux * MAX_PUPIL).toFixed(2)}%, ${(uy * MAX_PUPIL).toFixed(2)}%)`;
      }
      if (eyeR && pupR) {
        const { ux, uy } = unitToward(mouse, eyeR.getBoundingClientRect());
        pupR.style.transform = `translate(${(ux * MAX_PUPIL).toFixed(2)}%, ${(uy * MAX_PUPIL).toFixed(2)}%)`;
      }
      if (body) {
        const { ux, uy } = unitToward(mouse, body.getBoundingClientRect());
        const rotate = clamp(ux * MAX_LEAN * 1.6, -MAX_LEAN, MAX_LEAN);
        body.style.transform =
          `translate(${(ux * MAX_SHIFT).toFixed(2)}px, ${(uy * MAX_SHIFT).toFixed(2)}px)` +
          ` rotate(${rotate.toFixed(2)}deg)`;
      }
    };

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!scheduled) {
        scheduled = true;
        rafId = requestAnimationFrame(() => {
          scheduled = false;
          update();
        });
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const rootStyle = {
    '--mascot-size': `${size}px`,
    ...(eyes?.gap != null && {
      '--eye-gap': typeof eyes.gap === 'number' ? `${eyes.gap}px` : eyes.gap,
    }),
    ...(eyes?.x != null && {
      '--eye-x': typeof eyes.x === 'number' ? `${eyes.x}px` : eyes.x,
    }),
    ...(eyes?.y != null && {
      '--eye-y': typeof eyes.y === 'number' ? `${eyes.y}px` : eyes.y,
    }),
    ...(eyes?.scale != null && { '--eye-scale': `${eyes.scale}` }),
    ...style,
  };

  const rootClass = `cf ${image ? 'cf--image' : 'cf--builtin'} ${className}`.trim();

  return (
    <div className={rootClass} style={rootStyle} aria-hidden="true">
      <div className="cf-bob">
        <div className="cf-body" ref={bodyRef}>
          {image ? (
            <img className="cf-img" src={image} alt="" draggable="false" />
          ) : (
            <>
              <span className="cf-ear cf-ear--left" />
              <span className="cf-ear cf-ear--right" />
              <span className="cf-blush cf-blush--left" />
              <span className="cf-blush cf-blush--right" />
              <span className="cf-mouth" />
            </>
          )}

          <div className="cf-eyes">
            <span className="cf-eye" ref={eyeLRef}>
              <span className="cf-pupil" ref={pupLRef}>
                <span className="cf-glint" />
              </span>
            </span>
            <span className="cf-eye" ref={eyeRRef}>
              <span className="cf-pupil" ref={pupRRef}>
                <span className="cf-glint" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursorFollower;
