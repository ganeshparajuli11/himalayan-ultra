const Footer = () => {
    return (
        <footer className="bg-[#020205] py-16 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-black mb-4 tracking-tight">HIMALAYAN<span className="text-primary">ULTRA</span></h3>
                        <p className="text-gray-400 leading-relaxed">The ultimate endurance challenge in Hong Kong's stunning landscapes.</p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Follow Us</h4>
                        <div className="flex gap-4">
                            {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                                <a key={social} href="#" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase font-bold tracking-wide">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/5">
                    <p>&copy; {new Date().getFullYear()} Himalayan Ultra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
