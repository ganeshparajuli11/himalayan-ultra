'use client';

import styles from '../table.module.css';

export default function RegistrationsPage() {
    const registrations = [
        { id: '1001', name: 'John Doe', race: 'Himalayan 100', status: 'Paid', date: '2024-10-24' },
        { id: '1002', name: 'Jane Smith', race: 'The Half', status: 'Pending', date: '2024-10-25' },
        { id: '1003', name: 'Mike Ross', race: 'Himalayan 100', status: 'Paid', date: '2024-10-26' },
    ];

    return (
        <div>
            <h1 className={styles.pageTitle}>Registrations</h1>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Race</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((reg) => (
                            <tr key={reg.id}>
                                <td>#{reg.id}</td>
                                <td className={styles.highlight}>{reg.name}</td>
                                <td>{reg.race}</td>
                                <td>{reg.date}</td>
                                <td>
                                    <span className={`${styles.status} ${reg.status === 'Paid' ? styles.success : styles.warning}`}>
                                        {reg.status}
                                    </span>
                                </td>
                                <td>
                                    <button className={styles.btnSm}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
