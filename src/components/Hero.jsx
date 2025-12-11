import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './Hero.css';

export default function Hero({ date, month }) {
    const [clickCount, setClickCount] = useState(0);

    const handleAmpersandClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 5) {
            // Trigger Easter Egg
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min, max) => Math.random() * (max - min) + min;

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);

            setClickCount(0);
        }
    };

    return (
        <div className="hero-container">
            <div className="hero-bg" style={{ backgroundImage: "url('/hero_bg.png')" }}></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-subtitle"
                >
                    The Wedding Of
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="hero-title font-script"
                >
                    Mamoona <br className="mobile-break" />
                    <motion.span
                        className="ampersand"
                        onClick={handleAmpersandClick}
                        whileHover={{ scale: 1.2, color: '#FFD700', rotate: 10 }}
                        whileTap={{ scale: 0.8 }}
                        style={{ cursor: 'pointer', display: 'inline-block' }}
                    >
                        &
                    </motion.span>
                    <br className="mobile-break" /> Jahangir
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="hero-dates"
                >
                    <div className="date-item">
                        <span className="day" style={{ fontSize: '2.5rem' }}>{date || '29'}</span>
                        <span className="mon">{month || 'Dec'}</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="scroll-indicator"
            >
                <span>Scroll</span>
                <div className="arrow-down"></div>
            </motion.div>
        </div>
    );
}
