'use client';

import { useAuth } from '@/context/AuthContext';
import styles from './dashboard.module.css';

export default function UserDashboard() {
    const { user, logout } = useAuth();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.welcome}>
                    <h1>Hello, {user?.name || 'Runner'}</h1>
                    <p>Welcome to your race dashboard.</p>
                </div>
                <button onClick={logout} className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>Logout</button>
            </header>

            <div className={styles.statusCard}>
                <h2>Registration Status</h2>
                <div className={styles.statusIndicator}>
                    <span className={styles.dot}></span>
                    <span>You are not currently registered for any race.</span>
                </div>
                <button className="btn btn-primary" style={{ marginTop: '20px' }}>Register for 2026</button>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>My Results</h3>
                    <p>No past results found.</p>
                </div>
                <div className={styles.card}>
                    <h3>Training Plan</h3>
                    <p>Access your training schedule.</p>
                </div>
            </div>
        </div>
    );
}
