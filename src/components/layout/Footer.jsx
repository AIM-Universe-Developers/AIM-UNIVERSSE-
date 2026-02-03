import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface-dark border-t border-white/5 pt-16 pb-8 text-sm">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <img src="/image/logo/aim-universe-logo-v2.jpg" alt="AIM UNIVERSSE" className="h-14 w-auto object-contain rounded-lg" />
                            <span className="text-2xl font-bold tracking-tighter">
                                <span className="text-white">AIM</span> <span className="text-brand-primary">UNIVERSSE</span>
                            </span>
                        </Link>
                        <p className="text-brand-secondary leading-relaxed">
                            Empowering businesses with next-gen digital solutions. We build the technology that powers your growth.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-brand-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-brand-secondary hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-brand-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-brand-secondary">
                            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link></li>
                            <li><Link to="/products" className="hover:text-brand-primary transition-colors">Products</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Solutions</h4>
                        <ul className="space-y-3 text-brand-secondary">
                            <li><Link to="/services" className="hover:text-brand-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-brand-primary transition-colors">App Development</Link></li>
                            <li><Link to="/services" className="hover:text-brand-primary transition-colors">AI Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-brand-primary transition-colors">Cloud Infrastructure</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-brand-secondary">
                            <li className="flex gap-3">
                                <MapPin className="shrink-0 text-brand-primary" size={18} />
                                <span>2, 1st Floor, Lakshmipuram,<br />Ganapathy, Coimbatore</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="shrink-0 text-brand-primary" size={18} />
                                <span>aimuniversse@gmail.com</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="shrink-0 text-brand-primary" size={18} />
                                <span>+91 9092748488</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-secondary text-xs">
                    <p>&copy; {new Date().getFullYear()} AIM UNIVERSSE. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
