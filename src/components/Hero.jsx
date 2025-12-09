import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = textRef.current.children;

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-[100dvh] flex items-end pb-32 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1753187991725-76940ce624c0?q=80"
                    alt="Supportive counseling environment"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-moss/30 via-charcoal/50 to-charcoal/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="space-y-4">
                    <h1 className="text-white text-5xl md:text-7xl font-outfit font-light tracking-tighter">
                        You Share,
                    </h1>
                    <h2 className="text-cream text-7xl md:text-9xl font-cormorant italic font-bold">
                        We Care.
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light mt-6">
                        Klinik K2+ adalah ruang aman dan terpercaya untuk berbagi cerita,
                        mencari dukungan kesehatan mental, dan pendampingan spiritual
                        bagi mahasiswa UNU Yogyakarta.
                    </p>
                    <Link
                        to="/konseling"
                        className="mt-8 px-8 py-4 bg-moss text-white rounded-full font-medium text-lg hover:bg-opacity-90 transition-all hover:scale-105 inline-block"
                    >
                        Mulai Konseling
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
