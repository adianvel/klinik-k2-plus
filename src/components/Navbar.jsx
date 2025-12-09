import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
            <div
                className={`
          px-6 py-4 rounded-full transition-all duration-500
          ${scrolled
                        ? 'glass-dark text-moss shadow-2xl'
                        : 'bg-transparent text-white'
                    }
        `}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold font-cormorant italic">
                        K2+
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#layanan" className="hover:opacity-70 transition-opacity">Layanan</a>
                        <a href="#filosofi" className="hover:opacity-70 transition-opacity">Filosofi</a>
                        <a href="#program" className="hover:opacity-70 transition-opacity">Program</a>
                        <a href="#konselor" className="hover:opacity-70 transition-opacity">Konselor</a>
                        <Link
                            to="/konseling"
                            className={`
                px-6 py-2 rounded-full font-medium transition-all
                ${scrolled
                                    ? 'bg-moss text-white hover:bg-opacity-90'
                                    : 'bg-white text-moss hover:bg-opacity-90'
                                }
              `}
                        >
                            Mulai Konseling
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                        <div className="flex flex-col gap-4">
                            <a href="#layanan" className="hover:opacity-70 transition-opacity">Layanan</a>
                            <a href="#filosofi" className="hover:opacity-70 transition-opacity">Filosofi</a>
                            <a href="#program" className="hover:opacity-70 transition-opacity">Program</a>
                            <a href="#konselor" className="hover:opacity-70 transition-opacity">Konselor</a>
                            <Link
                                to="/konseling"
                                className="px-6 py-2 rounded-full font-medium bg-white text-moss hover:bg-opacity-90 transition-all text-center"
                            >
                                Mulai Konseling
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
