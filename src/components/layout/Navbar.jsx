import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Media', path: '/media', target: '_blank' },
    ];

    const bgColor = scrolled ? 'bg-brand-dark/80 mobile:bg-brand-dark' : 'bg-transparent';
    const backdrop = scrolled ? 'backdrop-blur-md border-b border-white/5' : '';

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColor} ${backdrop}`}
        >
            <div className="container-custom flex justify-between items-center py-4">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/image/logo/aim-universe-logo-v2.jpg" alt="AIM UNIVERSE" className="h-12 w-auto object-contain rounded-lg" />
                    <span className="text-2xl font-bold tracking-tighter">
                        <span className="text-white">AIM</span> <span className="text-brand-primary">UNIVERSSE</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                            className={`text-sm font-medium transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-white' : 'text-brand-secondary'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button onClick={() => window.location.href = '/contact'} className="py-2 px-6 text-sm">
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface-dark border-b border-white/5 overflow-hidden"
                    >
                        <div className="container-custom flex flex-col gap-4 py-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    target={link.target}
                                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button onClick={() => { window.location.href = '/contact'; setIsOpen(false); }} className="w-full">
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
