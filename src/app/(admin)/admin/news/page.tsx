'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './news.module.css';

export default function NewsAdminPage() {
    const [posts] = useState([
        { id: 1, title: 'Race Results Published', date: 'Jan 15, 2025', status: 'Published' },
        { id: 2, title: 'Course Update', date: 'Dec 01, 2024', status: 'Published' },
        { id: 3, title: 'Draft: Sponsorship Ann..', date: '-', status: 'Draft' },
    ]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>News & Blog Management</h1>
                <Link href="/admin/news/create" className="btn btn-primary">Create New Post</Link>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className={styles.row}>
                                <td className={styles.titleCell}>{post.title}</td>
                                <td>{post.date}</td>
                                <td>
                                    <span className={`${styles.status} ${post.status === 'Published' ? styles.published : styles.draft}`}>
                                        {post.status}
                                    </span>
                                </td>
                                <td>
                                    <Link href={`/admin/news/${post.id}`} className={styles.btnSm}>Edit</Link>
                                    <button className={`${styles.btnSm} ${styles.danger}`}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
