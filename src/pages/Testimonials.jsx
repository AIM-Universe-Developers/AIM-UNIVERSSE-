import React, { useEffect } from 'react';

import ProductCard from '../components/testimonials/ProductCard';
import '../components/testimonials/Testimonials.css';
import { ExternalLink, Instagram, Youtube, Smartphone, Play } from 'lucide-react';

const Testimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const socialLinks = [
        // { name: "Website", url: "https://tickmybus.com/", icon: <ExternalLink size={20} /> },
        { name: "Instagram", url: "https://www.instagram.com/tickmybus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: <Instagram size={20} /> },
        { name: "YouTube", url: "https://www.youtube.com/@TickMyBus", icon: <Youtube size={20} /> },
        { name: "App Store", url: "https://apps.apple.com/in/app/tickmybus/id6738163675", icon: <Smartphone size={20} /> },
        { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tickmybus.customer", icon: <Play size={20} /> }
    ];

    return (
        <div className="testimonials-container">
            <header className="testimonials-header">
                <h1>Trusted by Global Visionaries</h1>
                <p>
                    Experience the synergy of high-end design and enterprise-grade performance. 
                    See what the leaders of the tech industry say about AIM UNIVERSSE.
                </p>
            </header>
            
            <div className="testimonials-grid">
                <ProductCard 
                    name="Tick My Bus"
                    role="Strategic Partner"
                    description="Tick My Bus revolutionizes the way you travel. With a vast network of operators, real-time tracking, and 24/7 support, we ensure your journey is safe, comfortable, and hassle-free. Book your next adventure with confidence."
                    logo="/image/logo/TickMyBus.jpeg"
                    url="https://tickmybus.com/"
                    delay={0.2}
                />
            </div>

            <section className="social-links-section">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-btn"
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                ))}
            </section>
        </div>
    );
};

export default Testimonials;

