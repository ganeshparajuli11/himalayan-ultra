import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Bus, Map, Navigation, DollarSign } from 'lucide-react';

const Transport = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PageHeader title="Transport" subtitle="Getting to the Start Line" />

            <div className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Shuttle Bus Main Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12"
                >
                    <div className="bg-primary/20 p-8 border-b border-primary/20">
                        <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                            <Bus className="w-8 h-8 text-primary" /> Official Shuttle Bus
                        </h2>
                        <p className="text-primary font-medium mt-2">Departure Time: 5:20 AM Sharp</p>
                    </div>

                    <div className="p-8">
                        <p className="mb-6 text-gray-300">
                            Please show your bus ticket attached to the back of your race bib.
                            Buses arrive around 5:45-5:50 AM at Pineapple Dam, Shing Mun Road.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                { name: "Admiralty", link: "https://maps.app.goo.gl/FMJ1RKeYYfsy8Nft8" },
                                { name: "Prince Edward", link: "https://maps.app.goo.gl/G2GpL7ny5ec7BVQq9" },
                                { name: "Shatin", link: "https://maps.app.goo.gl/sxz5J9T3EKtCozLV6" },
                                { name: "Yuen Long", link: "#" },
                            ].map((loc, i) => (
                                <a
                                    key={i}
                                    href={loc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-black/20 rounded-xl hover:bg-black/40 transition-all group border border-white/5 hover:border-primary/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <Map className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                        <span className="font-semibold text-lg">{loc.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        Map <Navigation className="w-3 h-3" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <DollarSign className="w-5 h-5 text-green-500" />
                            <span className="font-bold text-green-500">Fee: HK$ 40 per person</span>
                        </div>
                    </div>
                </motion.div>

                {/* Personal Transport */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary/5 rounded-2xl p-8 border border-white/10"
                >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Navigation className="w-6 h-6 text-primary" /> Personal Transport
                    </h2>
                    <p className="text-gray-300 mb-4">
                        If you are heading to the start by yourself, please note the race starting point is at:
                    </p>
                    <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-2">Shing Mun Reservoir, Tsuen Wan</h3>
                        <a
                            href="https://goo.gl/maps/MNJ6ihNpYbYCDws59"
                            className="btn btn-outline btn-sm inline-flex items-center gap-2"
                            target="_blank"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Transport;
