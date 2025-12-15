import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-[#020205] border-t border-white/5 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <h3 className="text-3xl font-black tracking-tighter text-white">
                                HIMALAYAN<span className="text-primary">ULTRA</span>
                            </h3>
                        </Link>
                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                            Push your limits in the heart of the mountains. The ultimate endurance challenge awaiting your spirit.
                        </p>
                    </div>

                    {/* Check out links */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 border-l-2 border-primary pl-3">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Race Info', path: '/race-info' },
                                { name: 'News', path: '/news' },
                                { name: 'Results', path: '/results' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 flex items-center group text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Participant Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 border-l-2 border-primary pl-3">
                            Participants
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Registration', path: '/registration' },
                                { name: 'Login', path: '/login' },
                                { name: 'Rule Book', path: '/race-info' },
                                { name: 'FAQ', path: '/race-info' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 flex items-center group text-sm"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 border-l-2 border-primary pl-3">
                            Contact
                        </h4>
                        <div className="space-y-4 text-gray-400 text-sm font-light">
                            <p>Kathmandu, Nepal</p>
                            <p>info@himalayanultra.com</p>
                            <div className="flex gap-3 mt-6">
                                {['FB', 'IG', 'TW'].map((social) => (
                                    <a key={social} href="#" className="glass w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer font-bold text-[10px] tracking-widest">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} Himalayan Ultra. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-600">
                        <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
