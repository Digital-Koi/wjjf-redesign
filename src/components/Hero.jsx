import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={content.hero.bgImage}
                    alt="Ju-Jitsu Training"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            <div className="container relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Logo/Subtitle */}
                    <span className="text-[#E31B23] font-bold tracking-widest uppercase mb-4 block text-sm md:text-base">
                        {content.hero.subtitle}
                    </span>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                        {content.hero.title}
                    </h1>

                    <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Overseeing 80+ clubs throughout Northern Ireland. The most comprehensive self-defense system.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/find-a-club" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto min-w-[200px]">
                            Find a Club <ChevronRight size={20} />
                        </Link>
                        <a href="#about" className="btn btn-secondary bg-white/10 text-white border-white/30 hover:bg-white hover:text-[#003087] hover:border-white w-full sm:w-auto min-w-[200px] backdrop-blur-sm">
                            Learn More
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
