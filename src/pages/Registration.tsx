import PageHeader from '@/components/PageHeader';
import styles from './Registration.module.css';

export default function RegistrationPage() {
    return (
        <>
            <PageHeader title="Registration" subtitle="Secure your spot for 2026" />

            <div className="container">
                <section className={styles.section}>
                    <div className={styles.dates}>
                        <h2>Important Dates</h2>
                        <div className={styles.datesGrid}>
                            <div className={styles.dateItem}>
                                <span className={styles.label}>Opening Date</span>
                                <span className={styles.value}>Aug 15, 2025</span>
                            </div>
                            <div className={styles.dateItem}>
                                <span className={styles.label}>Closing Date</span>
                                <span className={styles.value}>Dec 10, 2025</span>
                            </div>
                        </div>
                        <p className={styles.note}>*Registration is on a first-come, first-served basis. Places are limited.</p>
                    </div>

                    <h2>Entry Fees</h2>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <div className={styles.cardHeader}>
                                <h3>The Third</h3>
                                <span className={styles.distance}>33KM</span>
                            </div>
                            <div className={styles.price}>HKD 1,200</div>
                            <ul className={styles.features}>
                                <li>Official Race Tee</li>
                                <li>Finisher Medal</li>
                                <li>ITRA Points: 1</li>
                                <li>Checkpoints: 3</li>
                            </ul>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Details</button>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.featured}`}>
                            <div className={styles.cardHeader}>
                                <h3>Himalayan 100</h3>
                                <span className={styles.distance}>103KM</span>
                            </div>
                            <div className={styles.price}>HKD 2,800</div>
                            <ul className={styles.features}>
                                <li>Official Race Tee & Hoodie</li>
                                <li>Finisher Trophy (Gold/Silver/Bronze)</li>
                                <li>ITRA Points: 5</li>
                                <li>Checkpoints: 9</li>
                            </ul>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Register Now</button>
                        </div>

                        <div className={styles.pricingCard}>
                            <div className={styles.cardHeader}>
                                <h3>The Half</h3>
                                <span className={styles.distance}>56KM</span>
                            </div>
                            <div className={styles.price}>HKD 1,800</div>
                            <ul className={styles.features}>
                                <li>Official Race Tee</li>
                                <li>Finisher Medal</li>
                                <li>ITRA Points: 3</li>
                                <li>Checkpoints: 5</li>
                            </ul>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Details</button>
                        </div>
                    </div>
                </section>

                <section className={styles.rulesSection}>
                    <h2>Cancellation & Refunds</h2>
                    <div className="glass" style={{ padding: '30px', borderRadius: '12px' }}>
                        <p>
                            <strong>50% Refund:</strong> Before Oct 1, 2025.<br />
                            <strong>No Refund:</strong> After Oct 1, 2025.<br />
                            <br />
                            Transfers differrals are not permitted. Please see the full Rules & Regulations for more details.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
