import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h3>HIMALAYAN<span>ULTRA</span></h3>
                        <p>The ultimate endurance challenge in Hong Kong's stunning landscapes.</p>
                    </div>
                    <div className={styles.col}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Follow Us</h4>
                        <div className={styles.socials}>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Himalayan Ultra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
