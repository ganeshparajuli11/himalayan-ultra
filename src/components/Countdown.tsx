'use client';

import { useState, useEffect } from 'react';

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
        <div className="inline-block bg-black/60 px-4 sm:px-6 md:px-8 py-4 md:py-5 rounded-xl border border-white/10 backdrop-blur-sm mt-6 md:mt-8 text-center w-full max-w-md md:max-w-none md:w-auto">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2 font-medium">Race Start In</h3>
            <div className="flex items-start justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none">{timeLeft.days}</span>
                    <span className="text-[10px] sm:text-xs uppercase text-gray-300 mt-1">Days</span>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white/30 -mt-0.5 md:-mt-1">:</div>
                <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] sm:text-xs uppercase text-gray-300 mt-1">Hrs</span>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white/30 -mt-0.5 md:-mt-1">:</div>
                <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] sm:text-xs uppercase text-gray-300 mt-1">Min</span>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white/30 -mt-0.5 md:-mt-1">:</div>
                <div className="flex flex-col items-center min-w-[40px] sm:min-w-[50px]">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] sm:text-xs uppercase text-gray-300 mt-1">Sec</span>
                </div>
            </div>
        </div>
    );
}
