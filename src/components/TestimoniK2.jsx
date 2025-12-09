import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Quote } from 'lucide-react';

const TestimoniK2 = () => {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);

    const testimoniList = [
        {
            text: 'Awalnya aku ragu untuk curhat, tapi konselor di Klinik K2+ benar-benar mendengarkan tanpa menghakimi. Sekarang aku merasa lebih lega.',
            name: 'Mahasiswa Fakultas Tarbiyah',
            initial: 'A',
        },
        {
            text: 'Program pra-nikahnya sangat bermanfaat! Banyak insight baru tentang membangun keluarga yang sehat. Recommended banget!',
            name: 'Mahasiswa Fakultas Syariah',
            initial: 'R',
        },
        {
            text: 'Sebagai mahasiswa rantau, kadang berat rasanya. Tapi berkat Klinik K2+, aku punya tempat untuk berbagi. Terima kasih!',
            name: 'Mahasiswa Fakultas FITK',
            initial: 'D',
        },
        {
            text: 'Workshop manajemen stresnya sangat membantu menjelang UAS. Sekarang aku lebih bisa mengatur waktu dan emosi.',
            name: 'Mahasiswa Fakultas Ekonomi',
            initial: 'F',
        },
        {
            text: 'Konselor sebayanya ramah dan humble. Mereka benar-benar paham kondisi mahasiswa karena mereka juga mahasiswa.',
            name: 'Mahasiswa Fakultas Ushuluddin',
            initial: 'N',
        },
        {
            text: 'Pelayanannya cepat dan gratis. Sangat membantu mahasiswa yang butuh tempat curhat tapi terkendala biaya.',
            name: 'Mahasiswa Fakultas Dakwah',
            initial: 'S',
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;

            // Duplicate content for seamless loop
            const scrollWidth = scrollContainer.scrollWidth / 2;

            gsap.to(scrollContainer, {
                x: -scrollWidth,
                duration: 30,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % scrollWidth)
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Double the testimonials for seamless loop
    const doubledTestimoni = [...testimoniList, ...testimoniList];

    return (
        <section id="testimoni" className="py-24 bg-charcoal overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6 max-w-6xl mb-12">
                <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-outfit font-bold text-white tracking-tighter mb-4">
                        Cerita Mereka
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Pengalaman mahasiswa yang telah merasakan manfaat layanan Klinik K2+
                    </p>
                </div>
            </div>

            {/* Scrolling Container */}
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 px-6"
                    style={{ width: 'max-content' }}
                >
                    {doubledTestimoni.map((testimoni, index) => (
                        <div
                            key={index}
                            className="w-[350px] flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10"
                        >
                            <Quote size={32} className="text-moss mb-4" />

                            <p className="text-white/90 leading-relaxed mb-6 italic">
                                "{testimoni.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-moss text-white rounded-full flex items-center justify-center font-bold">
                                    {testimoni.initial}
                                </div>
                                <span className="text-white/70 text-sm">
                                    {testimoni.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default TestimoniK2;
