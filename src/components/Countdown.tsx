'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

interface CountdownProps {
    targetDate: string; // ISO string e.g., "2026-03-28T00:00:00"
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className={styles.container}>
            <h3 className={styles.label}>Race Start In</h3>
            <div className={styles.timer}>
                <div className={styles.unit}>
                    <span className={styles.value}>{timeLeft.days}</span>
                    <span className={styles.text}>Days</span>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.unit}>
                    <span className={styles.value}>{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className={styles.text}>Hrs</span>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.unit}>
                    <span className={styles.value}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className={styles.text}>Min</span>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.unit}>
                    <span className={styles.value}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className={styles.text}>Sec</span>
                </div>
            </div>
        </div>
    );
}
