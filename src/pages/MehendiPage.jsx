import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import Countdown from '../components/Countdown';
import CursorTrail from '../components/CursorTrail';
import FallingPetals from '../components/FallingPetals';
import './MehendiPage.css';

export default function MehendiPage() {
    const handleFooterHeartClick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#228B22', '#FFA500']
        });
    };

    return (
        <div className="mehendi-container">
            <div className="mehendi-overlay"></div>
            <CursorTrail />
            <FallingPetals />

            <motion.div
                className="mehendi-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mehendi-header"
                    style={{ marginTop: '20px' }}
                >
                    Together with their families
                </motion.div>

                <h1 className="mehendi-couple-name floating">
                    Mamoona <br /> & <br /> Jahangir
                </h1>

                <p className="mehendi-header" style={{ fontSize: '0.9rem', marginBottom: '10px', textTransform: 'none', letterSpacing: '2px' }}>
                    invite you to join the celebration of their
                </p>
                <div className="mehendi-title" style={{ lineHeight: '1.2', fontSize: '2.2rem' }}>
                    Pre-Nuptial Ceremony <br /> <span style={{ fontSize: '1.5rem', opacity: 0.9 }}>& Mehendi Night</span>
                </div>

                <div className="mehendi-date-block">
                    <div className="date-circle">
                        <span className="date-num">27</span>
                        <span className="date-month">Dec</span>
                    </div>
                </div>

                <div className="mehendi-time" style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
                    6:00 PM Onwards
                </div>

                <div style={{ margin: '30px 0' }}>
                    <Countdown targetDate="2025-12-27T18:00:00" />
                </div>

                <div className="location-block">
                    <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
                        <FaMapMarkerAlt style={{ color: '#FFD700', marginRight: '8px' }} />
                        Barbhuiya Marriage Hall
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mehendi-map-btn"
                        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=24.674795309860368,92.57541081598679', '_blank')}
                    >
                        Get Directions
                    </motion.button>
                </div>

                <div className="mehendi-text-section" style={{ marginTop: '40px', borderTop: '1px solid rgba(255,215,0,0.3)', paddingTop: '30px' }}>
                    <p style={{ fontStyle: 'italic', opacity: 0.9, marginBottom: '20px', lineHeight: '1.6' }}>
                        Let the colors bloom and the hearts unite. <br />
                        A night of laughter, love, and beautiful beginnings awaits.
                    </p>

                    <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#FFD700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Capture the Moment
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('https://photos.app.goo.gl/jyYZ2VaJBWuaPVAb8', '_blank')} // User's specific link
                        style={{
                            background: 'transparent',
                            border: '2px solid #FFD700',
                            color: '#FFD700',
                            padding: '10px 25px',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: '600'
                        }}
                    >
                        <FaCamera /> Upload Photos
                    </motion.button>
                </div>

            </motion.div>

            <footer style={{ position: 'relative', zIndex: 10, marginTop: '20px', textAlign: 'center' }}>
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    onClick={handleFooterHeartClick}
                    style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#FFD700' }}
                >
                    <FaHeart />
                </motion.div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '10px' }}>Made with Love</p>
            </footer>
        </div>
    );
}
