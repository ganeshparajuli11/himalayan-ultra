import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Home', 'The Race', 'Registration', 'News', 'Results'];

    const getPath = (item: string) => {
        if (item === 'Home') return '/';
        if (item === 'The Race') return '/race-info';
        return `/${item.toLowerCase().replace(' ', '-')}`;
    };

    return (
        <header className="h-16 md:h-20 w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container h-full flex items-center justify-between px-4">
                <div className="text-xl md:text-2xl font-extrabold tracking-tighter">
                    <Link to="/">
                        HIMALAYAN<span className="text-primary">ULTRA</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex gap-8">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    to={getPath(item)}
                                    className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-primary transition-all relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="btn btn-outline px-4 py-2 text-xs">
                        Login
                    </Link>
                    <Link to="/registration" className="btn btn-primary">
                        Register Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-16 md:top-20 left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="container px-4 py-6">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    to={getPath(item)}
                                    className="block text-lg font-medium py-2 hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/10">
                        <Link to="/login" className="btn btn-outline text-center" onClick={() => setIsMenuOpen(false)}>
                            Login
                        </Link>
                        <Link to="/registration" className="btn btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                            Register Now
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
