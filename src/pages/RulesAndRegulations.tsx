import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { BookOpen, Shield, AlertTriangle, Backpack } from 'lucide-react';

const RulesAndRegulations = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Rules & Regulations" subtitle="Safety First, Race Hard" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Mandatory Equipment - Grid Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-red-600 p-3 transform skew-x-[-12deg] shadow-lg shadow-red-500/20">
                            <Backpack className="w-6 h-6 text-white skew-x-[12deg]" />
                        </div>
                        <h2 className="text-3xl font-black uppercase italic tracking-wider text-white">Mandatory Equipment</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { item: "Torch / Headlamp", detail: "54km only", icon: "🔦" },
                            { item: "Mobile Phone", detail: "Fully charged", icon: "📱" },
                            { item: "Hydration System", detail: "Min. 1.5L", icon: "💧" },
                            { item: "Cash / Octopus", detail: "HKD 200+", icon: "💵" },
                            { item: "Windbreaker", detail: "Waterproof recommended", icon: "🧥" },
                            { item: "Whistle", detail: "Emergency use", icon: "📢" }
                        ].map((gear, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#1a0505] border border-red-500/20 p-6 skew-x-[-6deg] hover:border-red-500 hover:bg-red-500/10 transition-colors group cursor-default relative overflow-hidden"
                                whileHover={{ y: -5, boxShadow: '4px 4px 0px 0px rgba(239, 68, 68, 0.4)' }}
                            >
                                <div className="absolute -right-4 -top-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12">{gear.icon}</div>
                                <div className="skew-x-[6deg]">
                                    <h3 className="font-black text-white uppercase italic tracking-wide mb-1 text-lg">{gear.item}</h3>
                                    <span className="text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-2 py-1 inline-block">{gear.detail}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* General Rules - Technical List */}
                <motion.div
                    initial={{ skewX: -6 }}
                    whileHover={{
                        skewX: -6,
                        boxShadow: '8px 8px 0px 0px rgba(42, 107, 242, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                    className="design-box mb-16"
                >
                    <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-white uppercase italic border-b border-white/10 pb-4">
                        <BookOpen className="w-6 h-6 text-primary" /> General Rules
                    </h2>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        {[
                            "Race number must be worn on the FRONT and clearly visible.",
                            "No throwing garbage on the trail. Result: Disqualification.",
                            "No pacers allowed. Support only at designated checkpoints.",
                            "No plastic bottles taken from water stations. BYO Bottle.",
                            "Must stay on marked course. No short-cutting.",
                            "Protests must be made within 1 hour of finishing (fee applies).",
                            "Respect others: signal when passing.",
                            "Teams must stay within 50m of each other.",
                        ].map((rule, index) => (
                            <li key={index} className="flex gap-4 items-start group">
                                <span className="font-mono text-primary font-black text-xl italic bg-black/20 w-10 h-10 flex items-center justify-center border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-gray-300 font-medium text-sm leading-relaxed pt-1 group-hover:text-white transition-colors">{rule}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Weather Policy */}
                <motion.div
                    initial={{ skewX: -6 }}
                    whileHover={{
                        y: -5,
                        skewX: -6,
                        borderColor: 'rgba(59, 130, 246, 0.8)',
                        boxShadow: '8px 8px 0px 0px rgba(59, 130, 246, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0a152e] border-l-4 border-blue-500 p-8 skew-x-[-6deg] border-y border-r border-blue-500/20"
                >
                    <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-blue-400 uppercase italic">
                        <AlertTriangle className="w-8 h-8" /> Weather Policy
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-300">
                        <div className="bg-blue-900/20 p-4 border border-blue-500/20">
                            <strong className="text-white block uppercase tracking-widest mb-2 border-b border-blue-500/30 pb-2">Typhoon Signal 8</strong>
                            <p>Race cancelled if signal is hoisted up to 2 hours before start time.</p>
                        </div>
                        <div className="bg-blue-900/20 p-4 border border-blue-500/20">
                            <strong className="text-white block uppercase tracking-widest mb-2 border-b border-blue-500/30 pb-2">Signal 3 / Thunderstorm</strong>
                            <p>Decision made 15 mins before start. Race Director reserves the right to postpone or cancel.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default RulesAndRegulations;
