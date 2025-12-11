import React, { useState } from 'react';
import Hero from '../components/Hero';
import EventSection from '../components/EventSection';
import Countdown from '../components/Countdown';
import CursorTrail from '../components/CursorTrail';
import FallingPetals from '../components/FallingPetals';
import EasterEggManager from '../components/EasterEggManager';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaHeart, FaCamera, FaMapMarkerAlt } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import '../App.css';

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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

            <Hero date="29" month="Dec" />

            <Countdown targetDate="2025-12-29T19:00:00" />

            <EventSection
                title="Groom Reception"
                date="December 29, 2025"
                time="7:00 PM"
                description="The crescendo of our celebration. We cordially invite you to witness and bless the commencement of our eternal union in an evening of elegance and romance."
                bgImage="/reception_bg.png"
                align="left"
                eventData={{
                    title: "Groom Reception",
                    start: "20251229T190000",
                    end: "20251229T235900",
                    location: "Barbhuiya Marriage Hall"
                }}
            />

            <div style={{ textAlign: 'center', padding: '0 20px 40px', marginTop: '20px', position: 'relative', zIndex: 10 }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--primary-burgundy)', fontWeight: 'bold' }}>
                    <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                    Barbhuiya Marriage Hall
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=24.674795309860368,92.57541081598679', '_blank')}
                    style={{
                        background: 'var(--primary-burgundy)',
                        color: '#fff',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 15px rgba(128, 0, 32, 0.3)'
                    }}
                >
                    <FaMapMarkerAlt /> Get Directions
                </motion.button>
            </div>

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
        </div>
    );
}
