import PageHeader from '@/components/PageHeader';

export default function RegistrationPage() {
    return (
        <div className="flex flex-col">
            <PageHeader title="Registration" subtitle="Secure your spot for 2026" />

            <div className="container mx-auto px-4 py-16">
                <section className="mb-24">
                    <div className="bg-[#15151e] rounded-xl border border-white/10 p-8 md:p-12 text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest text-white">Important Dates</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto mb-8">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Opening Date</span>
                                <span className="text-3xl font-black text-primary">Aug 15, 2025</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Closing Date</span>
                                <span className="text-3xl font-black text-white">Dec 10, 2025</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 italic bg-black/30 inline-block px-4 py-2 rounded-full">*Registration is on a first-come, first-served basis. Places are limited.</p>
                    </div>

                    <h2 className="text-4xl font-bold text-center mb-16 text-white uppercase">Entry Fees</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* The Third */}
                        <div className="bg-[#15151e] rounded-xl border border-white/10 p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="text-center mb-8 border-b border-white/5 pb-8">
                                <h3 className="text-2xl font-bold text-white uppercase mb-2">The Third</h3>
                                <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">33KM</span>
                            </div>
                            <div className="text-center text-4xl font-black text-white mb-8">HKD 1,200</div>
                            <ul className="space-y-4 mb-10 flex-grow text-gray-300">
                                {['Official Race Tee', 'Finisher Medal', 'ITRA Points: 1', 'Checkpoints: 3'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-primary">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-outline w-full group">
                                View Details
                            </button>
                        </div>

                        {/* Himalayan 100 - Featured */}
                        <div className="bg-[#0a0a1a] rounded-xl border-2 border-primary/50 p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <div className="text-center mb-8 border-b border-white/10 pb-8">
                                <h3 className="text-3xl font-black text-primary uppercase mb-2 text-glow">Himalayan 100</h3>
                                <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">103KM</span>
                            </div>
                            <div className="text-center text-5xl font-black text-white mb-8">HKD 2,800</div>
                            <ul className="space-y-4 mb-10 flex-grow text-gray-200">
                                {['Official Race Tee & Hoodie', 'Finisher Trophy (Gold/Silver/Bronze)', 'ITRA Points: 5', 'Checkpoints: 9'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <span className="text-primary text-lg">★</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary w-full py-4 text-base shadow-lg shadow-primary/25">Register Now</button>
                        </div>

                        {/* The Half */}
                        <div className="bg-[#15151e] rounded-xl border border-white/10 p-8 flex flex-col hover:border-white/30 transition-colors">
                            <div className="text-center mb-8 border-b border-white/5 pb-8">
                                <h3 className="text-2xl font-bold text-white uppercase mb-2">The Half</h3>
                                <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">56KM</span>
                            </div>
                            <div className="text-center text-4xl font-black text-white mb-8">HKD 1,800</div>
                            <ul className="space-y-4 mb-10 flex-grow text-gray-300">
                                {['Official Race Tee', 'Finisher Medal', 'ITRA Points: 3', 'Checkpoints: 5'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-primary">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-outline w-full">View Details</button>
                        </div>
                    </div>
                </section>

                <section className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-2xl">
                    <div className="p-10 md:p-16 text-center">
                        <h2 className="text-3xl font-bold mb-8 text-white uppercase">Cancellation & Refunds</h2>
                        <div className="glass p-8 rounded-xl max-w-3xl mx-auto border-l-4 border-red-500/50 inline-block text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                <div>
                                    <strong className="block text-primary uppercase text-xs tracking-widest mb-1">50% Refund</strong>
                                    <span className="text-lg text-white">Before Oct 1, 2025</span>
                                </div>
                                <div>
                                    <strong className="block text-red-500 uppercase text-xs tracking-widest mb-1">No Refund</strong>
                                    <span className="text-lg text-white">After Oct 1, 2025</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                                Transfers and deferrals are not permitted. Please see the full Rules & Regulations for more details.
                                Medical deferrals are considered on a case-by-case basis with valid documentation.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
