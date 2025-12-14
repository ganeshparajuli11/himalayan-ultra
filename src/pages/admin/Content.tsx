import { useState } from 'react';
import styles from './content.module.css';

type Section = 'home' | 'about' | 'footer';

export default function ContentManagementPage() {
    const [activeSection, setActiveSection] = useState<Section>('home');

    // Mock content state
    const [homeContent, setHomeContent] = useState({
        heroTitle: 'HIMALAYAN ULTRA',
        heroSubtitle: 'The Ultimate Endurance Challenge',
        introText: 'The Himalayan Ultra is an ultra endurance race that takes place in Hong Kong...',
    });

    const [footerContent, setFooterContent] = useState({
        copyrightText: '© 2025 Himalayan Ultra. All rights reserved.',
        contactEmail: 'info@himalayanultra.com',
    });

    const handleHomeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setHomeContent(prev => ({ ...prev, [name]: value }));
    };

    const handleFooterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFooterContent(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        alert('Content updated successfully! (Simulation)');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Site Content Management</h1>
                <button onClick={handleSave} className="btn btn-primary">Publish Changes</button>
            </header>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeSection === 'home' ? styles.active : ''}`}
                    onClick={() => setActiveSection('home')}
                >
                    Home Page
                </button>
                <button
                    className={`${styles.tab} ${activeSection === 'footer' ? styles.active : ''}`}
                    onClick={() => setActiveSection('footer')}
                >
                    Footer & Contact
                </button>
            </div>

            <div className={styles.contentArea}>
                {activeSection === 'home' && (
                    <div className={styles.sectionForm}>
                        <h2>Home Page Hero</h2>
                        <div className={styles.formGroup}>
                            <label>Hero Title</label>
                            <input
                                type="text"
                                name="heroTitle"
                                value={homeContent.heroTitle}
                                onChange={handleHomeChange}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Hero Subtitle</label>
                            <input
                                type="text"
                                name="heroSubtitle"
                                value={homeContent.heroSubtitle}
                                onChange={handleHomeChange}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Intro Text</label>
                            <textarea
                                name="introText"
                                rows={5}
                                value={homeContent.introText}
                                onChange={handleHomeChange}
                                className={styles.textarea}
                            />
                        </div>
                    </div>
                )}

                {activeSection === 'footer' && (
                    <div className={styles.sectionForm}>
                        <h2>Footer Settings</h2>
                        <div className={styles.formGroup}>
                            <label>Copyright Text</label>
                            <input
                                type="text"
                                name="copyrightText"
                                value={footerContent.copyrightText}
                                onChange={handleFooterChange}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Contact Email</label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={footerContent.contactEmail}
                                onChange={handleFooterChange}
                                className={styles.input}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
