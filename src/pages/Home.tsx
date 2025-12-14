
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Countdown from '@/components/Countdown';

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img
                    src="/hero-bg.png"
                    alt="Trail Runner on Ridge"
                    className={styles.heroImage}
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
                />
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>
                        HIMALAYAN<span>ULTRA</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        THE <b>ULTIMATE</b> ENDURANCE CHALLENGE
                    </p>

                    <Countdown targetDate="2026-03-28T08:00:00" />

                    <div className={styles.heroActions}>
                        <button className="btn btn-primary">Registration</button>
                        <button className="btn btn-outline">Watch 2024 Aftermovie</button>
                    </div>

                    <div className={styles.organizerBadge}>
                        <span>Organized By</span>
                        <strong>HIMALAYAN ADVENTURE SPORTS</strong>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className={styles.intro}>
                <div className="container">
                    <div className={styles.introContent}>
                        <h2>A JOURNEY THROUGH HONG KONG'S WILDEST TRAILS</h2>
                        <p>
                            The Himalayan Ultra is an ultra endurance race that takes place in Hong Kong, starting in Pak Tam Chung on the Sai Kung Peninsula and covering some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan, Hong Kong's highest peak.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <h3>103km</h3>
                                <p>Distance</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>5300m+</h3>
                                <p>Elevation Gain</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>30h</h3>
                                <p>Cut-off Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className={styles.news}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>LATEST <span>NEWS</span></h2>
                    <div className={styles.newsGrid}>
                        <div className={`${styles.newsCard} glass`}>
                            <div className={styles.newsImagePlaceholder}></div>
                            <div className={styles.newsContent}>
                                <span className={styles.newsDate}>JAN 15, 2025</span>
                                <h4>Race Results Published</h4>
                                <p>Check out the official results for the 2025 edition.</p>
                                <Link to="/news/1" className={styles.readMore}>Read More &rarr;</Link>
                            </div>
                        </div>
                        <div className={`${styles.newsCard} glass`}>
                            <div className={styles.newsImagePlaceholder}></div>
                            <div className={styles.newsContent}>
                                <span className={styles.newsDate}>DEC 01, 2024</span>
                                <h4>Course Update</h4>
                                <p>Important changes to checkpoint 5 due to maintenance.</p>
                                <Link to="#" className={styles.readMore}>Read More &rarr;</Link>
                            </div>
                        </div>
                        <div className={`${styles.newsCard} glass`}>
                            <div className={styles.newsImagePlaceholder}></div>
                            <div className={styles.newsContent}>
                                <span className={styles.newsDate}>NOV 10, 2024</span>
                                <h4>Volunteer Recruitment</h4>
                                <p>Join our team and be part of the adventure.</p>
                                <Link to="#" className={styles.readMore}>Read More &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faq}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>FREQUENTLY ASKED <span>QUESTIONS</span></h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3>What is the qualifying criteria?</h3>
                            <p>Participants must have completed at least one 50km trail race within the last 2 years with ITRA points.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Is there mandatory gear?</h3>
                            <p>Yes, all runners must carry a waterproof jacket, 1L water, survival blanket, whistle, and mobile phone.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>Can I have a pacer?</h3>
                            <p>Pacers are allowed for the last 40km section starting from CP6 for the 100km category only.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>What is the refund policy?</h3>
                            <p>50% refund is available until Dec 31st, 2025. No refunds after that date. Deferrals allowed for medical reasons.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
