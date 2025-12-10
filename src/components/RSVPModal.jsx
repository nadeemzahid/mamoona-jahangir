import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck } from 'react-icons/fa';
import './RSVPModal.css';

export default function RSVPModal({ isOpen, onClose }) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="rsvp-overlay" onClick={onClose}>
                    <motion.div
                        className="rsvp-card"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <button className="close-btn" onClick={onClose}><FaTimes /></button>

                        {!submitted ? (
                            <>
                                <h2 className="rsvp-title font-script">RSVP</h2>
                                <p className="rsvp-subtitle">We would love to have you!</p>
                                <form className="rsvp-form" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Your Name" required className="rsvp-input" />
                                    <input type="number" placeholder="Number of Guests" min="1" required className="rsvp-input" />
                                    <div className="rsvp-select-group">
                                        <label><input type="checkbox" /> Mehendi</label>
                                        <label><input type="checkbox" /> Shirni</label>
                                        <label><input type="checkbox" /> Reception</label>
                                    </div>
                                    <button type="submit" className="rsvp-submit">Confirm Attendance</button>
                                </form>
                            </>
                        ) : (
                            <div className="success-message">
                                <div className="success-icon"><FaCheck /></div>
                                <h3>Thank You!</h3>
                                <p>Your RSVP has been sent. We can't wait to celebrate with you.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
