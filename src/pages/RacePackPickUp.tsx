import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, FileText, AlertCircle } from 'lucide-react';

const RacePackPickUp = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Race Pack Pick Up" subtitle="Get Ready for Race Day" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-8"
                >
                    {/* Key Information Card */}
                    <div className="bg-secondary/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                            <Calendar className="w-6 h-6" /> Collection Schedule
                        </h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-lg">
                                <span className="text-gray-400">Date</span>
                                <span className="text-lg font-semibold">Feb 4-7, 2026 (Wednesday to Friday)</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-lg">
                                <span className="text-gray-400">Time</span>
                                <span className="text-lg font-semibold">11:45 AM - 7:45 PM</span>
                            </div>
                        </div>

                        <div className="p-4 border-l-4 border-primary bg-primary/10 rounded-r-lg mb-6">
                            <p className="text-sm">
                                <span className="font-bold">Note for Overseas Participants:</span> If you are traveling from overseas, you may pick up your race pack the day before the race with valid proof of travel/ID.
                            </p>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="bg-secondary/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                            <MapPin className="w-6 h-6" /> Location
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">ACTION X STORE</h3>
                            <p className="text-gray-300 leading-relaxed">
                                11 Floor, Unit B, 12 Wing Lok Street,<br />
                                Wing Sing Commercial Centre,<br />
                                Sheung Wan, HK
                            </p>
                            <div className="text-sm text-gray-400 mt-2">
                                Exit A2 MTR and walk 50m LEFT towards Central direction.
                            </div>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 btn btn-outline btn-sm"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Important Info Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-secondary/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" /> What's Included?
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Race Number (Bib)</li>
                                <li>Event T-Shirt</li>
                                <li>Safety Pins</li>
                                <li>Face Mask</li>
                                <li>Sponsor Goodies</li>
                            </ul>
                        </div>

                        <div className="bg-secondary/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-primary" /> Filling in for a Friend?
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                If you need someone else to pick up for you, they must bring a signed release form.
                            </p>
                            <button className="btn btn-primary w-full text-sm">Download Release Form</button>
                        </div>
                    </div>

                    {/* Late Pickup */}
                    <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                        <h3 className="text-xl font-bold mb-2 text-red-500">Missed the pickup?</h3>
                        <p className="text-gray-300">
                            Special arrangements on race day require a <strong>HKD 150 administrative fee</strong> (cash only).
                            Fee waived for Macau/Mainland China/Overseas participants with valid ID if emailed 3 days prior.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default RacePackPickUp;
