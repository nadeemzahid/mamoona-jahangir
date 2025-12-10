import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './EventSection.css';

export default function EventSection({ title, date, time, description, bgImage, align = 'left', eventData }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const handleAddToCalendar = () => {
        if (!eventData) return;

        const { start, end, location } = eventData;
        const formattedTitle = `Wedding: ${title} - Mamoona & Jahangir`;

        // Create .ics content
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `DTSTART:${start}`,
            `DTEND:${end}`,
            `SUMMARY:${formattedTitle}`,
            `DESCRIPTION:${description}`,
            `LOCATION:${location || 'Wedding Venue'}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${title.replace(/\s+/g, '_')}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div ref={ref} className={`event-section ${align === 'right' ? 'align-right' : ''}`}>
            <div className="event-bg-wrapper">
                <motion.div
                    className="event-bg"
                    style={{ backgroundImage: `url(${bgImage})`, y: yBg }}
                />
                <div className="event-overlay" />
            </div>

            <motion.div
                className="event-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h3 className="event-title font-script">{title}</h3>
                <div className="event-date-box">
                    <span className="event-date">{date}</span>
                    {time && <span className="event-time">{time}</span>}
                </div>
                <p className="event-description">{description}</p>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#333' }}
                    whileTap={{ scale: 0.95 }}
                    className="event-btn"
                    onClick={handleAddToCalendar}
                >
                    Add to Calendar
                </motion.button>
            </motion.div>
        </div>
    );
}
