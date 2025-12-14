

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import styles from './dashboard.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function AdminDashboard() {
    const barData = {
        labels: ['Himalayan 100', 'The Half', 'The Third', 'Kids Race'],
        datasets: [
            {
                label: 'Registrations',
                data: [450, 320, 210, 85],
                backgroundColor: 'rgba(255, 215, 0, 0.6)', // Gold
                borderColor: 'rgba(255, 215, 0, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#ccc' }
            },
            title: {
                display: true,
                text: 'Registrations by Race Category',
                color: '#fff',
            },
        },
        scales: {
            y: {
                ticks: { color: '#aaa' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
                ticks: { color: '#aaa' },
                grid: { display: false }
            }
        }
    };

    const doughnutData = {
        labels: ['Paid', 'Pending', 'Cancelled'],
        datasets: [
            {
                data: [124000, 28000, 5000],
                backgroundColor: [
                    'rgba(74, 222, 128, 0.7)', // Green
                    'rgba(251, 191, 36, 0.7)',  // Yellow
                    'rgba(239, 68, 68, 0.7)',   // Red
                ],
                borderColor: [
                    'rgba(74, 222, 128, 1)',
                    'rgba(251, 191, 36, 1)',
                    'rgba(239, 68, 68, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
                labels: { color: '#ccc' }
            },
            title: {
                display: true,
                text: 'Revenue Status (HKD)',
                color: '#fff',
            },
        },
    };

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
                <button className={styles.logoutBtn}>LOGOUT</button>
            </header>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h3>Total Registrations</h3>
                    <div className={styles.statValue}>1,065</div>
                    <div className={styles.statTrend}>+12% this week</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Revenue</h3>
                    <div className={styles.statValue}>$452k</div>
                    <div className={styles.statTrend}>+5% vs last year</div>
                </div>
                <div className={styles.statCard}>
                    <h3>Volunteers</h3>
                    <div className={styles.statValue}>85</div>
                    <div className={styles.statTrend}>All positions filled</div>
                </div>
            </div>

            <div className={styles.chartsGrid}>
                <div className={styles.chartCard}>
                    <Bar data={barData} options={barOptions} />
                </div>
                <div className={styles.chartCard}>
                    <div style={{ maxWidth: '350px', margin: '0 auto' }}>
                        <Doughnut data={doughnutData} options={doughnutOptions} />
                    </div>
                </div>
            </div>

            <div className={styles.recentSection}>
                <h3>Recent Registrations</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Race Category</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>103km Ultra</td>
                            <td>Oct 24, 2024</td>
                            <td><span className={styles.statusPaid}>Paid</span></td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>56km Half</td>
                            <td>Oct 24, 2024</td>
                            <td><span className={styles.statusPending}>Pending</span></td>
                        </tr>
                        <tr>
                            <td>Mike Johnson</td>
                            <td>103km Ultra</td>
                            <td>Oct 23, 2024</td>
                            <td><span className={styles.statusPaid}>Paid</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
