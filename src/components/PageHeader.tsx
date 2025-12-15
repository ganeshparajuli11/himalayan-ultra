'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

const PageHeader = ({ title, subtitle, bgImage = '/inner-bg.png' }: PageHeaderProps) => {
    return (
        <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden mb-8">
            <div className="absolute inset-0 bg-[#050510]/60 z-10"></div>
            <motion.img
                src={bgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-lg md:text-xl text-primary font-bold tracking-widest uppercase mb-0 drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
