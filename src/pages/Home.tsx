import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Countdown from '@/components/Countdown';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedStat, TextReveal } from '@/components/animations/ScrollAnimations';

export default function Home() {
    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden p-0 pt-24 md:pt-32">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-background z-10"></div>
                <motion.img
                    src="/hero-bg.png"
                    alt="Trail Runner on Ridge"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 mix-blend-multiply"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
                <div className="container relative z-20 text-center mt-8 md:mt-16 flex flex-col items-center px-4">
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-4 leading-none text-white tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        HIMALAYAN<motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block transform -skew-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >HARMONY</motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 tracking-[2px] uppercase font-bold text-white px-4 max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        The <span className="text-primary italic">Ultimate</span> Harmony of Body & Mind
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Countdown targetDate="2026-03-28T08:00:00" />
                    </motion.div>

                    <motion.div
                        className="flex gap-4 md:gap-6 justify-center mt-12 flex-col sm:flex-row w-full sm:w-auto px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <Link to="/registration" className="relative group inline-block">
                            <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
                            <span className="relative block bg-[#ff8fa3] -skew-x-12 px-10 py-4 hover:-translate-y-0.5 transition-transform border border-white/10">
                                <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm md:text-lg">Registration</span>
                            </span>
                        </Link>

                        <button className="relative group inline-block">
                            <span className="absolute inset-0 bg-[#2a6bf2] -skew-x-12 translate-x-1.5 translate-y-1.5 border border-white/10"></span>
                            <span className="relative block bg-gray-200 -skew-x-12 px-10 py-4 hover:-translate-y-0.5 transition-transform border border-white/10">
                                <span className="block font-black italic uppercase text-[#0a193c] tracking-widest text-sm md:text-lg">Watch Aftermovie</span>
                            </span>
                        </button>
                    </motion.div>

                    <motion.div
                        className="mt-12 mb-16 bg-white/50 backdrop-blur-md px-6 py-2 rounded-none border border-slate-200 skew-x-[-10deg] shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <div className="skew-x-[10deg]">
                            <span className="text-[10px] md:text-xs uppercase text-slate-500 tracking-wider block">Organized By</span>
                            <strong className="text-xs md:text-sm text-primary tracking-wide">HKNUTRA</strong>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-transparent text-center py-20 relative z-10">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="mb-12">
                        <TextReveal>
                            <h2 className="text-slate-900 mb-8 text-3xl md:text-5xl font-black uppercase leading-tight italic tracking-tighter">
                                A Journey Through <br /><span className="text-primary">Hong Kong's Wildest Trails</span>
                            </h2>
                        </TextReveal>
                        <FadeInUp delay={0.2}>
                            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                                The Himalayan Harmony is an ultra endurance race that takes place in Hong Kong, starting in Pak Tam Chung on the Sai Kung Peninsula and covering some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan, Hong Kong's highest peak.
                            </p>
                        </FadeInUp>
                        <StaggerContainer className="flex flex-col md:flex-row justify-around mt-16 pt-10 border-t border-slate-200 gap-8">
                            <StaggerItem>
                                <AnimatedStat className="flex flex-col">
                                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-2 italic">103<span className="text-primary text-3xl">km</span></h3>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Distance</p>
                                </AnimatedStat>
                            </StaggerItem>
                            <StaggerItem>
                                <AnimatedStat className="flex flex-col">
                                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-2 italic">5300<span className="text-primary text-3xl">m+</span></h3>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Elevation Gain</p>
                                </AnimatedStat>
                            </StaggerItem>
                            <StaggerItem>
                                <AnimatedStat className="flex flex-col">
                                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-2 italic">30<span className="text-primary text-3xl">h</span></h3>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Cut-off Time</p>
                                </AnimatedStat>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4">
                    <FadeInUp>
                        <h2 className="text-center mb-16 text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">News</span>
                        </h2>
                    </FadeInUp>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
                        {[
                            { date: 'JAN 15, 2025', title: 'Race Results Published', desc: 'Check out the official results for the 2025 edition.', link: '/news/1' },
                            { date: 'DEC 01, 2024', title: 'Course Update', desc: 'Important changes to checkpoint 5 due to maintenance.', link: '#' },
                            { date: 'NOV 10, 2024', title: 'Volunteer Recruitment', desc: 'Join our team and be part of the adventure.', link: '#' },
                        ].map((news, index) => (
                            <StaggerItem key={index}>
                                <motion.div
                                    className="design-box h-full group cursor-pointer flex flex-col p-0 overflow-hidden"
                                    initial={{ skewX: -6 }}
                                    whileHover={{
                                        y: -10,
                                        x: 5,
                                        skewX: -6,
                                        boxShadow: '8px 8px 0px 0px rgba(42, 107, 242, 0.4)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="h-48 bg-blue-100 overflow-hidden relative w-[110%] -ml-[5%] origin-center scale-105">
                                        {/* Placeholder for news image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                                        <div className="absolute top-2 right-4 bg-primary text-black text-[10px] font-bold px-2 py-0.5 skew-x-[-12deg]">NEWS</div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <span className="text-xs text-primary font-bold block mb-2 tracking-widest">{news.date}</span>
                                        <h4 className="text-xl font-black mb-3 text-slate-900 group-hover:text-primary transition-colors uppercase italic leading-none">{news.title}</h4>
                                        <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{news.desc}</p>
                                        <Link to={news.link} className="self-start inline-block border border-slate-300 hover:border-primary hover:text-primary text-slate-900 font-bold text-xs px-4 py-2 uppercase tracking-wider transition-all skew-x-[-12deg]">
                                            <span className="skew-x-[12deg] inline-block">Read More</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 pb-32 relative z-10">
                <div className="container mx-auto px-4">
                    <FadeInUp>
                        <h2 className="text-center mb-16 text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900">
                            FAQ<span className="text-primary">s</span>
                        </h2>
                    </FadeInUp>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
                        {[
                            { q: 'What is the qualifying criteria?', a: 'Participants must have completed at least one 50km trail race within the last 2 years with ITRA points.' },
                            { q: 'Is there mandatory gear?', a: 'Yes, all runners must carry a waterproof jacket, 1L water, survival blanket, whistle, and mobile phone.' },
                            { q: 'Can I have a pacer?', a: 'Pacers are allowed for the last 40km section starting from CP6 for the 100km category only.' },
                            { q: 'What is the refund policy?', a: '50% refund is available until Dec 31st, 2025. No refunds after that date. Deferrals allowed for medical reasons.' },
                        ].map((faq, index) => (
                            <StaggerItem key={index}>
                                <motion.div
                                    className="design-box h-full group"
                                    initial={{ skewX: -6 }}
                                    whileHover={{
                                        x: 5,
                                        y: -5,
                                        skewX: -6,
                                        borderColor: 'var(--color-primary)',
                                        boxShadow: '6px 6px 0px 0px rgba(42, 107, 242, 0.3)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl text-primary font-black uppercase italic mb-3 group-hover:text-slate-900 transition-colors">{faq.q}</h3>
                                    <p className="text-slate-600 leading-relaxed text-base">{faq.a}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
