import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';

export default function RegistrationPage() {
    return (
        <div className="flex flex-col overflow-hidden">
            <PageHeader title="Registration" subtitle="Secure your spot for 2026" />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <section className="mb-12 md:mb-24">
                    <FadeInUp>
                        <motion.div
                            className="design-box p-5 md:p-8 lg:p-12 text-center max-w-4xl mx-auto mb-10 md:mb-20"
                            initial={{ skewX: -6 }}
                            whileHover={{
                                borderColor: 'rgba(22, 163, 74, 0.3)',
                                boxShadow: '0 0 40px rgba(42, 107, 242, 0.1)',
                                skewX: -6
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

                            <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-10 uppercase tracking-widest text-white">Important Dates</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center max-w-2xl mx-auto mb-6 md:mb-8">
                                <motion.div
                                    className="flex flex-col items-center bg-black/20 p-4 border border-white/5"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-widest mb-2">Opening Date</span>
                                    <span className="text-2xl md:text-3xl font-black text-primary">Aug 15, 2025</span>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-center bg-black/20 p-4 border border-white/5"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-widest mb-2">Closing Date</span>
                                    <span className="text-2xl md:text-3xl font-black text-white">Dec 10, 2025</span>
                                </motion.div>
                            </div>
                            <motion.p
                                className="text-xs md:text-sm text-gray-400 italic bg-black/30 inline-block px-3 md:px-4 py-2 border-l-2 border-primary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                *Registration is on a first-come, first-served basis. Places are limited.
                            </motion.p>
                        </motion.div>
                    </FadeInUp>

                    <FadeInUp delay={0.1}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16 text-white uppercase">Entry Fees</h2>
                    </FadeInUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                        {/* The Third */}
                        {/* The Third */}
                        <FadeInLeft delay={0.2} className="order-2 md:order-1">
                            <motion.div
                                className="design-box flex flex-col h-full"
                                initial={{ skewX: -6 }}
                                whileHover={{
                                    y: -10,
                                    x: 5,
                                    skewX: -6,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    boxShadow: '8px 8px 0px 0px rgba(42, 107, 242, 0.4)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-center mb-6 md:mb-8 border-b border-white/5 pb-6 md:pb-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2">The Third</h3>
                                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 skew-x-[-12deg]">33KM</span>
                                </div>
                                <div className="text-center text-3xl md:text-4xl font-black text-white mb-6 md:mb-8">HKD 1,200</div>
                                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10 flex-grow text-gray-300 text-sm md:text-base">
                                    {['Official Race Tee', 'Finisher Medal', 'ITRA Points: 1', 'Checkpoints: 3'].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center gap-2 md:gap-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                        >
                                            <span className="text-primary">✓</span> {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    className="btn btn-outline w-full group text-sm md:text-base"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Details
                                </motion.button>
                            </motion.div>
                        </FadeInLeft>

                        {/* Himalayan 100 - Featured */}
                        <ScaleIn delay={0.1} className="order-1 md:order-2">
                            <motion.div
                                className="design-box border-2 border-primary/50 flex flex-col relative h-full bg-[#1a2c55]"
                                initial={{ boxShadow: '0 0 30px rgba(22, 163, 74, 0.1)', skewX: -6 }}
                                whileHover={{
                                    y: -10,
                                    x: 5,
                                    skewX: -6,
                                    boxShadow: '10px 10px 0px 0px rgba(22, 163, 74, 0.3)',
                                    borderColor: 'rgba(22, 163, 74, 0.8)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute top-0 right-0 bg-primary text-[#0a193c] text-[10px] md:text-xs font-black px-4 py-1 transform skew-x-[-12deg] translate-x-2 -translate-y-2 shadow-lg"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    POPULAR
                                </motion.div>
                                <div className="text-center mb-6 md:mb-8 border-b border-white/10 pb-6 md:pb-8">
                                    <h3 className="text-2xl md:text-3xl font-black text-primary uppercase mb-2">Himalayan 100</h3>
                                    <span className="inline-block bg-primary text-[#0a193c] text-xs font-bold px-3 py-1 skew-x-[-12deg]">103KM</span>
                                </div>
                                <motion.div
                                    className="text-center text-3xl md:text-5xl font-black text-white mb-6 md:mb-8"
                                    initial={{ scale: 0.9 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    HKD 2,800
                                </motion.div>
                                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10 flex-grow text-gray-200 text-sm md:text-base">
                                    {['Official Race Tee & Hoodie', 'Finisher Trophy (Gold/Silver/Bronze)', 'ITRA Points: 5', 'Checkpoints: 9'].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center gap-2 md:gap-3 font-medium"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                        >
                                            <motion.span
                                                className="text-primary text-base md:text-lg"
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            >
                                                ★
                                            </motion.span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    className="btn btn-primary w-full py-3 md:py-4 text-sm md:text-base shadow-lg shadow-primary/25"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255, 143, 163, 0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Register Now
                                </motion.button>
                            </motion.div>
                        </ScaleIn>

                        {/* The Half */}
                        <FadeInRight delay={0.2} className="order-3">
                            <motion.div
                                className="design-box flex flex-col h-full"
                                initial={{ skewX: -6 }}
                                whileHover={{
                                    y: -10,
                                    x: 5,
                                    skewX: -6,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    boxShadow: '8px 8px 0px 0px rgba(42, 107, 242, 0.4)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-center mb-6 md:mb-8 border-b border-white/5 pb-6 md:pb-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2">The Half</h3>
                                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 skew-x-[-12deg]">56KM</span>
                                </div>
                                <div className="text-center text-3xl md:text-4xl font-black text-white mb-6 md:mb-8">HKD 1,800</div>
                                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10 flex-grow text-gray-300 text-sm md:text-base">
                                    {['Official Race Tee', 'Finisher Medal', 'ITRA Points: 3', 'Checkpoints: 5'].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center gap-2 md:gap-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                        >
                                            <span className="text-primary">✓</span> {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    className="btn btn-outline w-full text-sm md:text-base"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Details
                                </motion.button>
                            </motion.div>
                        </FadeInRight>
                    </div>
                </section>

                <FadeInUp delay={0.2}>
                    <motion.section
                        className="bg-black/60 border border-white/10 overflow-hidden shadow-2xl skew-x-[-3deg] transform"
                        whileHover={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)' }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="skew-x-[3deg] p-5 md:p-10 lg:p-16 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white uppercase">Cancellation & Refunds</h2>
                            <motion.div
                                className="bg-[#0a193c] border border-white/10 p-5 md:p-8 max-w-3xl mx-auto border-l-4 border-l-red-500 text-left relative"
                                initial={{ skewX: -6 }}
                                whileHover={{
                                    y: -5,
                                    skewX: -6,
                                    borderColor: 'rgba(239, 68, 68, 0.8)',
                                    boxShadow: '8px 8px 0px 0px rgba(239, 68, 68, 0.4)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="skew-x-[6deg]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <strong className="block text-primary uppercase text-[10px] md:text-xs tracking-widest mb-1">50% Refund</strong>
                                        <span className="text-base md:text-lg text-white">Before Oct 1, 2025</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <strong className="block text-red-500 uppercase text-[10px] md:text-xs tracking-widest mb-1">No Refund</strong>
                                        <span className="text-base md:text-lg text-white">After Oct 1, 2025</span>
                                    </motion.div>
                                </div>
                                <motion.p
                                    className="text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Transfers and deferrals are not permitted. Please see the full Rules & Regulations for more details.
                                    Medical deferrals are considered on a case-by-case basis with valid documentation.
                                </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                </FadeInUp>
            </div>
        </div>
    );
}
