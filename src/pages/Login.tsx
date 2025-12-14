
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login logic - in real app, verify with backend
        if (isAdmin) {
            if (email === 'admin@himalayanultra.com' && password === 'admin') {
                login('admin');
            } else {
                alert('Invalid admin credentials (try admin@himalayanultra.com / admin)');
            }
        } else {
            if (email && password) {
                login('user');
            } else {
                alert('Please enter usage credentials (try any)');
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <div className={styles.overlay}></div>
                <div className={styles.brand}>
                    <h1>RACE<span>TIMING</span></h1>
                    <p>Login to manage your race journey or access the administrative dashboard.</p>
                </div>
            </div>

            <div className={styles.rightPanel}>
                <div className={styles.formWrapper}>
                    <h2>Welcome Back</h2>
                    <p className={styles.subtext}>Please enter your details to sign in.</p>

                    <div className={styles.roleToggle}>
                        <button
                            className={`${styles.toggleBtn} ${!isAdmin ? styles.active : ''}`}
                            onClick={() => setIsAdmin(false)}
                        >
                            Runner
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${isAdmin ? styles.active : ''}`}
                            onClick={() => setIsAdmin(true)}
                        >
                            Admin
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                            {isAdmin ? 'Login as Admin' : 'Login as Runner'}
                        </button>
                    </form>

                    <p className={styles.signupLink}>
                        Don't have an account? <Link to="/registration">Register for Race</Link>
                    </p>

                    <p className={styles.demoHint}>
                        <strong>Demo:</strong> Admin (admin@himalayanultra.com / admin) | User (user@test.com / any)
                    </p>
                </div>
            </div>
        </div>
    );
}
