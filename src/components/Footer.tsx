'use client';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#050f25] text-slate-900 pt-32 pb-10 overflow-hidden mt-20">
            {/* Dynamic Top Edge (Slant) */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-background transform -skew-y-2 origin-top-left -translate-y-16 border-b-4 border-primary z-10"></div>

            {/* Background Texture/Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-40 mix-blend-screen"></div>
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 mix-blend-screen"></div>
            </div>

            <div className="container-custom relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <Link to="/" className="inline-block group">
                                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 group-hover:to-primary transition-all duration-500">
                                    Himalayan<span className="text-primary group-hover:text-slate-900 transition-colors">Harmony</span>
                                </h2>
                            </Link>
                            <p className="mt-4 text-blue-200/80 font-medium max-w-sm text-lg leading-relaxed">
                                Experience the raw beauty and challenging terrain of the Himalayas. The ultimate test of endurance.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: '#' },
                                { icon: Twitter, href: '#' },
                                { icon: Instagram, href: '#' },
                                { icon: Youtube, href: '#' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, backgroundColor: 'var(--color-primary)', color: '#0a193c' }}
                                    className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-none transform -skew-x-12 hover:border-primary transition-colors text-slate-900"
                                >
                                    <social.icon className="w-5 h-5 transform skew-x-12" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xl font-black italic uppercase tracking-wider text-primary">Discover</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'The Race', path: '/race-info' },
                                { name: 'Course Maps', path: '/race-info' },
                                { name: 'Results', path: '/results' },
                                { name: 'News', path: '/news' },
                                { name: 'Gallery', path: '/gallery' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-gray-400 hover:text-slate-900 hover:pl-2 transition-all duration-300 font-medium flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xl font-black italic uppercase tracking-wider text-primary">Athletes</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Registration', path: '/registration' },
                                { name: 'Login', path: '/login' },
                                { name: 'Volunteer', path: '/volunteer' },
                                { name: 'Rules & FAQ', path: '/rules' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-gray-400 hover:text-slate-900 hover:pl-2 transition-all duration-300 font-medium flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-xl font-black italic uppercase tracking-wider text-primary">Stay Updated</h4>
                        <p className="text-gray-400 text-sm">Join our mailing list for race updates, training tips, and exclusive offers.</p>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS"
                                className="w-full bg-[#0a193c] border border-white/20 p-4 pr-12 text-sm text-slate-900 placeholder-gray-500 focus:outline-none focus:border-primary transition-colors skew-x-[-6deg]"
                            />
                            <button className="absolute top-0 right-0 bottom-0 px-4 bg-primary text-[#0a193c] hover:bg-white transition-colors skew-x-[-6deg] flex items-center justify-center font-bold">
                                <ArrowRight className="w-5 h-5 skew-x-[6deg]" />
                            </button>
                        </div>

                        <div className="flex items-start gap-3 mt-6 text-gray-400">
                            <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <span className="text-sm">Kathmandu, Nepal<br />Himalayan Harmony HQ</span>
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-gray-400">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <a href="mailto:info@himalayanharmony.com" className="text-sm hover:text-slate-900 transition-colors">info@himalayanharmony.com</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} HK Nutra. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
