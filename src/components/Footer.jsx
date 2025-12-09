import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-cormorant italic font-bold mb-4">
                            Klinik K2+
                        </h3>
                        <p className="text-white/70 mb-6 max-w-md">
                            Layanan konseling dan kesejahteraan untuk mahasiswa UNU Yogyakarta.
                            Ruang aman dan terpercaya untuk berbagi cerita.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay transition-colors flex items-center justify-center">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay transition-colors flex items-center justify-center">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay transition-colors flex items-center justify-center">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-clay transition-colors flex items-center justify-center">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-outfit font-bold mb-4">Tautan</h4>
                        <ul className="space-y-2">
                            <li><a href="#layanan" className="text-white/70 hover:text-white transition-colors">Layanan</a></li>
                            <li><a href="#philosophy" className="text-white/70 hover:text-white transition-colors">Filosofi</a></li>
                            <li><a href="#protocol" className="text-white/70 hover:text-white transition-colors">Program</a></li>
                            <li><a href="#membership" className="text-white/70 hover:text-white transition-colors">Konseling</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-bold mb-4">Kontak</h4>
                        <ul className="space-y-2">
                            <li className="text-white/70">Kampus UNU Yogyakarta</li>
                            <li className="text-white/70">Jl. Lowanu No. 47</li>
                            <li className="text-white/70">Yogyakarta</li>
                            <li className="text-white/70 mt-4">klinikk2plus@unu-jogja.ac.id</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © 2024 Klinik K2+ - UNU Yogyakarta. Hak cipta dilindungi.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-white/50 hover:text-white transition-colors">Kebijakan Privasi</a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
