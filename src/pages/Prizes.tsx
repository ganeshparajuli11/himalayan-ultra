import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

const Prizes = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Prizes & Awards" subtitle="Champions of the Trail" />

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* 54km Category */}
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white border border-slate-200 p-6 hover:border-primary/50 transition-colors duration-300 mb-16 overflow-visible shadow-sm"
                >
                    {/* Corner decorations */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                    <div className="px-2 md:px-4">
                        <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-6">
                            <div className="p-4 bg-primary text-white shadow-lg shadow-primary/20">
                                <Crown size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-slate-900">54 KM Individual Categories</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* Trophies */}
                            <div>
                                <h3 className="text-xl font-black mb-6 text-primary flex items-center gap-3 uppercase italic tracking-wider">
                                    <Trophy className="w-6 h-6" /> Trophies & Gear
                                </h3>
                                <ul className="space-y-4">
                                    {['1st', '2nd', '3rd'].map((rank, i) => (
                                        <li key={i} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-200 hover:border-primary/50 transition-colors group">
                                            <span className="font-bold text-slate-700 uppercase italic">{rank} Overall M/F</span>
                                            <span className="text-primary text-xs font-black uppercase tracking-widest bg-primary/10 px-3 py-1 border border-primary/20 group-hover:bg-primary group-hover:text-slate-900 transition-colors">Trophy + Sudio Prize</span>
                                        </li>
                                    ))}
                                    <li className="px-3 py-2 text-xs font-mono text-slate-500 border-l-2 border-slate-300 pl-4 mt-6">
                                        Top 5 Men & Women also receive certificates.
                                    </li>
                                </ul>
                            </div>

                            {/* Cash Prizes */}
                            <div className="bg-gradient-to-br from-yellow-500/5 to-transparent p-6 border border-yellow-500/20 relative overflow-visible">
                                <div className="absolute top-0 right-0 bg-yellow-500 text-slate-900 text-[10px] font-black px-3 py-1 uppercase tracking-widest translate-x-2 -translate-y-2 shadow-lg z-10">SOLO ONLY</div>
                                <h3 className="text-xl font-black mb-6 text-yellow-600 flex items-center gap-3 uppercase italic tracking-wider">
                                    <Award className="w-6 h-6" /> Cash Prizes
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        { rank: "1st", amount: "HKD 1,000" },
                                        { rank: "2nd", amount: "HKD 800" },
                                        { rank: "3rd", amount: "HKD 700" },
                                        { rank: "4th", amount: "HKD 600" },
                                        { rank: "5th", amount: "HKD 500" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-yellow-500/10 pb-3 last:border-0 hover:bg-yellow-500/5 px-2 transition-colors">
                                            <span className="font-black text-xl italic text-slate-800">{item.rank}</span>
                                            <span className="font-bold font-mono text-yellow-600 tracking-wider">{item.amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 25km & 11km Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white border border-slate-200 p-6 hover:border-primary/50 transition-colors duration-300 shadow-sm"
                    >
                        {/* Corner decorations */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-900 uppercase italic">
                            <Medal className="text-primary w-8 h-8" /> 25 KM Category
                        </h2>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex gap-3 items-center p-3 bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                <span className="font-bold text-slate-800">Top 5 Individual Men & Women Trophies</span>
                            </li>
                            <li className="flex gap-3 items-center p-3 bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                <span className="font-medium">Top 5 Certificates</span>
                            </li>
                            <li className="flex gap-3 items-center font-black text-slate-700 mt-6 bg-primary/10 p-4 border border-primary/20 text-sm uppercase tracking-wide">
                                <Award className="w-5 h-5 text-primary" />
                                All Finishers: Finisher Medal
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white border border-slate-200 p-6 hover:border-primary/50 transition-colors duration-300 shadow-sm"
                    >
                        {/* Corner decorations */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 translate-x-2 -translate-y-2" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 -translate-x-2 translate-y-2" />
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-900 uppercase italic">
                            <Medal className="text-primary w-8 h-8" /> 11 KM Category
                        </h2>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex gap-3 items-center p-3 bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                <span className="font-bold text-slate-800">Top 5 Individual Men & Women Trophies</span>
                            </li>
                            <li className="flex gap-3 items-center p-3 bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                <span className="font-medium">Top 5 Certificates</span>
                            </li>
                            <li className="flex gap-3 items-center font-black text-slate-700 mt-6 bg-primary/10 p-4 border border-primary/20 text-sm uppercase tracking-wide">
                                <Award className="w-5 h-5 text-primary" />
                                All Finishers: Finisher Medal
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-400 text-sm">
                    <p>Prizes subject to change. Race Director has final say on all matters.</p>
                </div>

            </div>
        </div>
    );
};

export default Prizes;
