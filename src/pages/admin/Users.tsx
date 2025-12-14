import styles from './table.module.css';

export default function UsersPage() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Runner', joined: '2024-09-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Runner', joined: '2024-09-18' },
        { id: 3, name: 'Admin User', email: 'admin@racetiming.com', role: 'Admin', joined: '2024-01-01' },
    ];

    return (
        <div>
            <h1 className={styles.pageTitle}>User Management</h1>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Joined</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td className={styles.highlight}>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`${styles.status} ${user.role === 'Admin' ? styles.admin : styles.neutral}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>{user.joined}</td>
                                <td>
                                    <button className={styles.btnSm}>Edit</button>
                                    <button className={`${styles.btnSm} ${styles.danger}`}>Ban</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
