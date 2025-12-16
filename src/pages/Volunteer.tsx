import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Gift, Users, Trophy, Zap } from 'lucide-react'; // Swapped Coffee for Zap (Energy)

const Volunteer = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            {/* Added a subtle overlay for extra depth if PageHeader doesn't cover it */}

            <PageHeader title="VOLUNTEER" subtitle="JOIN THE CREW" bgImage="/volunteer_bg_artistic.png" />

            <div className="container-custom py-12 relative z-10">

                {/* Intro Section with Poster Typography */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6 tracking-tighter transform -skew-x-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Be The Pulse <br /><span className="text-primary not-italic skew-x-0 inline-block">Of The Race</span>
                    </h2>
                    <p className="text-lg text-blue-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
                        We are looking for enthusiastic individuals to help make the <span className="text-white font-bold">HK50 Series</span> a legendary experience.
                        Whether you're a runner yourself or just love the mountain vibes, we have a role for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
                    {/* Roles Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-black uppercase italic tracking-wider flex items-center gap-3 text-secondary border-b-4 border-secondary/30 pb-2 w-fit transform -rotate-1">
                            <Users className="w-8 h-8" /> Critical Roles
                        </h3>

                        <div className="grid gap-6">
                            {[
                                { title: "Course Marshal", desc: "Direct participants and ensure safety on course." },
                                { title: "Check Point Support", desc: "Food/drink distribution, timing, morale support." },
                                { title: "Start/Finish Crew", desc: "Registration, baggage, medals, crowd control." },
                                { title: "Sweepers", desc: "Follow the last runner and clear course markings." },
                                { title: "Media & Medical", desc: "Photography, videography, and first aid support." },
                            ].map((role, i) => (
                                <div key={i} className="card-poster group hover:-translate-y-1 transition-transform duration-300">
                                    <h4 className="font-bold text-xl text-white group-hover:text-primary transition-colors uppercase italic">{role.title}</h4>
                                    <p className="text-blue-200 mt-1 font-medium">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits Column - styled as a 'Bib' or Special Feature */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full opacity-60"></div>

                        <div className="bg-[#0f1d40]/90 backdrop-blur-xl border border-white/10 p-10 relative overflow-hidden shadow-2xl skew-y-1">
                            {/* Decorative tape or stripe */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

                            <h3 className="text-3xl font-black uppercase italic tracking-wider flex items-center gap-3 text-white mb-8">
                                <Gift className="w-8 h-8 text-primary" /> The Perks
                            </h3>

                            <ul className="space-y-8">
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-primary to-pink-600 shadow-lg text-white transform -rotate-3"><DollarSignIcon /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Allowances</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">HKD $100 Cash <span className="text-primary mx-2">/</span> Free Race Entry (Value $400)</span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-secondary to-blue-600 shadow-lg text-white transform rotate-3"><Zap /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Fuel Up</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">Premium snacks, hot meals, and hydration provided.</span>
                                    </div>
                                </li>
                                <li className="flex gap-5 items-start">
                                    <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg text-white transform -rotate-2"><Trophy /></div>
                                    <div>
                                        <strong className="block text-xl text-white uppercase font-bold tracking-wide">Exclusive Swag</strong>
                                        <span className="text-blue-200 font-medium pt-1 block">Official Crew Tee, Sponsor Gifts & Certificate.</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12 text-center">
                                <a
                                    href="https://goo.gl/forms/uK1BAYWKFeyrKxlg2"
                                    target="_blank"
                                    className="btn btn-primary w-full md:w-auto text-xl py-6 hover:scale-105"
                                >
                                    <span>Apply To Volunteer</span>
                                </a>
                                <p className="mt-4 text-xs text-white/40 uppercase tracking-widest">Limited spots available</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

// Simple styled icons
const DollarSignIcon = () => <span className="font-black text-xl">$</span>;

export default Volunteer;
