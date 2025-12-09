import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, Shield, Clock, Heart } from 'lucide-react';

const KonselingPage = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        fakultas: '',
        prodi: '',
        noHp: '',
        email: '',
        jenisLayanan: '',
        jadwalPreferensi: '',
        keluhan: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fakultasList = [
        'Fakultas Tarbiyah dan Ilmu Keguruan',
        'Fakultas Syariah dan Hukum',
        'Fakultas Ushuluddin dan Pemikiran Islam',
        'Fakultas Dakwah dan Komunikasi',
        'Fakultas Ekonomi dan Bisnis Islam',
        'Fakultas Sains dan Teknologi',
    ];

    const layananList = [
        'Kesehatan Mental',
        'Konseling Keluarga',
        'Pendampingan Spiritual',
        'Konseling Akademik',
        'Konseling Karir',
    ];

    const jadwalList = [
        'Senin - Pagi (08:00 - 12:00)',
        'Senin - Siang (13:00 - 17:00)',
        'Selasa - Pagi (08:00 - 12:00)',
        'Selasa - Siang (13:00 - 17:00)',
        'Rabu - Pagi (08:00 - 12:00)',
        'Rabu - Siang (13:00 - 17:00)',
        'Kamis - Pagi (08:00 - 12:00)',
        'Kamis - Siang (13:00 - 17:00)',
        'Jumat - Pagi (08:00 - 11:00)',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-[2rem] p-8 text-center shadow-xl">
                    <div className="w-20 h-20 bg-moss/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-moss" />
                    </div>
                    <h2 className="text-3xl font-outfit font-bold text-charcoal mb-4">
                        Pendaftaran Berhasil!
                    </h2>
                    <p className="text-charcoal/70 mb-6">
                        Terima kasih telah mendaftar konseling di Klinik K2+.
                        Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi jadwal.
                    </p>
                    <div className="bg-moss/10 rounded-xl p-4 mb-6">
                        <p className="text-charcoal/80 text-sm">
                            <strong>Catatan:</strong> Harap siapkan kartu mahasiswa saat sesi konseling berlangsung.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="inline-block px-8 py-4 bg-moss text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                    >
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream">
            {/* Header */}
            <div className="bg-charcoal py-6">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side - Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal tracking-tighter mb-4">
                            Mulai Konseling
                        </h1>
                        <p className="text-charcoal/70 text-lg mb-8">
                            Isi formulir di bawah ini untuk mendaftar sesi konseling.
                            Data Anda dijamin kerahasiaannya.
                        </p>

                        {/* Trust Indicators */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                                <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                                    <Shield size={24} className="text-moss" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">100% Rahasia</h3>
                                    <p className="text-charcoal/60 text-sm">Data dan cerita Anda dijamin kerahasiaannya</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                                <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                                    <Clock size={24} className="text-moss" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">Respon Cepat</h3>
                                    <p className="text-charcoal/60 text-sm">Konfirmasi jadwal dalam 1x24 jam</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                                <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                                    <Heart size={24} className="text-moss" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">Gratis</h3>
                                    <p className="text-charcoal/60 text-sm">Layanan gratis untuk seluruh mahasiswa UNU</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nama */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all"
                                    placeholder="Masukkan nama lengkap"
                                />
                            </div>

                            {/* NIM */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    NIM <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nim"
                                    value={formData.nim}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all"
                                    placeholder="Masukkan NIM"
                                />
                            </div>

                            {/* Fakultas */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Fakultas <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="fakultas"
                                    value={formData.fakultas}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all bg-white"
                                >
                                    <option value="">Pilih Fakultas</option>
                                    {fakultasList.map((fak, idx) => (
                                        <option key={idx} value={fak}>{fak}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Program Studi */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Program Studi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="prodi"
                                    value={formData.prodi}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all"
                                    placeholder="Masukkan program studi"
                                />
                            </div>

                            {/* No HP */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Nomor WhatsApp <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="noHp"
                                    value={formData.noHp}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>

                            {/* Jenis Layanan */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Jenis Layanan <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="jenisLayanan"
                                    value={formData.jenisLayanan}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all bg-white"
                                >
                                    <option value="">Pilih Jenis Layanan</option>
                                    {layananList.map((lay, idx) => (
                                        <option key={idx} value={lay}>{lay}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Jadwal Preferensi */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Jadwal Preferensi <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="jadwalPreferensi"
                                    value={formData.jadwalPreferensi}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all bg-white"
                                >
                                    <option value="">Pilih Jadwal</option>
                                    {jadwalList.map((jadwal, idx) => (
                                        <option key={idx} value={jadwal}>{jadwal}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Keluhan */}
                            <div>
                                <label className="block text-charcoal font-medium mb-2">
                                    Keluhan / Hal yang Ingin Dibicarakan <span className="text-charcoal/40">(Opsional)</span>
                                </label>
                                <textarea
                                    name="keluhan"
                                    value={formData.keluhan}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-moss focus:ring-2 focus:ring-moss/20 outline-none transition-all resize-none"
                                    placeholder="Ceritakan secara singkat apa yang ingin Anda bicarakan..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-moss text-white rounded-xl font-medium text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Kirim Pendaftaran
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KonselingPage;
