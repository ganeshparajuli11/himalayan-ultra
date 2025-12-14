import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import styles from './page.module.css';

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
        <>
            <PageHeader title="News" subtitle="Latest Updates & Stories" />

            <div className="container">
                <div className={styles.grid}>
                    {newsItems.map((item) => (
                        <div key={item.id} className={`${styles.card} glass`}>
                            <div className={styles.imagePlaceholder}></div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{item.date}</span>
                                    <span className={styles.category}>{item.category}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                                <Link href={`/news/${item.id}`} className={styles.readMore}>Read Full Story &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
