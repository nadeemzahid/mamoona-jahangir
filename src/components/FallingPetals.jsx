import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const petalColors = ['#FFC0CB', '#FFD700', '#FFFACD', '#E6E6FA']; // Pink, Gold, LemonChiffon, Lavender

export default function FallingPetals() {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        // Generate static petals initially
        const initialPetals = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // vw
            delay: Math.random() * 10,
            duration: 10 + Math.random() * 20,
            color: petalColors[Math.floor(Math.random() * petalColors.length)],
            size: 10 + Math.random() * 15
        }));
        setPetals(initialPetals);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{ y: -50, x: `${petal.x}vw`, opacity: 0, rotate: 0 }}
                    animate={{
                        y: '100vh',
                        opacity: [0, 1, 1, 0],
                        rotate: 360,
                        x: [`${petal.x}vw`, `${petal.x + 10}vw`, `${petal.x - 10}vw`, `${petal.x}vw`] // Swaying
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        delay: petal.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: petal.size,
                        height: petal.size,
                        backgroundColor: petal.color,
                        borderRadius: '50% 0 50% 50%', // Leaf/Petal shape
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    );
}
