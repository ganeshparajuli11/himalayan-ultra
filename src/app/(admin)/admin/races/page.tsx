'use client';

import { useState } from 'react';
import styles from '../table.module.css';
import Link from 'next/link';

export default function RacesPage() {
    const [races, setRaces] = useState([
        { id: 'H100', name: 'Himalayan 100', distance: '103km', participants: 1542, date: '2026-01-15' },
        { id: 'HALF', name: 'The Half', distance: '56km', participants: 890, date: '2026-01-16' },
        { id: 'THIRD', name: 'The Third', distance: '33km', participants: 450, date: '2026-01-16' },
        { id: 'KIDS', name: 'Kids Race', distance: '3km', participants: 120, date: '2026-01-14' },
    ]);

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this race?')) {
            setRaces(prev => prev.filter(r => r.id !== id));
        }
    };

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.pageTitle}>Race Management</h1>
                <Link href="/admin/races/config" className="btn btn-primary">Add New Race</Link>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Distance</th>
                            <th>Participants</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {races.map((race) => (
                            <tr key={race.id}>
                                <td>{race.id}</td>
                                <td className={styles.highlight}>{race.name}</td>
                                <td>{race.distance}</td>
                                <td>{race.participants}</td>
                                <td>{race.date}</td>
                                <td>
                                    <Link href="/admin/races/config" className={styles.btnSm}>Configure</Link>
                                    <button onClick={() => handleDelete(race.id)} className={`${styles.btnSm} ${styles.danger}`}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
