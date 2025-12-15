import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Countdown from '@/components/Countdown';
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem, AnimatedStat, TextReveal } from '@/components/animations/ScrollAnimations';

export default function Home() {
    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen md:min-h-[800px] flex items-center justify-center overflow-hidden p-0 pt-16 md:pt-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 to-[#050510]/80 z-10"></div>
                <motion.img
                    src="/hero-bg.png"
                    alt="Trail Runner on Ridge"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
                <div className="container relative z-20 text-center mt-8 md:mt-16 flex flex-col items-center px-4">
                    <motion.h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none drop-shadow-2xl text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        HIMALAYAN<motion.span
                            className="text-primary block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >ULTRA</motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-xl md:text-2xl mb-6 md:mb-8 tracking-[1px] md:tracking-[2px] drop-shadow-lg text-gray-200 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        THE <b>ULTIMATE</b> ENDURANCE CHALLENGE
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Countdown targetDate="2026-03-28T08:00:00" />
                    </motion.div>

                    <motion.div
                        className="flex gap-3 md:gap-4 justify-center mt-8 md:mt-12 flex-col sm:flex-row w-full sm:w-auto px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.button
                            className="btn btn-primary text-sm md:text-base"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(22, 163, 74, 0.5)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Registration
                        </motion.button>

                        <motion.button
                            className="btn btn-outline border-white text-white hover:bg-white hover:text-black text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Watch 2024 Aftermovie
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="mt-8 md:mt-10 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 rounded-full flex flex-col items-center border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <span className="text-[10px] md:text-xs uppercase text-gray-400 tracking-wider">Organized By</span>
                        <strong className="text-xs md:text-sm text-primary tracking-wide">HIMALAYAN ADVENTURE SPORTS</strong>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 0.5 },
                        y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                    }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            className="w-1.5 h-3 bg-primary rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="bg-background text-center py-12 md:py-20">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="mb-8 md:mb-12">
                        <TextReveal>
                            <h2 className="text-primary mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight">
                                A JOURNEY THROUGH HONG KONG'S WILDEST TRAILS
                            </h2>
                        </TextReveal>
                        <FadeInUp delay={0.2}>
                            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                                The Himalayan Ultra is an ultra endurance race that takes place in Hong Kong, starting in Pak Tam Chung on the Sai Kung Peninsula and covering some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan, Hong Kong's highest peak.
                            </p>
                        </FadeInUp>
                        <StaggerContainer className="flex flex-col md:flex-row justify-around mt-10 md:mt-16 pt-8 border-t border-white/10 gap-6 md:gap-8">
                            <StaggerItem>
                                <AnimatedStat className="flex flex-col">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">103km</h3>
                                    <p className="text-primary uppercase tracking-widest text-xs md:text-sm">Distance</p>
                                </AnimatedStat>
                            </StaggerItem>
                            <StaggerItem>
                                <AnimatedStat className="flex flex-col">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">5300m+</h3>
                                    <p className="text-primary uppercase tracking-widest text-xs md:text-sm">Elevation Gain</p>
                                </AnimatedStat>
                            </StaggerItem>
                            <StaggerItem>
                                <AnimatedStat className="flex flex-col">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">30h</h3>
                                    <p className="text-primary uppercase tracking-widest text-xs md:text-sm">Cut-off Time</p>
                                </AnimatedStat>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="bg-[#020205] py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <FadeInUp>
                        <h2 className="text-center mb-8 md:mb-16 text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                            LATEST <span className="border-b-4 border-primary">NEWS</span>
                        </h2>
                    </FadeInUp>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.15}>
                        {[
                            { date: 'JAN 15, 2025', title: 'Race Results Published', desc: 'Check out the official results for the 2025 edition.', link: '/news/1' },
                            { date: 'DEC 01, 2024', title: 'Course Update', desc: 'Important changes to checkpoint 5 due to maintenance.', link: '#' },
                            { date: 'NOV 10, 2024', title: 'Volunteer Recruitment', desc: 'Join our team and be part of the adventure.', link: '#' },
                        ].map((news, index) => (
                            <StaggerItem key={index}>
                                <motion.div
                                    className="glass rounded-xl overflow-hidden h-full"
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                >
                                    <motion.div
                                        className="h-40 md:h-48 bg-[#1a1a2e] overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="p-4 md:p-6">
                                        <span className="text-xs text-primary font-bold block mb-2">{news.date}</span>
                                        <h4 className="text-xl md:text-2xl font-bold mb-2">{news.title}</h4>
                                        <p className="text-muted mb-4 text-sm md:text-base">{news.desc}</p>
                                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                            <Link to={news.link} className="text-white font-semibold text-sm hover:text-primary transition-colors">
                                                Read More &rarr;
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-background py-12 md:py-20 pb-20 md:pb-32">
                <div className="container mx-auto px-4">
                    <FadeInUp>
                        <h2 className="text-center mb-8 md:mb-16 text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                            FREQUENTLY ASKED <span className="border-b-4 border-primary">QUESTIONS</span>
                        </h2>
                    </FadeInUp>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" staggerDelay={0.1}>
                        {[
                            { q: 'What is the qualifying criteria?', a: 'Participants must have completed at least one 50km trail race within the last 2 years with ITRA points.' },
                            { q: 'Is there mandatory gear?', a: 'Yes, all runners must carry a waterproof jacket, 1L water, survival blanket, whistle, and mobile phone.' },
                            { q: 'Can I have a pacer?', a: 'Pacers are allowed for the last 40km section starting from CP6 for the 100km category only.' },
                            { q: 'What is the refund policy?', a: '50% refund is available until Dec 31st, 2025. No refunds after that date. Deferrals allowed for medical reasons.' },
                        ].map((faq, index) => (
                            <StaggerItem key={index}>
                                <motion.div
                                    className="bg-[#15151e] p-5 md:p-8 rounded-lg border-l-4 border-primary"
                                    whileHover={{
                                        x: 5,
                                        borderColor: 'rgb(22, 163, 74)',
                                        boxShadow: '0 0 20px rgba(22, 163, 74, 0.15)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-lg md:text-xl text-white font-bold mb-2">{faq.q}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.a}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
