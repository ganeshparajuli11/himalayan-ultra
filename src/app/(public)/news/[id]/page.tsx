'use client';

import PageHeader from '@/components/PageHeader';
import styles from './article.module.css';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const RaceMap = dynamic(() => import('@/components/RaceMap'), {
    ssr: false,
    loading: () => <div className={styles.mapLoading}>Loading Map...</div>
});

const article = {
    title: "Race Results Published",
    date: "Jan 15, 2025",
    category: "Race Update",
    content: `
    <p>The official results for the 2025 Himalayan Ultra have now been verified and published. We are thrilled to announce that this year's edition saw record-breaking performances across all categories.</p>
    
    <h3>Men's Champion</h3>
    <p>Guo Min secured the top spot in the H100 category with an incredible time of 10:38:53, battling through tough conditions in the final section of the course.</p>
    
    <h3>Women's Champion</h3>
    <p>Sunmaya Budha dominated the women's field, finishing in 12:15:20. Her performance on the MacLehose Trail was nothing short of spectacular.</p>
    
    <p>We want to thank all participants, volunteers, and sponsors for making this event possible. The spirit of the trail running community in Hong Kong is truly alive and well.</p>
  `,
    gallery: [
        '/news-action.png',
        '/hero-bg.png'
    ],
    showMap: true
};

export default function ArticlePage({ params }: { params: { id: string } }) {
    return (
        <>
            <PageHeader title={article.title} subtitle={article.date} />

            <div className="container">
                <article className={styles.article}>
                    <div className={styles.meta}>
                        <span className={styles.category}>{article.category}</span>
                        <Link href="/news" className={styles.backLink}>&larr; Back to News</Link>
                    </div>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Dynamic Image Gallery Section */}
                    {article.gallery && article.gallery.length > 0 && (
                        <div className={styles.gallerySection}>
                            <h3>Event Highlights</h3>
                            <div className={styles.galleryGrid}>
                                {article.gallery.map((img, index) => (
                                    <div key={index} className={styles.galleryItem}>
                                        <Image
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            fill
                                            className={styles.galleryImg}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Dynamic Map Section */}
                    {article.showMap && (
                        <div className={styles.mapSection}>
                            <h3>Race Route Overview</h3>
                            <p className={styles.mapNote}>The course verified for this result set matches the official 2025 route below.</p>
                            <div className={styles.mapWrapper}>
                                <RaceMap />
                            </div>
                        </div>
                    )}

                </article>
            </div>
        </>
    );
}
