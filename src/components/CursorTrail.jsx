import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CursorTrail() {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newTrail = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };

            setTrails((prev) => [...prev.slice(-20), newTrail]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
            overflow: 'hidden'
        }}>
            <AnimatePresence>
                {trails.map((trail) => (
                    <motion.div
                        key={trail.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            left: trail.x,
                            top: trail.y,
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#D4AF37', // Gold
                            boxShadow: '0 0 10px #D4AF37, 0 0 20px #FAF9F6',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
