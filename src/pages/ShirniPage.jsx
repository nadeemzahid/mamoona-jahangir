import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import CursorTrail from '../components/CursorTrail';
import FallingPetals from '../components/FallingPetals';
import './ShirniPage.css';

export default function ShirniPage() {
    const handleFooterHeartClick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#FAF9F6']
        });
    };

    return (
        <div className="shirni-container">
            <div className="shirni-overlay"></div>
            <CursorTrail />
            <FallingPetals />

            <motion.div
                className="shirni-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="shirni-header">Together with their families</div>

                <h1 className="shirni-couple-name">
                    Mamoona <br /> & <br /> Jahangir
                </h1>

                <p style={{ fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6', color: '#666' }}>
                    We invite you and your family to bless the wedding celebrations and join us for a dawat prepared in honor of this auspicious union.
                </p>

                <div className="shirni-title">
                    <FaUtensils style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'block', margin: '0 auto 10px', opacity: 0.7 }} />
                    Shirni Lunch
                </div>

                <div className="shirni-date-block">
                    <div className="shirni-date-item">December 28, 2025</div>
                </div>

                <div className="shirni-time">
                    1:00 PM Onwards
                </div>

                <div className="shirni-location">
                    <p style={{ fontSize: '1.1rem', marginBottom: '5px', fontWeight: 'bold' }}>
                        Barbhuiya Marriage Hall
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shirni-map-btn"
                        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=24.674795309860368,92.57541081598679', '_blank')}
                    >
                        <FaMapMarkerAlt /> Get Directions
                    </motion.button>
                </div>
            </motion.div>

            <footer style={{ position: 'relative', zIndex: 10, marginTop: '30px', textAlign: 'center', color: '#8B7355' }}>
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    onClick={handleFooterHeartClick}
                    style={{ cursor: 'pointer', fontSize: '1.5rem', marginBottom: '10px' }}
                >
                    <FaHeart />
                </motion.div>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Made with Love</p>
            </footer>
        </div>
    );
}
