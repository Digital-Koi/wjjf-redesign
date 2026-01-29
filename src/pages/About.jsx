import React from 'react';
import { Shield, Target, Users, BookOpen } from 'lucide-react';
import { content } from '../content';

export default function About() {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Page Header */}
            <div className="bg-[#003087] text-white py-20 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">What We Do</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto relative z-10">
                    The Official Home of Ju-Jitsu in Ireland.
                </p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-[#003087] mb-6">We Educate</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our system has evolved from a combination of old Ju Jitsu styles which the Federation’s Founder, Soke Robert Clark, researched and trained in for many years.
                            He took the best of everything and developed it into a complete training syllabus with belt grades.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            With his permission, David Toney developed the system further writing three training manuals, the first of which Soke Clark wrote a glowing endorsement for.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mt-4">
                            <li className="flex items-center gap-2 text-gray-700 font-medium">
                                <div className="w-2 h-2 rounded-full bg-[#E31B23]"></div> Throws & Locks
                            </li>
                            <li className="flex items-center gap-2 text-gray-700 font-medium">
                                <div className="w-2 h-2 rounded-full bg-[#E31B23]"></div> Kicking & Punching
                            </li>
                            <li className="flex items-center gap-2 text-gray-700 font-medium">
                                <div className="w-2 h-2 rounded-full bg-[#E31B23]"></div> Ground Work
                            </li>
                            <li className="flex items-center gap-2 text-gray-700 font-medium">
                                <div className="w-2 h-2 rounded-full bg-[#E31B23]"></div> Kata & Weapons
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="rounded-3xl overflow-hidden shadow-2xl skew-y-3 border-4 border-white transform transition hover:skew-y-0 duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80"
                                alt="Ju-Jitsu Training"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Values / Pillars */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                        <Shield className="text-[#E31B23] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#003087] mb-3">Qualified Instructors</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Senior Club Instructors have been vetted by Access NI, hold full professional training qualifications, and Public Indemnity insurance, and each club must have a qualified first aider on hand at all times.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            We are ahead in our field by ensuring our coaches are equipped to meet the needs of those with varying ability and disability and those with learning difficulties. All of our affiliated clubs are recognised by the Governing Body for the Sport in Northern Ireland, and as such follow their policies and procedures.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                        <Users className="text-[#E31B23] mb-4" size={40} />
                        <h3 className="text-xl font-bold text-[#003087] mb-3">Next Generation</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We work in primary schools providing after-schools clubs and self defence courses. We run education days and self defence and safety training within schools and colleges.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            We have an ever increasing awareness of the difficulties facing young people today and make the most of our opportunity to support them with, not only their physical health, but also their emotional wellbeing. We are more than just a Martial arts group – we are a community!
                        </p>
                    </div>
                </div>

                {/* Syllabus Teaser */}
                <div className="bg-[#003087] rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <BookOpen size={48} className="mx-auto mb-6 text-blue-300" />
                        <h2 className="text-3xl font-bold mb-4">Our Syllabus</h2>
                        <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-8">
                            The WJJF syllabus is world-renowned, taking students from White Belt to Black Belt and beyond through a structured, progressive learning path.
                        </p>
                        <a href="#contact" className="inline-block bg-[#E31B23] hover:bg-[#B9151B] text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
