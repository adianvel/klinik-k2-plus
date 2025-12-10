import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FilosofiK2 = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = textRef.current.querySelectorAll('.filosofi-text');

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="filosofi"
            ref={sectionRef}
            className="relative py-32 bg-charcoal overflow-hidden"
        >
            {/* Parallax Background */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            ></div>

            {/* Noise Overlay */}
            <div className="absolute inset-0 noise-overlay"></div>

            <div ref={textRef} className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Side */}
                    <div className="filosofi-text">
                        <h3 className="text-white text-3xl md:text-4xl font-light leading-tight">
                            Mereka bertanya
                        </h3>
                        <h2 className="text-white text-5xl md:text-6xl font-cormorant italic font-bold mt-2">
                            "Apa masalahmu?"
                        </h2>
                    </div>

                    {/* Right Side */}
                    <div className="filosofi-text">
                        <h3 className="text-white text-3xl md:text-4xl font-light leading-tight">
                            Kami bertanya
                        </h3>
                        <h2 className="text-white text-6xl md:text-7xl font-cormorant italic font-bold mt-2">
                            "Apa ceritamu?"
                        </h2>
                    </div>
                </div>

                {/* Manifesto Text */}
                <div className="filosofi-text mt-20 max-w-3xl mx-auto text-center">
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                        Kami percaya setiap individu berhak didengar tanpa dihakimi. Dengan pendekatan
                        holistik — menggabungkan aspek psikologis, sosial, dan spiritual —
                        Klinik K2+ hadir sebagai ruang aman untuk membantumu menemukan keseimbangan
                        dan kesejahteraan sejati.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FilosofiK2;
