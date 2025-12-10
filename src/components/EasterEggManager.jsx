import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function EasterEggManager() {
    const [inputSequence, setInputSequence] = useState('');
    const secretCode = 'love';

    useEffect(() => {
        const handleKeyDown = (e) => {
            setInputSequence((prev) => {
                const newSeq = (prev + e.key).toLowerCase();
                if (newSeq.endsWith(secretCode)) {
                    triggerLoveStorm();
                    return ''; // Reset after success
                }
                // Keep only the last N characters needed
                return newSeq.slice(-secretCode.length);
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const triggerLoveStorm = () => {
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                shapes: ['heart'],
                colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#D4AF37']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                shapes: ['heart'],
                colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#D4AF37']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    };

    return null; // This component doesn't render anything visible
}
