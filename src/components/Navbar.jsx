import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="WJJF Ireland Logo" className="h-16 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/#about" className="font-medium hover:text-[#003087]">What We Do</Link>
                        <Link to="/find-a-club" className="font-medium hover:text-[#003087]">Find a Club</Link>
                        <Link to="#news" className="font-medium hover:text-[#003087]">News</Link>
                        <a href="#contact" className="btn btn-primary">
                            Join Now
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col p-4 gap-4">
                        <Link to="/#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>What We Do</Link>
                        <Link to="/find-a-club" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Find a Club</Link>
                        <Link to="#news" className="text-lg font-medium" onClick={() => setIsOpen(false)}>News</Link>
                        <a href="#contact" className="btn btn-primary w-full text-center" onClick={() => setIsOpen(false)}>Join Now</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
