import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Trophy, ChevronRight, Star, Shield, Activity, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import CountUp from '../components/CountUp';
import { content } from '../content';

// Simple Section Component
const Section = ({ id, className = "", children, dark = false }) => (
    <section id={id} className={`py-20 px-4 ${dark ? 'bg-gray-50' : 'bg-white'} ${className}`}>
        <div className="container mx-auto">
            {children}
        </div>
    </section>
);

// Feature Card Component
const FeatureCard = ({ title, description, icon: Icon, link }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#E31B23] mb-6 group-hover:bg-[#E31B23] group-hover:text-white transition-colors">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link to={link} className="inline-flex items-center text-[#E31B23] font-semibold hover:gap-2 transition-all group-hover:text-[#B9151B]">
            Read More <ChevronRight size={16} />
        </Link>
    </motion.div>
);

export default function Home() {
    return (
        <div className="bg-white font-sans">
            <Hero />

            {/* Animated Stats Bar */}
            <div className="bg-[#003087] text-white py-8 relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-white/20">
                        {content.stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
                                    <CountUp to={stat.value} suffix={stat.suffix} duration={1} />
                                </div>
                                <div className="text-white/90 font-medium text-base md:text-lg uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <Section id="about">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <span className="text-[#003087] font-bold tracking-wider uppercase mb-3 block text-sm">About Us</span>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">{content.about.title}</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {content.about.description}
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <Shield className="text-[#E31B23] shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Comprehensive System</h4>
                                    <p className="text-sm text-gray-600">Kicking, punching, throws, locks and ground work.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <MapPin className="text-[#E31B23] shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Province-wide</h4>
                                    <p className="text-sm text-gray-600">Accessible clubs across Northern Ireland.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/about" className="btn btn-primary">Learn More</Link>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80"
                                alt="Ju-Jitsu Class"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-[#E31B23] rounded-2xl"></div>
                    </div>
                </div>
            </Section>

            {/* Features Grid */}
            <Section id="features" dark>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#003087] font-bold tracking-wider uppercase mb-2 block text-sm">Explore</span>
                    <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        title={content.features[0].title}
                        description={content.features[0].description}
                        icon={Users}
                        link={content.features[0].link}
                    />
                    <FeatureCard
                        title={content.features[1].title}
                        description={content.features[1].description}
                        icon={Star}
                        link={content.features[1].link}
                    />
                    <FeatureCard
                        title={content.features[2].title}
                        description={content.features[2].description}
                        icon={Calendar}
                        link={content.features[2].link}
                    />
                </div>
            </Section>

            {/* Benefits / Why Choose Us */}
            <Section id="benefits">
                <div className="bg-[#111827] rounded-3xl overflow-hidden text-white relative shadow-2xl">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#E31B23]/20 to-transparent skew-x-12" />

                    <div className="grid md:grid-cols-2">
                        <div className="p-12 md:p-16 relative z-10">
                            <span className="text-[#E31B23] font-bold tracking-wider uppercase mb-2 block text-sm">Benefits</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">{content.benefits.title}</h2>
                            <div className="space-y-8">
                                {content.benefits.items.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="w-12 h-12 rounded-full bg-white/10 text-[#E31B23] flex items-center justify-center shrink-0 group-hover:bg-[#E31B23] group-hover:text-white transition-all">
                                            {idx === 0 ? <Shield size={24} /> : idx === 1 ? <Activity size={24} /> : <Users size={24} />}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 group-hover:text-[#E31B23] transition-colors">{benefit.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative min-h-[400px] md:min-h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
                                alt="Training"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Kids & Adults Section */}
            <Section id="classes" dark>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Kids Card */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col items-start relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                            <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block text-sm relative z-10"> Ages 4-18</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative z-10">{content.kids.title}</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed relative z-10 flex-grow">{content.kids.description}</p>

                            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative z-10">
                                <img src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80" alt="Kids Juice" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            <a href="#contact" className="btn bg-blue-600 text-white hover:bg-blue-700 w-full relative z-10">
                                {content.kids.cta} <ChevronRight size={16} />
                            </a>
                        </div>

                        {/* Adults Card */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg flex flex-col items-start relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                            <span className="text-[#E31B23] font-bold tracking-wider uppercase mb-2 block text-sm relative z-10">Ages 18+</span>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative z-10">{content.adults.title}</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed relative z-10 flex-grow">{content.adults.description}</p>

                            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative z-10">
                                <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80" alt="Adult Ju-Jitsu" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>

                            <a href="#contact" className="btn bg-[#E31B23] text-white hover:bg-[#B9151B] w-full relative z-10 transition-colors duration-300">
                                {content.adults.cta} <ChevronRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
