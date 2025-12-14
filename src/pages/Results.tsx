import PageHeader from '@/components/PageHeader';
import styles from './Results.module.css';
import f1Styles from './F1Table.module.css';

const mockLiveResults = [
    { pos: 1, no: 5, name: "Guo Min", team: "CHINA", cp: "Finish", time: "10:38:53", gap: "-", pts: 25 },
    { pos: 2, no: 12, name: "Tom Joly", team: "UK", cp: "Finish", time: "10:45:10", gap: "+06:17", pts: 18 },
    { pos: 3, no: 8, name: "Tyler Green", team: "USA", cp: "Finish", time: "10:52:30", gap: "+13:37", pts: 15 },
    { pos: 4, no: 1, name: "You Peiquan", team: "CHINA", cp: "CP9", time: "09:40:12", gap: "+1 Lap", pts: 12 },
    { pos: 5, no: 22, name: "Richard Li", team: "HONG KONG", cp: "CP9", time: "09:55:00", gap: "+1 Lap", pts: 10 },
    { pos: 6, no: 7, name: "Hannes Namberger", team: "GERMANY", cp: "CP8", time: "DNF", gap: "-", pts: 0 },
];

export default function ResultsPage() {
    return (
        <>
            <PageHeader title="Race Results" subtitle="Live Pro Classifications | 2026 Test Season" />

            <div className="container">
                {/* F1 Style Results Table */}
                <div className={f1Styles.f1Container}>
                    <div className={f1Styles.header}>
                        <h2 className={f1Styles.title}>Classification</h2>
                        <span className={f1Styles.subtitle}>2025 Test Event - Final</span>
                    </div>

                    <div className={f1Styles.tableWrapper}>
                        <table className={f1Styles.table}>
                            <thead>
                                <tr>
                                    <th className={f1Styles.pos}>Pos</th>
                                    <th>No</th>
                                    <th>Runner / Country</th>
                                    <th>Checkpoint</th>
                                    <th>Time/Retired</th>
                                    <th>Gap</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockLiveResults.map((driver) => (
                                    <tr key={driver.no}>
                                        <td className={f1Styles.pos}>
                                            <span className={f1Styles.posBadge}>{driver.pos}</span>
                                        </td>
                                        <td>{driver.no}</td>
                                        <td>
                                            <div className={f1Styles.driverCell}>
                                                <span className={f1Styles.name}>{driver.name}</span>
                                                <span className={f1Styles.team}>{driver.team}</span>
                                            </div>
                                        </td>
                                        <td>{driver.cp}</td>
                                        <td className={f1Styles.time}>{driver.time}</td>
                                        <td className={f1Styles.gap}>{driver.gap}</td>
                                        <td className={f1Styles.pts}>{driver.pts}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Legacy simple list below if needed */}
                <div className={styles.intro}>
                    <h3>Historical Archive</h3>
                    <p>Previous years results available for download.</p>
                </div>
                {/* (We can keep the old list here if we want, or remove it. I'll remove it for purity of design as per user request to use the F1 style) */}
            </div>
        </>
    );
}
