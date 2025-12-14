
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
            <section className="py-12 bg-[#0a0a1a] border-b border-white/5">
                <div className="container mx-auto px-4">
                    <WinnerPodium winners={podiumWinners} />
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 md:py-16">
                {/* F1 Style Results Table */}
                <div className="bg-[#15151e] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[800px]">
                    <div className="bg-[#1a1a2e] p-6 border-b border-white/10 flex justify-between items-center shrink-0 z-20 relative">
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Classification</h2>
                            <span className="text-sm text-gray-400 font-mono mt-1 block">Live Updates • {tableRunners.length + 3} Athletes</span>
                        </div>
                        <div className="h-2 w-20 bg-primary rounded-full animate-pulse"></div>
                    </div>

                    <div className="overflow-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse relative">
                            <thead className="sticky top-0 z-10 bg-[#0f0f18] shadow-md">
                                <tr className="text-gray-400 text-xs uppercase tracking-widest border-b border-white/10">
                                    <th className="p-4 w-16 text-center bg-[#0f0f18]">Pos</th>
                                    <th className="p-4 w-20 bg-[#0f0f18] font-bold text-primary">No</th>
                                    <th className="p-4 bg-[#0f0f18]">Runner / Country</th>
                                    <th className="p-4 hidden md:table-cell bg-[#0f0f18] text-right">Checkpoint</th>
                                    <th className="p-4 bg-[#0f0f18] text-right">Time</th>
                                    <th className="p-4 hidden sm:table-cell bg-[#0f0f18] text-right">Gap</th>
                                    <th className="p-4 text-center bg-[#0f0f18]">Pts</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {tableRunners.map((driver) => (
                                    <tr
                                        key={driver.no}
                                        className="transition-colors hover:bg-white/5 group"
                                    >
                                        <td className="p-4 text-center text-gray-400 font-mono font-bold group-hover:text-white transition-colors">
                                            {driver.pos}
                                        </td>
                                        <td className="p-4 font-mono text-primary font-bold">{driver.no}</td>
                                        <td className="p-4">
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold text-base md:text-lg">{driver.name}</span>
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mt-0.5">{driver.team}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 hidden md:table-cell text-gray-400 font-mono text-sm text-right">
                                            <span className={`px-2 py-1 rounded ${driver.cp === 'Finish' ? 'bg-green-500/20 text-green-400' : 'bg-white/5'}`}>
                                                {driver.cp}
                                            </span>
                                        </td>
                                        <td className={`p-4 font-mono font-bold text-right ${driver.time === 'DNF' ? 'text-red-500' : 'text-white'}`}>
                                            {driver.time}
                                        </td>
                                        <td className="p-4 hidden sm:table-cell font-mono text-gray-500 text-sm text-right">{driver.gap}</td>
                                        <td className="p-4 text-center font-black text-white/50 group-hover:text-white transition-colors">{driver.pts}</td>
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
