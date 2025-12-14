import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="h-20 w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="container h-full flex items-center justify-between">
                <div className="text-2xl font-extrabold tracking-tighter">
                    <Link to="/">
                        HIMALAYAN<span className="text-primary">ULTRA</span>
                    </Link>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {['Home', 'The Race', 'Registration', 'News', 'Results'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={
                                        item === 'Home' ? '/' :
                                            item === 'The Race' ? '/race-info' :
                                                `/${item.toLowerCase().replace(' ', '-')}`
                                    }
                                    className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-primary transition-all relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <Link to="/login" className="btn btn-outline px-4 py-2 text-xs">
                        Login
                    </Link>
                    <Link to="/registration" className="btn btn-primary">
                        Register Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
