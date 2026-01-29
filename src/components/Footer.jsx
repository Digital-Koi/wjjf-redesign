import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { content } from '../content';

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-white pt-20 pb-10">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#E31B23]">WJJF</span> Ireland
                        </h3>
                        <p className="text-gray-400 mb-6">
                            The official home of Ju-Jitsu in Ireland. Teaching discipline, respect, and self-defense across Northern Ireland.
                        </p>
                        <div className="flex gap-4">
                            <a href={content.contact.socials.facebook} className="text-[#E31B23] hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href={content.contact.socials.instagram} className="text-[#E31B23] hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href={content.contact.socials.twitter} className="text-[#E31B23] hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href={content.contact.socials.youtube} className="text-[#E31B23] hover:text-white transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#find-club" className="hover:text-white transition-colors">Find a Club</a></li>
                            <li><a href="#news" className="hover:text-white transition-colors">News & Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Syllabus</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Coaches Area</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Child Protection</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-[#E31B23] shrink-0" size={20} />
                                <span>{content.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-[#E31B23] shrink-0" size={20} />
                                <a href={`mailto:${content.contact.email}`} className="hover:text-white">{content.contact.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} World Ju-Jitsu Federation Ireland. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
