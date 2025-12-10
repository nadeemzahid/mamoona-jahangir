import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Countdown.css';

export default function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div className="countdown-box" key={interval}>
                <motion.span
                    key={timeLeft[interval]}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="countdown-val"
                >
                    {timeLeft[interval] || '0'}
                </motion.span>
                <span className="countdown-label">{interval}</span>
            </div>
        );
    });

    return (
        <div className="countdown-container">
            <h3 className="countdown-title">Countdown to the Big Day</h3>
            <div className="countdown-wrapper">
                {timerComponents.length ? timerComponents : <span>Best Wishes!</span>}
            </div>
        </div>
    );
}
