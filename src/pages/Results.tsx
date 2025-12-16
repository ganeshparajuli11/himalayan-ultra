
import PageHeader from '@/components/PageHeader';
import WinnerPodium from '@/components/WinnerPodium';
import { useMemo } from 'react';

// Generator for mock data
const generateResults = (count: number) => {
    const teams = ['CHINA', 'UK', 'USA', 'HONG KONG', 'GERMANY', 'FRANCE', 'NEPAL', 'JAPAN', 'AUSTRALIA'];
    const names = ['Guo Min', 'Tom Joly', 'Tyler Green', 'You Peiquan', 'Richard Li', 'Hannes Namberger', 'Sange Sherpa', 'Wong Ho Chung', 'Jeff Browning', 'Courtney Dauwalter'];

    return Array.from({ length: count }, (_, i) => {
        const pos = i + 1;
        const name = names[Math.floor(Math.random() * names.length)] + (i > 9 ? ` ${i}` : ''); // Add suffix to make uniqueish
        const team = teams[Math.floor(Math.random() * teams.length)];
        const isDNF = Math.random() > 0.9;
        const time = isDNF ? 'DNF' : `${10 + Math.floor(i / 10)}:${10 + (i % 50)}:${10 + i}`;
        const cp = isDNF ? `CP${Math.floor(Math.random() * 8)}` : 'Finish';
        const gap = pos === 1 ? '-' : `+${Math.floor(i * 1.5)}m`;
        const pts = pos <= 50 ? 51 - pos : 0;

        return { pos, no: 100 + i, name, team, cp, time, gap, pts };
    });
};

export default function ResultsPage() {
    // Memoize results so they don't regenerate on re-renders although component is static mostly
    const allResults = useMemo(() => generateResults(100), []);

    // Explicitly set top 3 for consistent demo (overriding random gen for top 3 if desired, 
    // but random is fine for "hundreds of racers" demo)
    // Actually, let's keep the specific names for the podium as per previous context for continuity if possible,
    // or just let the generator handle it. Let's stick to the generated one for simplicity but make sure sorting is logical.

    // Let's manually inject the top 3 we liked to keep the demo looking good:
    const top3 = [
        { pos: 1, no: 5, name: "Guo Min", team: "CHINA", cp: "Finish", time: "10:38:53", gap: "-", pts: 25 },
        { pos: 2, no: 12, name: "Tom Joly", team: "UK", cp: "Finish", time: "10:45:10", gap: "+06:17", pts: 18 },
        { pos: 3, no: 8, name: "Tyler Green", team: "USA", cp: "Finish", time: "10:52:30", gap: "+13:37", pts: 15 },
    ];

    const podiumWinners = top3;
    // The rest of the list starting from pos 4
    const tableRunners = allResults.slice(3).map(r => ({ ...r, pos: r.pos + 3 }));

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Race Results" subtitle="Live Pro Classifications | 2026 Test Season" />

            {/* Podium Section */}
            <section className="py-12 bg-background border-b border-white/5">
                <div className="container mx-auto px-4">
                    <WinnerPodium winners={podiumWinners} />
                </div>
            </section>

            <div className="container mx-auto px-4 py-4 md:py-6">
                {/* F1 Style Results Table */}
                <div className="bg-[#15151e] border-t-4 border-primary shadow-2xl flex flex-col max-h-[600px] md:max-h-[800px] overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#1a1a2e] p-4 md:p-6 border-b border-white/10 flex justify-between items-center shrink-0 z-20 relative">
                        <div>
                            <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-wider italic">2026 Race Results</h2>
                            <span className="text-xs md:text-sm text-gray-400 font-mono mt-1 block tracking-tight">Live Classifications • {tableRunners.length + 3} Drivers</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-2 w-8 bg-red-600 rounded-sm"></div>
                            <div className="h-2 w-8 bg-white/20 rounded-sm"></div>
                        </div>
                    </div>

                    <div className="overflow-auto custom-scrollbar px-0">
                        <table className="w-full text-left border-collapse relative">
                            <thead className="sticky top-0 z-10 bg-[#15151e]">
                                <tr className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-primary/50">
                                    <th className="p-3 md:p-4 w-12 text-center">Pos</th>
                                    <th className="p-3 md:p-4 w-16 font-bold text-white">No</th>
                                    <th className="p-3 md:p-4">Driver</th>
                                    <th className="p-3 md:p-4 hidden md:table-cell text-right">CP</th>
                                    <th className="p-3 md:p-4 text-right">Time/Retired</th>
                                    <th className="p-3 md:p-4 hidden sm:table-cell text-right">Gap</th>
                                    <th className="p-3 md:p-4 text-center">Pts</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-[#0e0e14]">
                                {tableRunners.map((driver) => (
                                    <tr
                                        key={driver.no}
                                        className="transition-colors hover:bg-white/5 group h-12 md:h-14"
                                    >
                                        <td className="p-3 md:p-4 text-center text-white font-mono font-bold text-sm">
                                            {driver.pos}
                                        </td>
                                        <td className="p-3 md:p-4 font-mono text-primary font-bold text-sm">{driver.no}</td>
                                        <td className="p-3 md:p-4">
                                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                                                <span className="text-white font-bold text-sm md:text-base uppercase tracking-wide truncate max-w-[120px] md:max-w-none">{driver.name}</span>
                                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold bg-[#1a1a2e] px-1.5 py-0.5 rounded border border-white/10">{driver.team}</span>
                                            </div>
                                        </td>
                                        <td className="p-3 md:p-4 hidden md:table-cell text-gray-400 font-mono text-xs text-right uppercase">
                                            {driver.cp}
                                        </td>
                                        <td className={`p-3 md:p-4 font-mono font-bold text-right text-sm ${driver.time === 'DNF' ? 'text-red-500' : 'text-white'}`}>
                                            {driver.time}
                                        </td>
                                        <td className="p-3 md:p-4 hidden sm:table-cell font-mono text-gray-500 text-xs text-right">{driver.gap}</td>
                                        <td className="p-3 md:p-4 text-center font-bold text-white text-sm">{driver.pts}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Legacy simple list below if needed */}
                <div className="mt-8 text-center pt-8">
                    <p className="text-gray-600 text-sm">Showing top 100 results manually generated for demonstration.</p>
                </div>
            </div>
        </div>
    );
}
