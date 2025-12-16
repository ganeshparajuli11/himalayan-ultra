import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Heart, Hand, Gift, Coffee, Users } from 'lucide-react';

const Volunteer = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Volunteer" subtitle="Join the Team" bgImage="/volunteer-bg.jpg" />

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Be Part of the Experience</h2>
                    <p className="text-gray-400">
                        We are looking for enthusiastic individuals to help make the HK50 Series a success.
                        Whether you're a runner yourself or just love the outdoors, we have a role for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Roles */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-2 text-primary">
                            <Users className="w-6 h-6" /> Key Roles
                        </h3>
                        <div className="grid gap-4">
                            {[
                                { title: "Course Marshal", desc: "Direct participants and ensure safety on course." },
                                { title: "Check Point Support", desc: "Food/drink distribution, timing, morale support." },
                                { title: "Start/Finish Crew", desc: "Registration, baggage, medals, crowd control." },
                                { title: "Sweepers", desc: "Follow the last runner and clear course markings." },
                                { title: "Photography/Medical", desc: "Specialized support roles." },
                            ].map((role, i) => (
                                <div key={i} className="bg-secondary/5 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                    <h4 className="font-bold text-white">{role.title}</h4>
                                    <p className="text-sm text-gray-400">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-primary/5 rounded-2xl p-8 border border-primary/20 h-fit"
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-2 text-primary mb-6">
                            <Gift className="w-6 h-6" /> Volunteer Benefits
                        </h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-4">
                                <div className="p-2 bg-primary/20 rounded-lg text-primary"><DollarSignIcon /></div>
                                <div>
                                    <strong className="block text-white">Transportation Allowance</strong>
                                    <span className="text-sm">HKD $100 OR Free Race Entry (up to HKD $400)</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-2 bg-primary/20 rounded-lg text-primary"><Coffee /></div>
                                <div>
                                    <strong className="block text-white">Food & Drink</strong>
                                    <span className="text-sm">Snacks, meals, and water provided during duty.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="p-2 bg-primary/20 rounded-lg text-primary"><ShirtIcon /></div>
                                <div>
                                    <strong className="block text-white">Goodies</strong>
                                    <span className="text-sm">Sponsor gifts, volunteer certificate.</span>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <a
                                href="https://goo.gl/forms/uK1BAYWKFeyrKxlg2"
                                target="_blank"
                                className="btn btn-primary w-full text-center block py-3 rounded-lg font-bold hover:scale-105 transition-transform"
                            >
                                Apply Now
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

// Simple icons helpers if Lucide doesn't have specific ones or for custom styling
const DollarSignIcon = () => <span className="font-bold">$</span>;
const ShirtIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2 13 10h-2L8 2 3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
);

export default Volunteer;
