import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgramK2 = () => {
    const sectionRef = useRef(null);
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.program-card');

            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top 10%',
                        end: 'bottom 10%',
                        pin: true,
                        pinSpacing: false,
                        id: `k2-card-${index}`,
                    });
                }
            });

            // Fade and scale effect for cards as they get covered
            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        filter: 'blur(10px)',
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: 'top bottom',
                            end: 'top 10%',
                            scrub: 0.5,
                            id: `k2-fade-${index}`,
                        },
                    });
                }
            });

        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const k2Programs = [
        {
            title: 'Kelas Pra-Nikah',
            description: 'Persiapan menuju pernikahan yang sehat dan bahagia dengan pemahaman mendalam tentang kehidupan berumah tangga.',
            image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920',
            animation: 'scan',
        },
        {
            title: 'Pelatihan Konselor Sebaya',
            description: 'Program pelatihan untuk mahasiswa yang ingin menjadi konselor sebaya dan membantu teman-temannya.',
            image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920',
            animation: 'rotate',
        },
        {
            title: 'Workshop Psikologis',
            description: 'Workshop interaktif tentang manajemen stres, komunikasi efektif, dan pengembangan diri.',
            image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920',
            animation: 'heartbeat',
        },
    ];

    return (
        <section
            id="program"
            ref={sectionRef}
            className="relative bg-cream"
        >
            <div className="container mx-auto px-6 max-w-4xl py-24">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-outfit font-bold text-charcoal tracking-tighter mb-4">
                        Program K2+
                    </h2>
                    <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
                        Kegiatan pengembangan diri untuk kesejahteraan mahasiswa
                    </p>
                </div>

                {/* Stacking Cards */}
                <div ref={cardsContainerRef} className="relative">
                    {k2Programs.map((program, index) => (
                        <div
                            key={index}
                            className="program-card mb-8 last:mb-0"
                        >
                            <div className="w-full min-h-[70vh] rounded-[3rem] overflow-hidden relative">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-moss/60 to-charcoal/85"></div>
                                </div>

                                {/* Animation Overlay */}
                                <div className="absolute inset-0">
                                    {program.animation === 'scan' && (
                                        <div
                                            className="w-full h-full animate-scan"
                                            style={{
                                                backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(136, 194, 115, 0.3) 50%, transparent 100%)',
                                                backgroundSize: '200% 100%',
                                            }}
                                        ></div>
                                    )}
                                    {program.animation === 'rotate' && (
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-32 h-32 border-4 border-cream/50 rounded-full animate-rotate"></div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-moss/30 rounded-full"></div>
                                        </div>
                                    )}
                                    {program.animation === 'heartbeat' && (
                                        <div className="absolute bottom-10 left-10 right-10">
                                            <div className="h-1 bg-moss/50 animate-heartbeat"></div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 p-12 md:p-16 h-full flex flex-col justify-end min-h-[70vh]">
                                    <div className="text-cream text-sm font-outfit uppercase tracking-wider mb-4">
                                        Program {index + 1}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
                                        {program.title}
                                    </h3>
                                    <p className="text-white/80 text-lg max-w-2xl">
                                        {program.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramK2;
