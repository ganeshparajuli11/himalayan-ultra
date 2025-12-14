'use client';

import { useState } from 'react';
import styles from './config.module.css';
import Link from 'next/link';

export default function RaceConfigPage({ params }: { params: { id: string } }) {
    const [raceData, setRaceData] = useState({
        name: 'Himalayan 100',
        distance: 103,
        date: '2026-01-15',
        fee: 2800,
        checkpoints: [
            { name: 'Start - Pak Tam Chung', distance: 0, cutoff: '08:00' },
            { name: 'CP1 - East Dam', distance: 12, cutoff: '11:30' },
        ],
        mapFile: null as string | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRaceData(prev => ({ ...prev, [name]: value }));
    };

    const handleCPChange = (index: number, field: string, value: string | number) => {
        const newCPs = [...raceData.checkpoints];
        newCPs[index] = { ...newCPs[index], [field]: value };
        setRaceData(prev => ({ ...prev, checkpoints: newCPs }));
    };

    const addCheckpoint = () => {
        setRaceData(prev => ({
            ...prev,
            checkpoints: [...prev.checkpoints, { name: 'New Checkpoint', distance: 0, cutoff: '00:00' }]
        }));
    };

    const removeCheckpoint = (index: number) => {
        setRaceData(prev => ({
            ...prev,
            checkpoints: prev.checkpoints.filter((_, i) => i !== index)
        }));
    };

    const handleSave = () => {
        console.log('Saving Race Config:', raceData);
        alert('Race Configuration Saved!');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.titleGroup}>
                    <Link href="/admin/races" className={styles.backBtn}>&larr; Back</Link>
                    <h1>Configure Race: {raceData.name}</h1>
                </div>
                <button onClick={handleSave} className="btn btn-primary">Save Configuration</button>
            </header>

            <div className={styles.grid}>
                <div className={styles.mainContent}>
                    <div className={styles.card}>
                        <h3>General Details</h3>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Race Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={raceData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={raceData.date}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Distance (km)</label>
                                <input
                                    type="number"
                                    name="distance"
                                    value={raceData.distance}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Entry Fee (HKD)</label>
                                <input
                                    type="number"
                                    name="fee"
                                    value={raceData.fee}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Validation & Checkpoints</h3>
                            <button onClick={addCheckpoint} className={styles.addBtnSm}>+ Add CP</button>
                        </div>

                        <div className={styles.cpList}>
                            {raceData.checkpoints.map((cp, idx) => (
                                <div key={idx} className={styles.cpRow}>
                                    <span className={styles.cpIndex}>{idx === 0 ? 'S' : idx}</span>
                                    <input
                                        type="text"
                                        value={cp.name}
                                        onChange={(e) => handleCPChange(idx, 'name', e.target.value)}
                                        className={styles.input}
                                        style={{ flex: 2 }}
                                    />
                                    <input
                                        type="number"
                                        value={cp.distance}
                                        onChange={(e) => handleCPChange(idx, 'distance', e.target.value)}
                                        placeholder="km"
                                        className={styles.input}
                                        style={{ flex: 1 }}
                                    />
                                    <input
                                        type="time"
                                        value={cp.cutoff}
                                        onChange={(e) => handleCPChange(idx, 'cutoff', e.target.value)}
                                        className={styles.input}
                                        style={{ flex: 1 }}
                                    />
                                    <button onClick={() => removeCheckpoint(idx)} className={styles.deleteBtn}>&times;</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.card}>
                        <h3>Route Map</h3>
                        <div className={styles.mapUpload}>
                            <div className={styles.uploadPlaceholder}>
                                <span>Upload .GPX or .KML file</span>
                                <small>Max size: 5MB</small>
                            </div>
                            <button className={styles.uploadBtn}>Select File</button>
                        </div>
                        <div className={styles.mapInfo}>
                            <p>Current Map: <strong>rt100_v2.gpx</strong></p>
                            <p>Elevation: 5,300m+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
