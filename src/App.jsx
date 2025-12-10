import React, { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import Countdown from './components/Countdown';
import CursorTrail from './components/CursorTrail';
import FallingPetals from './components/FallingPetals';
import EasterEggManager from './components/EasterEggManager';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaHeart, FaVolumeMute, FaVolumeUp, FaCamera } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import './App.css';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set initial volume to 40%
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed):", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleFooterHeartClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#800020', '#FAF9F6']
    });
  };

  const [nameColor, setNameColor] = useState('inherit');
  const handleNameClick = () => {
    const colors = ['#D4AF37', '#800020', '#2E8B57', '#FF69B4', '#DA70D6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setNameColor(randomColor);
  };

  return (
    <div className="app-main">
      <EasterEggManager />
      <CursorTrail />
      <FallingPetals />

      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <audio ref={audioRef} loop>
        <source src="https://upload.wikimedia.org/wikipedia/commons/3/35/Gymnopedie_No_1.ogg" type="audio/ogg" />
      </audio>

      <Hero />

      <Countdown targetDate="2025-12-27T18:00:00" />

      <EventSection
        title="Mehendi Night"
        date="December 27, 2025"
        time="6:00 PM onwards"
        description="Immerse yourself in a kaleidoscope of vibrant hues and intricate henna artistry. Let the rhythm of traditional folk melodies awaken the spirit of celebration as we begin our journey."
        bgImage="/mehendi_bg.png"
        align="left"
        eventData={{
          title: "Mehendi Night",
          start: "20251227T180000",
          end: "20251227T230000",
          location: "Mehendi Venue, City"
        }}
      />

      <EventSection
        title="Shirni Lunch"
        date="December 28, 2025"
        time="1:00 PM"
        description="Grace us with your presence for a delightful afternoon feast amidst the garden blooms. A heartwarming gathering of cherished family and friends, accompanied by culinary delights."
        bgImage="/lunch_bg.png"
        align="right"
        eventData={{
          title: "Shirni Lunch",
          start: "20251228T130000",
          end: "20251228T160000",
          location: "Lunch Venue, City"
        }}
      />

      <EventSection
        title="Grand Reception"
        date="December 29, 2025"
        time="7:00 PM"
        description="The crescendo of our celebration. We cordially invite you to witness and bless the commencement of our eternal union in an evening of elegance and romance."
        bgImage="/reception_bg.png"
        align="left"
        eventData={{
          title: "Grand Reception",
          start: "20251229T190000",
          end: "20251229T235900",
          location: "Reception Hall, City"
        }}
      />

      <section className="photo-section text-center py-20 bg-cream" style={{ paddingTop: '80px', paddingBottom: '80px', textAlign: 'center', background: 'var(--primary-cream)' }}>
        <h2 className="font-script" style={{ fontSize: '3rem', color: 'var(--primary-burgundy)', marginBottom: '20px' }}>Capture the Moment</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: '#666' }}>Help us collect memories! Upload your candid clicks to our shared album.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="photo-upload-btn"
          onClick={() => window.open('https://photos.app.goo.gl/jyYZ2VaJBWuaPVAb8', '_blank')}
          style={{
            background: 'var(--primary-gold)',
            color: '#fff',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <FaCamera /> Upload Photos
        </motion.button>
      </section>

      <footer className="app-footer">
        <div className="footer-content">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="footer-icon"
            whileHover={{ scale: 1.2, color: 'var(--primary-burgundy)', rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleFooterHeartClick}
            style={{ cursor: 'pointer' }}
          >
            <FaHeart />
          </motion.div>
          <h2
            className="footer-names font-script"
            onClick={handleNameClick}
            style={{ color: nameColor, cursor: 'pointer', transition: 'color 0.5s ease' }}
          >
            Mamoona & Jahangir
          </h2>
          <p className="footer-text">We await your company</p>
          <p className="footer-sub">Made with love</p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fab-container">
        <button
          className="fab-button"
          onClick={() => setIsPlaying(!isPlaying)}
          title="Toggle Music"
        >
          {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>
    </div>
  );
}
