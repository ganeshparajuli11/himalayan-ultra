import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { BookOpen, Shield, AlertTriangle, Backpack } from 'lucide-react';

const RulesAndRegulations = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Rules & Regulations" subtitle="Safety First, Race Hard" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Mandatory Equipment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-500">
                        <Backpack className="w-6 h-6" /> Mandatory Equipment
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Torch / Headlamp (54km only)",
                            "Mobile Phone",
                            "Hydration System / Bottle",
                            "Cash (HKD 200+) / Octopus Card",
                            "Windbreaker / Rain Jacket",
                            "Whistle"
                        ].map((item, i) => (
                            <div key={i} className="bg-red-500/10 p-4 rounded-lg border border-red-500/20 flex items-center gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="font-medium text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* General Rules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary/5 rounded-2xl p-8 border border-white/10 mb-12"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
                        <BookOpen className="w-6 h-6" /> General Rules
                    </h2>
                    <ul className="space-y-4 text-gray-300">
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
                            <li key={index} className="flex gap-4">
                                <span className="font-mono text-primary/50 font-bold">{index + 1}.</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Weather Policy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-blue-500/5 rounded-2xl p-8 border border-blue-500/10"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
                        <AlertTriangle className="w-6 h-6" /> Weather Policy
                    </h2>
                    <div className="space-y-4 text-sm text-gray-300">
                        <p><strong className="text-white">Typhoon Signal 8:</strong> Race cancelled if up 2 hours before start.</p>
                        <p><strong className="text-white">Typhoon Signal 3 / Thunderstorm:</strong> Decision made 15 mins before start based on conditions. May be postponed or cancelled.</p>
                        <p>If Thunderstorm Warning is issued during the event, participants may be asked to stop at the next checkpoint.</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default RulesAndRegulations;
