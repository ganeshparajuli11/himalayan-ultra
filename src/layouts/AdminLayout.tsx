
import { Link, Outlet } from 'react-router-dom';
import styles from '@/app/(admin)/admin/admin.module.css';

export default function AdminLayout() {
    return (
        <div className={styles.adminLayout}>
            <aside className={styles.sidebar}>
                <div className={styles.brand}>
                    HIMALAYAN <span>ULTRA</span>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/admin/registrations">Registrations</Link></li>
                        <li><Link to="/admin/payments">Payments</Link></li>
                        <li><Link to="/admin/races">Races</Link></li>
                        <li><Link to="/admin/users">Users</Link></li>
                        <li><Link to="/admin/content">Content</Link></li>
                        <li><Link to="/admin/settings">Settings</Link></li>
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
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
