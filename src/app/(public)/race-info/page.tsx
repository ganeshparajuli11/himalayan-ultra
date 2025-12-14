'use client';

import PageHeader from '@/components/PageHeader';
import styles from './page.module.css';
import { useState } from 'react';
import StylizedRaceTrack from '@/components/StylizedRaceTrack';

type RaceCategory = 'H100' | 'Half' | 'Third';

const raceData = {
    H100: {
        name: 'Himalayan 100',
        description: 'The Himalayan Ultra 100km course starts in Pak Tam Chung on the Sai Kung Peninsula and covers some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan.',
        elevation: { gain: '5,300m+', loss: '4,800m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '08:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '11:30' },
            { name: 'CP2 - Ham Tin', dist: '24 km', cutoff: '15:00' },
            { name: 'CP9 - Finish', dist: '103 km', cutoff: '14:00 (Sun)' },
        ]
    },
    Half: {
        name: 'The Half',
        description: 'A challenging 56km mid-distance race covering the first half of the full course. A perfect stepping stone for ultra runners.',
        elevation: { gain: '2,800m+', loss: '2,600m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '08:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '11:30' },
            { name: 'CP5 - Finish', dist: '56 km', cutoff: '20:00 (Sat)' },
        ]
    },
    Third: {
        name: 'The Third',
        description: 'A fast 33km introductory ultra trail race. Experience the scenic coastal trails of Sai Kung.',
        elevation: { gain: '1,600m+', loss: '1,400m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '09:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '12:00' },
            { name: 'CP3 - Finish', dist: '33 km', cutoff: '16:00 (Sat)' },
        ]
    }
};

export default function RaceInfoPage() {
    const [activeTab, setActiveTab] = useState<RaceCategory>('H100');

    const content = raceData[activeTab];

    const handleDownloadGPX = () => {
        // Create a dummy GPX content
        const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="HimalayanUltra">
  <trk>
    <name>${content.name} Route</name>
    <trkseg>
      <!-- Dummy Data -->
      <trkpt lat="22.3" lon="114.2"><ele>10</ele></trkpt>
      <trkpt lat="22.4" lon="114.1"><ele>957</ele></trkpt>
    </trkseg>
  </trk>
</gpx>`;
        const blob = new Blob([gpxContent], { type: 'application/gpx+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `himalayan_ultra_${activeTab}.gpx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <PageHeader title="The Race" subtitle="Course Maps & Details" />

            <div className="container">
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'H100' ? styles.active : ''}`}
                        onClick={() => setActiveTab('H100')}
                    >
                        Himalayan 100
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'Half' ? styles.active : ''}`}
                        onClick={() => setActiveTab('Half')}
                    >
                        The Half
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'Third' ? styles.active : ''}`}
                        onClick={() => setActiveTab('Third')}
                    >
                        The Third
                    </button>
                </div>

                <section className={styles.content}>
                    <div className={styles.intro}>
                        <h2>{content.name} Course</h2>
                        <p>{content.description}</p>
                    </div>

                    <div className={styles.mapSection}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <h3>Course Map</h3>
                            <button onClick={handleDownloadGPX} className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '8px 15px' }}>
                                Download GPX File
                            </button>
                        </div>
                        <div className={styles.mapWrapper}>
                            <StylizedRaceTrack />
                        </div>
                    </div>

                    <div className={styles.elevationSection}>
                        <h3>Elevation Profile</h3>
                        <div className={styles.elevationPlaceholder}>
                            <span>Elevation Chart Placeholder ({content.name})</span>
                            <div className={styles.elevationStats}>
                                <div>
                                    <strong>Gain</strong>
                                    {content.elevation.gain}
                                </div>
                                <div>
                                    <strong>Loss</strong>
                                    {content.elevation.loss}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.checkpoints}>
                        <h3>Checkpoints</h3>
                        <div className={styles.cpTable}>
                            <div className={styles.cpHeader}>
                                <div>CP</div>
                                <div>Distance</div>
                                <div>Cut-off</div>
                            </div>
                            {content.checkpoints.map((cp, idx) => (
                                <div key={idx} className={styles.cpRow}>
                                    <div>{cp.name}</div>
                                    <div>{cp.dist}</div>
                                    <div>{cp.cutoff}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Rules Section */}
                    <div className={styles.rulesSection} style={{ marginTop: '60px', padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        <h3>Rules & Regulations</h3>
                        <ul style={{ listStyle: 'disc', color: '#ccc', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Participants must be self-sufficient and carry mandatory gear at all times.</li>
                            <li>Littering on the course is strictly prohibited and will result in immediate disqualification.</li>
                            <li>Bib numbers must be worn on the front and visible at all times.</li>
                            <li>Helping other runners in distress is mandatory; time lost will be adjusted.</li>
                            <li>The race director reserves the right to modify the course due to weather conditions.</li>
                            <li>Supporters provided by runners are only allowed at designated checkpoints.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
