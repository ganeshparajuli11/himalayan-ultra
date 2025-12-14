import Link from 'next/link';
import styles from './admin.module.css';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminLayout}>
            <aside className={styles.sidebar}>
                <div className={styles.brand}>
                    HIMALAYAN <span>ULTRA</span>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="/admin">Dashboard</Link></li>
                        <li><Link href="/admin/registrations">Registrations</Link></li>
                        <li><Link href="/admin/payments">Payments</Link></li>
                        <li><Link href="/admin/races">Races</Link></li>
                        <li><Link href="/admin/users">Users</Link></li>
                        <li><Link href="/admin/content">Content</Link></li>
                        <li><Link href="/admin/settings">Settings</Link></li>
                    </ul>
                </nav>
                <div className={styles.user}>
                    <div className={styles.avatar}>A</div>
                    <span>Admin User</span>
                </div>
            </aside>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h2>Dashboard</h2>
                    <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Logout</button>
                </header>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}
