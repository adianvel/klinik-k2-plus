import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LayananK2 from '../components/LayananK2';
import FilosofiK2 from '../components/FilosofiK2';
import ProgramK2 from '../components/ProgramK2';
import KonselorK2 from '../components/KonselorK2';
import TestimoniK2 from '../components/TestimoniK2';
import Footer from '../components/Footer';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
    useEffect(() => {
        // GSAP context for cleanup
        const ctx = gsap.context(() => {
            // Smooth scroll setup
            ScrollTrigger.config({
                autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="HomePage">
            <Navbar />
            <Hero />
            <LayananK2 />
            <FilosofiK2 />
            <ProgramK2 />
            <KonselorK2 />
            <TestimoniK2 />
            <Footer />
        </div>
    );
}

export default HomePage;
