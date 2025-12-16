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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/20 rounded-full text-primary">
                            <Crown size={32} />
                        </div>
                        <h2 className="text-3xl font-black uppercase tracking-wide">54 KM Individual Categories</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Trophies */}
                        <div className="bg-secondary/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                                <Trophy className="w-5 h-5" /> Trophies & Gear
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                    <span className="font-medium">1st Overall M/F</span>
                                    <span className="text-primary text-sm font-bold">Trophy + Sudio Prize</span>
                                </li>
                                <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                    <span className="font-medium">2nd Overall M/F</span>
                                    <span className="text-primary text-sm font-bold">Trophy + Sudio Prize</span>
                                </li>
                                <li className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                                    <span className="font-medium">3rd Overall M/F</span>
                                    <span className="text-primary text-sm font-bold">Trophy + Sudio Prize</span>
                                </li>
                                <li className="px-3 py-2 text-sm text-gray-400">
                                    Top 5 Men & Women also receive certificates.
                                </li>
                            </ul>
                        </div>

                        {/* Cash Prizes */}
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20">
                            <h3 className="text-xl font-bold mb-6 text-yellow-500 flex items-center gap-2">
                                <Award className="w-5 h-5" /> Cash Prizes (Solo)
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { rank: "1st", amount: "HKD 1,000" },
                                    { rank: "2nd", amount: "HKD 800" },
                                    { rank: "3rd", amount: "HKD 700" },
                                    { rank: "4th", amount: "HKD 600" },
                                    { rank: "5th", amount: "HKD 500" },
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-yellow-500/20 pb-2 last:border-0">
                                        <span className="font-bold text-lg">{item.rank}</span>
                                        <span className="font-mono text-yellow-400">{item.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 25km & 11km Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/5 rounded-2xl p-8 border border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Medal className="text-primary" /> 25 KM Category
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Top 5 Individual Men & Women Trophies
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Top 5 Certificates
                            </li>
                            <li className="flex gap-3 items-center font-bold text-white mt-4">
                                <Award className="w-4 h-4 text-primary" />
                                All Finishers: Finisher Medal
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/5 rounded-2xl p-8 border border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Medal className="text-primary" /> 11 KM Category
                        </h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Top 5 Individual Men & Women Trophies
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Top 5 Certificates
                            </li>
                            <li className="flex gap-3 items-center font-bold text-white mt-4">
                                <Award className="w-4 h-4 text-primary" />
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
