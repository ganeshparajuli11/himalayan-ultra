
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import RaceMap from '@/components/RaceMap';

type RaceCategory = 'H100' | 'Half' | 'Third';

const raceData = {
    H100: {
        name: 'Himalayan 100',
        description: 'The Himalayan Ultra 100km course starts in Pak Tam Chung on the Sai Kung Peninsula and covers some of the most beautiful trails in Hong Kong, including the MacLehose Trail. The race finishes at the summit of Tai Mo Shan.',
        elevation: { gain: '5,300m+', loss: '4,800m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '08:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '11:30' },
            { name: 'CP2 - Ham Tin', dist: '24 km', cutoff: '15:00' },
            { name: 'CP9 - Finish', dist: '103 km', cutoff: '14:00 (Sun)' },
        ]
    },
    Half: {
        name: 'The Half',
        description: 'A challenging 56km mid-distance race covering the first half of the full course. A perfect stepping stone for ultra runners.',
        elevation: { gain: '2,800m+', loss: '2,600m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '08:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '11:30' },
            { name: 'CP5 - Finish', dist: '56 km', cutoff: '20:00 (Sat)' },
        ]
    },
    Third: {
        name: 'The Third',
        description: 'A fast 33km introductory ultra trail race. Experience the scenic coastal trails of Sai Kung.',
        elevation: { gain: '1,600m+', loss: '1,400m' },
        checkpoints: [
            { name: 'Start - Pak Tam Chung', dist: '0 km', cutoff: '09:00 (Sat)' },
            { name: 'CP1 - East Dam', dist: '12 km', cutoff: '12:00' },
            { name: 'CP3 - Finish', dist: '33 km', cutoff: '16:00 (Sat)' },
        ]
    }
};

export default function RaceInfoPage() {
    const [activeTab, setActiveTab] = useState<RaceCategory>('H100');

    const content = raceData[activeTab];

    const handleDownloadGPX = () => {
        const link = document.createElement('a');
        link.href = '/trail.gpx';
        link.download = `himalayan_ultra_official.gpx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col">
            <PageHeader title="The Race" subtitle="Course Maps & Details" />

            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center mb-12 flex-wrap gap-4">
                    {(Object.keys(raceData) as RaceCategory[]).map((tab) => (
                        <button
                            key={tab}
                            className={`
                                py-3 px-8 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2
                                ${activeTab === tab
                                    ? 'bg-primary border-primary text-black scale-105 shadow-glow'
                                    : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'}
                            `}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'H100' ? 'Himalayan 100' : tab === 'Half' ? 'The Half' : 'The Third'}
                        </button>
                    ))}
                </div>

                <section className="space-y-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-white uppercase">{content.name} Course</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">{content.description}</p>
                    </div>

                    <div className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden">
                        <div className="p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                            <h3 className="text-2xl font-bold text-white uppercase">Course Map</h3>
                            <button onClick={handleDownloadGPX} className="btn btn-outline text-xs px-6 py-2">
                                Download GPX File
                            </button>
                        </div>
                        <div className="p-0 bg-[#0a0a1a] h-[500px] w-full relative z-0">
                            <RaceMap />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-[#15151e] p-8 rounded-xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white uppercase mb-8 border-b border-white/10 pb-4">Elevation Profile</h3>
                            <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 mb-8 border border-dashed border-white/10">
                                <span>Elevation Chart Placeholder ({content.name})</span>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-black/30 p-6 rounded-lg text-center">
                                    <strong className="block text-gray-400 uppercase text-xs tracking-widest mb-2">Gain</strong>
                                    <span className="text-3xl font-black text-primary">{content.elevation.gain}</span>
                                </div>
                                <div className="bg-black/30 p-6 rounded-lg text-center">
                                    <strong className="block text-gray-400 uppercase text-xs tracking-widest mb-2">Loss</strong>
                                    <span className="text-3xl font-black text-white">{content.elevation.loss}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#15151e] p-8 rounded-xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white uppercase mb-8 border-b border-white/10 pb-4">Checkpoints</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 text-xs uppercase text-gray-500 font-bold tracking-widest pb-2 border-b border-white/5 px-2">
                                    <div>CP</div>
                                    <div>Distance</div>
                                    <div>Cut-off</div>
                                </div>
                                {content.checkpoints.map((cp, idx) => (
                                    <div key={idx} className="grid grid-cols-3 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors rounded">
                                        <div className="font-medium text-white">{cp.name}</div>
                                        <div className="font-mono text-primary">{cp.dist}</div>
                                        <div className="font-mono text-gray-300">{cp.cutoff}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* New Rules Section */}
                    <div className="glass p-10 rounded-xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-white uppercase mb-6">Rules & Regulations</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "Participants must be self-sufficient and carry mandatory gear at all times.",
                                "Littering on the course is strictly prohibited and will result in immediate disqualification.",
                                "Bib numbers must be worn on the front and visible at all times.",
                                "Helping other runners in distress is mandatory; time lost will be adjusted.",
                                "The race director reserves the right to modify the course due to weather conditions.",
                                "Supporters provided by runners are only allowed at designated checkpoints."
                            ].map((rule, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-primary mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary block"></span>
                                    <span>{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
