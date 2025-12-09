import TiltCard from './TiltCard';
import { Activity, Brain, Heart, Leaf } from 'lucide-react';

const LayananK2 = () => {
    const layananList = [
        {
            icon: <Brain size={40} />,
            title: 'Kesehatan Mental',
            description: 'Konseling profesional untuk mengatasi stres, kecemasan, dan tantangan emosional dengan pendekatan empatik.',
        },
        {
            icon: <Heart size={40} />,
            title: 'Konseling Keluarga',
            description: 'Pendampingan untuk masalah hubungan keluarga, komunikasi, dan membangun dinamika yang sehat.',
        },
        {
            icon: <Activity size={40} />,
            title: 'Pendampingan Spiritual',
            description: 'Bimbingan spiritual untuk menemukan ketenangan batin dan makna hidup melalui pendekatan holistik.',
        },
        {
            icon: <Leaf size={40} />,
            title: 'Layanan Rujukan',
            description: 'Jaringan rujukan ke psikolog dan psikiater profesional untuk kasus yang memerlukan penanganan lanjutan.',
        },
    ];

    return (
        <section id="layanan" className="py-24 bg-cream">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-outfit font-bold text-charcoal tracking-tighter mb-4">
                        Layanan Kami
                    </h2>
                    <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                        Pendekatan holistik untuk kesejahteraan mahasiswa
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {layananList.map((layanan, index) => (
                        <TiltCard key={index}>
                            <div className="bg-white rounded-[2rem] p-8 h-full border border-moss/10 hover:border-moss/30 transition-colors shadow-lg">
                                <div className="text-moss mb-4">
                                    {layanan.icon}
                                </div>
                                <h3 className="text-2xl font-outfit font-bold text-charcoal mb-3">
                                    {layanan.title}
                                </h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    {layanan.description}
                                </p>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LayananK2;
