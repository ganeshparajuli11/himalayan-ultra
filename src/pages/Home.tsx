import { Link } from 'react-router-dom';
import Countdown from '@/components/Countdown';

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 to-[#050510]/80 z-10"></div>
                <img
                    src="/hero-bg.png"
                    alt="Trail Runner on Ridge"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="container relative z-20 text-center mt-16 flex flex-col items-center">
                    <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none drop-shadow-2xl text-white">
                        HIMALAYAN<span className="text-primary block">ULTRA</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 tracking-[2px] drop-shadow-lg text-gray-200">
                        THE <b>ULTIMATE</b> ENDURANCE CHALLENGE
                    </p>

                    <Countdown targetDate="2026-03-28T08:00:00" />

                    <div className="flex gap-4 justify-center mt-12 flex-col sm:flex-row">
                        <button className="btn btn-primary">Registration</button>

                        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black">Watch 2024 Aftermovie</button>
                    </div>

                    <div className="mt-10 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex flex-col items-center border border-white/10">
                        <span className="text-xs uppercase text-gray-400 tracking-wider">Organized By</span>
                        <strong className="text-sm text-primary tracking-wide">HIMALAYAN ADVENTURE SPORTS</strong>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-background text-center py-20">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-primary mb-8 text-4xl font-bold uppercase">A JOURNEY THROUGH HONG KONG'S WILDEST TRAILS</h2>
                        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                            The Himalayan Ultra is an ultra endurance race that takes place in Hong Kong, starting in Pak Tam Chung on the Sai Kung Peninsula and covering some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan, Hong Kong's highest peak.
                        </p>
                        <div className="flex flex-col md:flex-row justify-around mt-16 pt-8 border-t border-white/10 gap-8">
                            <div className="flex flex-col">
                                <h3 className="text-5xl font-bold text-white mb-2">103km</h3>
                                <p className="text-primary uppercase tracking-widest text-sm">Distance</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-5xl font-bold text-white mb-2">5300m+</h3>
                                <p className="text-primary uppercase tracking-widest text-sm">Elevation Gain</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-5xl font-bold text-white mb-2">30h</h3>
                                <p className="text-primary uppercase tracking-widest text-sm">Cut-off Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="bg-[#020205] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center mb-16 text-4xl font-bold uppercase">
                        LATEST <span className="border-b-4 border-primary">NEWS</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-48 bg-[#1a1a2e]"></div>
                            <div className="p-6">
                                <span className="text-xs text-primary font-bold block mb-2">JAN 15, 2025</span>
                                <h4 className="text-2xl font-bold mb-2">Race Results Published</h4>
                                <p className="text-muted mb-4 text-base">Check out the official results for the 2025 edition.</p>
                                <Link to="/news/1" className="text-white font-semibold text-sm hover:text-primary transition-colors">Read More &rarr;</Link>
                            </div>
                        </div>
                        <div className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-48 bg-[#1a1a2e]"></div>
                            <div className="p-6">
                                <span className="text-xs text-primary font-bold block mb-2">DEC 01, 2024</span>
                                <h4 className="text-2xl font-bold mb-2">Course Update</h4>
                                <p className="text-muted mb-4 text-base">Important changes to checkpoint 5 due to maintenance.</p>
                                <Link to="#" className="text-white font-semibold text-sm hover:text-primary transition-colors">Read More &rarr;</Link>
                            </div>
                        </div>
                        <div className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-48 bg-[#1a1a2e]"></div>
                            <div className="p-6">
                                <span className="text-xs text-primary font-bold block mb-2">NOV 10, 2024</span>
                                <h4 className="text-2xl font-bold mb-2">Volunteer Recruitment</h4>
                                <p className="text-muted mb-4 text-base">Join our team and be part of the adventure.</p>
                                <Link to="#" className="text-white font-semibold text-sm hover:text-primary transition-colors">Read More &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-background py-20 pb-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-center mb-16 text-4xl font-bold uppercase">
                        FREQUENTLY ASKED <span className="border-b-4 border-primary">QUESTIONS</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#15151e] p-8 rounded-lg border-l-4 border-primary">
                            <h3 className="text-xl text-white font-bold mb-2">What is the qualifying criteria?</h3>
                            <p className="text-gray-400 leading-relaxed">Participants must have completed at least one 50km trail race within the last 2 years with ITRA points.</p>
                        </div>
                        <div className="bg-[#15151e] p-8 rounded-lg border-l-4 border-primary">
                            <h3 className="text-xl text-white font-bold mb-2">Is there mandatory gear?</h3>
                            <p className="text-gray-400 leading-relaxed">Yes, all runners must carry a waterproof jacket, 1L water, survival blanket, whistle, and mobile phone.</p>
                        </div>
                        <div className="bg-[#15151e] p-8 rounded-lg border-l-4 border-primary">
                            <h3 className="text-xl text-white font-bold mb-2">Can I have a pacer?</h3>
                            <p className="text-gray-400 leading-relaxed">Pacers are allowed for the last 40km section starting from CP6 for the 100km category only.</p>
                        </div>
                        <div className="bg-[#15151e] p-8 rounded-lg border-l-4 border-primary">
                            <h3 className="text-xl text-white font-bold mb-2">What is the refund policy?</h3>
                            <p className="text-gray-400 leading-relaxed">50% refund is available until Dec 31st, 2025. No refunds after that date. Deferrals allowed for medical reasons.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
