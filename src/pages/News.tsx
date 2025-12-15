import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';

const newsItems = [
    {
        id: 1,
        title: "Race Results Published",
        date: "Jan 15, 2025",
        excerpt: "The official results for the 2025 RaceTiming Ultra have now been verified and published. Congratulations to all finishers!",
        category: "Race Update"
    },
    {
        id: 2,
        title: "Course Alteration for 2026",
        date: "Dec 01, 2024",
        excerpt: "Due to trail maintenance by the AFCD, a small section of the MacLehose Trail Section 4 will be diverted.",
        category: "Course Info"
    },
    {
        id: 3,
        title: "Elite Field Announcement",
        date: "Nov 20, 2024",
        excerpt: "We are excited to welcome a star-studded lineup of international elites for this year's edition.",
        category: "Press Release"
    },
    {
        id: 4,
        title: "Volunteer Recruitment Open",
        date: "Oct 10, 2024",
        excerpt: "Join the team! We are looking for enthusiastic volunteers to help man checkpoints and support runners.",
        category: "Community"
    },
    {
        id: 5,
        title: "New sustainability initiatives",
        date: "Sep 05, 2024",
        excerpt: "RaceTiming is going cup-free! Read about our new measures to reduce waste on the trails.",
        category: "Sustainability"
    }
];

export default function NewsPage() {
    return (
        <div className="flex flex-col overflow-hidden">
            <PageHeader title="News" subtitle="Latest Updates & Stories" />

            <div className="container mx-auto px-4 py-8 md:py-16">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" staggerDelay={0.1}>
                    {newsItems.map((item) => (
                        <StaggerItem key={item.id}>
                            <motion.div
                                className="glass rounded-xl overflow-hidden flex flex-col group h-full"
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="h-40 md:h-48 bg-gray-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                    <motion.div
                                        className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.span
                                        className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-primary text-black text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full uppercase tracking-wider"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item.category}
                                    </motion.span>
                                </div>
                                <div className="p-5 md:p-8 flex-grow flex flex-col">
                                    <div className="flex items-center text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-3 md:mb-4">
                                        <motion.span
                                            className="text-primary mr-2"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            ●
                                        </motion.span>
                                        {item.date}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 leading-tight group-hover:text-primary transition-colors">
                                        <Link to={`/news/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow">
                                        {item.excerpt}
                                    </p>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={`/news/${item.id}`}
                                            className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2"
                                        >
                                            Read Full Story
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
