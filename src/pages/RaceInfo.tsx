import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RaceMap from '@/components/RaceMap';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';

type RaceCategory = 'H100' | 'Half' | 'Third';

const raceData = {
    H100: {
        name: 'Himalayan 100',
        description: 'The Himalayan Ultra 100km course starts in Pak Tam Chung on the Sai Kung Peninsula and covers some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan.',
        elevation: { gain: '5,300m+', loss: '4,800m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '08:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '11:30' },
            { name: 'CP2 - Ham Tin', dist: '24 km', cutoff: '15:00' },
            { name: 'CP9 - Finish', dist: '103 km', cutoff: '14:00 (Sun)' },
        ]
    },
    Half: {
        name: 'The Half',
        description: 'A challenging 56km mid-distance race covering the first half of the full course. A perfect stepping stone for ultra runners.',
        elevation: { gain: '2,800m+', loss: '2,600m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '08:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '11:30' },
            { name: 'CP5 - Finish', dist: '56 km', cutoff: '20:00 (Sat)' },
        ]
    },
    Third: {
        name: 'The Third',
        description: 'A fast 33km introductory ultra trail race. Experience the scenic coastal trails of Sai Kung.',
        elevation: { gain: '1,600m+', loss: '1,400m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '09:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '12:00' },
            { name: 'CP3 - Finish', dist: '33 km', cutoff: '16:00 (Sat)' },
        ]
    }
};

export default function RaceInfoPage() {
    const [activeTab, setActiveTab] = useState<RaceCategory>('H100');

    const content = raceData[activeTab];

    const handleDownloadGPX = () => {
        const link = document.createElement('a');
        link.href = '/trail.gpx';
        link.download = `himalayan_ultra_official.gpx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col overflow-hidden">
            <PageHeader title="The Race" subtitle="Course Maps & Details" />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <FadeInUp>
                    <div className="flex justify-center mb-8 md:mb-12 flex-wrap gap-2 md:gap-4">
                        {(Object.keys(raceData) as RaceCategory[]).map((tab) => (
                            <motion.button
                                key={tab}
                                className={`
                                    py-2 md:py-3 px-4 md:px-8 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2
                                    ${activeTab === tab
                                        ? 'bg-primary border-primary text-black shadow-glow'
                                        : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'}
                                `}
                                onClick={() => setActiveTab(tab)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                animate={activeTab === tab ? { scale: 1.05 } : { scale: 1 }}
                            >
                                {tab === 'H100' ? 'Himalayan 100' : tab === 'Half' ? 'The Half' : 'The Third'}
                            </motion.button>
                        ))}
                    </div>
                </FadeInUp>

                <section className="space-y-8 md:space-y-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white uppercase">{content.name} Course</h2>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{content.description}</p>
                        </motion.div>
                    </AnimatePresence>

                    <FadeInUp delay={0.2}>
                        <motion.div
                            className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden"
                            whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-4 md:p-6 lg:p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white uppercase">Course Map</h3>
                                <motion.button
                                    onClick={handleDownloadGPX}
                                    className="btn btn-outline text-xs px-4 md:px-6 py-2 w-full md:w-auto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Download GPX File
                                </motion.button>
                            </div>
                            <div className="p-0 bg-[#0a0a1a] h-[300px] md:h-[400px] lg:h-[500px] w-full relative z-0">
                                <RaceMap />
                            </div>
                        </motion.div>
                    </FadeInUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        <FadeInLeft delay={0.1}>
                            <motion.div
                                className="bg-[#15151e] p-4 md:p-8 rounded-xl border border-white/10 h-full"
                                whileHover={{ borderColor: 'rgba(22, 163, 74, 0.3)', boxShadow: '0 0 30px rgba(22, 163, 74, 0.1)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 md:mb-8 border-b border-white/10 pb-4">Elevation Profile</h3>
                                <div className="h-32 md:h-40 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 mb-6 md:mb-8 border border-dashed border-white/10 text-sm md:text-base">
                                    <span>Elevation Chart Placeholder ({content.name})</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 md:gap-6">
                                    <motion.div
                                        className="bg-black/30 p-4 md:p-6 rounded-lg text-center"
                                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(22, 163, 74, 0.1)' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <strong className="block text-gray-400 uppercase text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">Gain</strong>
                                        <span className="text-xl md:text-3xl font-black text-primary">{content.elevation.gain}</span>
                                    </motion.div>
                                    <motion.div
                                        className="bg-black/30 p-4 md:p-6 rounded-lg text-center"
                                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <strong className="block text-gray-400 uppercase text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">Loss</strong>
                                        <span className="text-xl md:text-3xl font-black text-white">{content.elevation.loss}</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </FadeInLeft>

                        <FadeInRight delay={0.2}>
                            <motion.div
                                className="bg-[#15151e] p-4 md:p-8 rounded-xl border border-white/10 h-full"
                                whileHover={{ borderColor: 'rgba(22, 163, 74, 0.3)', boxShadow: '0 0 30px rgba(22, 163, 74, 0.1)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 md:mb-8 border-b border-white/10 pb-4">Checkpoints</h3>
                                <div className="space-y-2 md:space-y-4 overflow-x-auto">
                                    <div className="grid grid-cols-3 text-[10px] md:text-xs uppercase text-gray-500 font-bold tracking-widest pb-2 border-b border-white/5 px-2 min-w-[280px]">
                                        <div>CP</div>
                                        <div>Distance</div>
                                        <div>Cut-off</div>
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {content.checkpoints.map((cp, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="grid grid-cols-3 py-3 md:py-4 border-b border-white/5 last:border-0 px-2 transition-colors rounded min-w-[280px]"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', x: 5 }}
                                                >
                                                    <div className="font-medium text-white text-xs md:text-base truncate pr-2">{cp.name}</div>
                                                    <div className="font-mono text-primary text-xs md:text-base">{cp.dist}</div>
                                                    <div className="font-mono text-gray-300 text-xs md:text-base">{cp.cutoff}</div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </FadeInRight>
                    </div>

                    {/* Rules Section */}
                    <FadeInUp delay={0.3}>
                        <motion.div
                            className="glass p-5 md:p-10 rounded-xl border-l-4 border-primary"
                            whileHover={{ boxShadow: '0 0 40px rgba(22, 163, 74, 0.15)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 md:mb-6">Rules & Regulations</h3>
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4" staggerDelay={0.05}>
                                {[
                                    "Participants must be self-sufficient and carry mandatory gear at all times.",
                                    "Littering on the course is strictly prohibited and will result in immediate disqualification.",
                                    "Bib numbers must be worn on the front and visible at all times.",
                                    "Helping other runners in distress is mandatory; time lost will be adjusted.",
                                    "The race director reserves the right to modify the course due to weather conditions.",
                                    "Supporters provided by runners are only allowed at designated checkpoints."
                                ].map((rule, i) => (
                                    <StaggerItem key={i}>
                                        <motion.li
                                            className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base list-none"
                                            whileHover={{ x: 5, color: '#fff' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-primary mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary block"></span>
                                            <span>{rule}</span>
                                        </motion.li>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </motion.div>
                    </FadeInUp>
                </section>
            </div>
        </div>
    );
}
