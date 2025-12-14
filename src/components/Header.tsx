import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.logo}>
                    <Link to="/">
                        HIMALAYAN<span>ULTRA</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/race-info">The Race</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/results">Results</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <Link to="/login" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                        Login
                    </Link>
                    <Link to="/registration" className="btn btn-primary" style={{ marginLeft: '10px' }}>
                        Register Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
