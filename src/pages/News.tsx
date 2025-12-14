
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';

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
        <div className="flex flex-col">
            <PageHeader title="News" subtitle="Latest Updates & Stories" />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="glass rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                {/* Placeholder for News Image - Gradient fallback */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                                <span className="absolute top-4 right-4 z-20 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {item.category}
                                </span>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">
                                    <span className="text-primary mr-2">●</span> {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                    <Link to={`/news/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {item.excerpt}
                                </p>
                                <Link
                                    to={`/news/${item.id}`}
                                    className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3"
                                >
                                    Read Full Story <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
