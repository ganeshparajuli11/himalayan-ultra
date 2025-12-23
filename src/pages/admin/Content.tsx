
import { useState } from 'react';

type Section = 'home' | 'about' | 'footer';

export default function ContentManagementPage() {
    const [activeSection, setActiveSection] = useState<Section>('home');

    // Mock content state
    const [homeContent, setHomeContent] = useState({
        heroTitle: 'HIMALAYAN ULTRA',
        heroSubtitle: 'The Ultimate Endurance Challenge',
        introText: 'The Himalayan Ultra is an ultra endurance race that takes place in Hong Kong...',
    });

    const [footerContent, setFooterContent] = useState({
        copyrightText: '© 2025 Himalayan Ultra. All rights reserved.',
        contactEmail: 'info@himalayanultra.com',
    });

    const handleHomeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setHomeContent(prev => ({ ...prev, [name]: value }));
    };

    const handleFooterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFooterContent(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        alert('Content updated successfully! (Simulation)');
    };

    return (
        <div className="flex flex-col gap-8">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-wider">Site Content Management</h1>
                <button onClick={handleSave} className="btn btn-primary px-6 py-2">Publish Changes</button>
            </header>

            <div className="flex border-b border-white/10 mb-6">
                <button
                    className={`px-6 py-3 font-bold transition-colors border-b-2 ${activeSection === 'home'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-400 hover:text-slate-900'
                        }`}
                    onClick={() => setActiveSection('home')}
                >
                    Home Page
                </button>
                <button
                    className={`px-6 py-3 font-bold transition-colors border-b-2 ${activeSection === 'footer'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-400 hover:text-slate-900'
                        }`}
                    onClick={() => setActiveSection('footer')}
                >
                    Footer & Contact
                </button>
            </div>

            <div className="bg-[#15151e] p-8 rounded-xl border border-white/10">
                {activeSection === 'home' && (
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-bold text-slate-900 uppercase mb-6 pb-2 border-b border-white/5">Home Page Hero</h2>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Hero Title</label>
                            <input
                                type="text"
                                name="heroTitle"
                                value={homeContent.heroTitle}
                                onChange={handleHomeChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Hero Subtitle</label>
                            <input
                                type="text"
                                name="heroSubtitle"
                                value={homeContent.heroSubtitle}
                                onChange={handleHomeChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Intro Text</label>
                            <textarea
                                name="introText"
                                rows={5}
                                value={homeContent.introText}
                                onChange={handleHomeChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors resize-y"
                            />
                        </div>
                    </div>
                )}

                {activeSection === 'footer' && (
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-bold text-slate-900 uppercase mb-6 pb-2 border-b border-white/5">Footer Settings</h2>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Copyright Text</label>
                            <input
                                type="text"
                                name="copyrightText"
                                value={footerContent.copyrightText}
                                onChange={handleFooterChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Contact Email</label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={footerContent.contactEmail}
                                onChange={handleFooterChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
