import { GraduationCap, Heart } from 'lucide-react';

const KonselorK2 = () => {
    const konselorList = [
        {
            name: 'Ahmad Rizki',
            study: 'Psikologi Islam',
            specialty: 'Kesehatan Mental',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
            highlighted: false,
        },
        {
            name: 'Siti Nurhaliza',
            study: 'Bimbingan Konseling',
            specialty: 'Konseling Keluarga',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
            highlighted: true,
        },
        {
            name: 'Muhammad Fajar',
            study: 'Pendidikan Agama Islam',
            specialty: 'Pendampingan Spiritual',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            highlighted: false,
        },
    ];

    return (
        <section id="konselor" className="py-32 bg-cream">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-outfit font-bold text-charcoal tracking-tighter mb-4">
                        Konselor Sebaya
                    </h2>
                    <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                        Tim konselor terlatih yang siap mendengarkan dan mendampingimu
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {konselorList.map((konselor, index) => (
                        <div
                            key={index}
                            className={`
                rounded-[2rem] p-8 transition-all duration-300
                ${konselor.highlighted
                                    ? 'bg-moss text-white scale-105 shadow-2xl'
                                    : 'bg-white text-charcoal hover:scale-105 shadow-lg'
                                }
              `}
                        >
                            {/* Photo */}
                            <div className="flex justify-center mb-6">
                                <div className={`
                  w-32 h-32 rounded-full overflow-hidden border-4
                  ${konselor.highlighted ? 'border-cream' : 'border-moss/30'}
                `}>
                                    <img
                                        src={konselor.image}
                                        alt={konselor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name & Info */}
                            <div className="text-center mb-6">
                                <h3 className={`text-2xl font-outfit font-bold mb-2 ${konselor.highlighted ? 'text-white' : 'text-charcoal'}`}>
                                    {konselor.name}
                                </h3>
                                <div className={`flex items-center justify-center gap-2 mb-3 ${konselor.highlighted ? 'text-white/80' : 'text-charcoal/60'}`}>
                                    <GraduationCap size={16} />
                                    <span className="text-sm">{konselor.study}</span>
                                </div>
                                <span className={`
                  inline-block px-4 py-1 rounded-full text-sm font-medium
                  ${konselor.highlighted ? 'bg-cream text-charcoal' : 'bg-clay/30 text-charcoal'}
                `}>
                                    {konselor.specialty}
                                </span>
                            </div>

                            {/* Quote */}
                            <p className={`text-center text-sm italic mb-6 ${konselor.highlighted ? 'text-white/70' : 'text-charcoal/60'}`}>
                                "Setiap cerita layak untuk didengar tanpa dihakimi"
                            </p>

                            <button
                                className={`
                  w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2
                  ${konselor.highlighted
                                        ? 'bg-charcoal text-white hover:bg-opacity-90'
                                        : 'bg-moss text-white hover:bg-opacity-90'
                                    }
                `}
                            >
                                <Heart size={18} />
                                Konseling dengan {konselor.name.split(' ')[0]}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-16">
                    <p className="text-charcoal/60 mb-4">
                        Ingin bergabung menjadi konselor sebaya?
                    </p>
                    <a
                        href="#"
                        className="inline-block px-8 py-4 border-2 border-moss text-moss rounded-full font-medium hover:bg-moss hover:text-white transition-all"
                    >
                        Daftar Pelatihan Konselor
                    </a>
                </div>
            </div>
        </section>
    );
};

export default KonselorK2;
