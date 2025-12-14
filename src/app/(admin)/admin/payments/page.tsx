'use client';

import { useState } from 'react';
import styles from '../table.module.css';

export default function PaymentsPage() {
    const [selectedEvent, setSelectedEvent] = useState('All');

    // Mock Data
    const [payments, setPayments] = useState([
        { id: 'PAY-001', user: 'John Doe', race: 'Himalayan 100', amount: 'HKD 2,800', method: 'Credit Card', status: 'Completed', date: '2024-10-24' },
        { id: 'PAY-002', user: 'Mike Ross', race: 'Himalayan 100', amount: 'HKD 2,800', method: 'PayPal', status: 'Completed', date: '2024-10-26' },
        { id: 'PAY-003', user: 'Sarah Lee', race: 'The Half', amount: 'HKD 1,500', method: 'Credit Card', status: 'Pending', date: '2024-10-27' },
        { id: 'PAY-004', user: 'Tom Chen', race: 'The Third', amount: 'HKD 900', method: 'Stripe', status: 'Completed', date: '2024-10-27' },
    ]);

    const events = ['All', 'Himalayan 100', 'The Half', 'The Third'];

    const filteredPayments = selectedEvent === 'All'
        ? payments
        : payments.filter(p => p.race === selectedEvent);

    const handleDelete = (id: string) => {
        if (confirm('Delete this payment record?')) {
            setPayments(prev => prev.filter(p => p.id !== id));
        }
    };

    const handleStatusToggle = (id: string) => {
        setPayments(prev => prev.map(p =>
            p.id === id ? { ...p, status: p.status === 'Completed' ? 'Pending' : 'Completed' } : p
        ));
    };

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.pageTitle}>Payments</h1>
                <div className={styles.actions}>
                    <select
                        className={styles.filterSelect}
                        value={selectedEvent}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                    >
                        {events.map(evt => <option key={evt} value={evt}>{evt === 'All' ? 'Filter by Event' : evt}</option>)}
                    </select>
                    <button className={`${styles.btnSm} ${styles.primary}`}>+ Add Payment</button>
                </div>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Race</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((pay) => (
                            <tr key={pay.id}>
                                <td>{pay.id}</td>
                                <td className={styles.highlight}>{pay.user}</td>
                                <td>{pay.race}</td>
                                <td>{pay.amount}</td>
                                <td>{pay.method}</td>
                                <td>{pay.date}</td>
                                <td>
                                    <span className={`${styles.status} ${pay.status === 'Completed' ? styles.success : styles.warning}`}>
                                        {pay.status}
                                    </span>
                                </td>
                                <td>
                                    <button onClick={() => handleStatusToggle(pay.id)} className={styles.btnSm}>
                                        {pay.status === 'Completed' ? 'Mark Pending' : 'Mark Paid'}
                                    </button>
                                    <button onClick={() => handleDelete(pay.id)} className={`${styles.btnSm} ${styles.danger}`}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
