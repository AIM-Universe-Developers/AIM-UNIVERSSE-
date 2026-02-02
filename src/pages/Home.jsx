import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import { TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-brand-dark min-h-screen">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-hero-gradient z-0" />
                <div className="absolute inset-0 bg-grid-subtle opacity-30 z-0" />
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />

                <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-white/10 text-brand-primary text-sm font-semibold tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                            <span>INNOVATING THE FUTURE</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                            Transforming Ideas into <br />
                            <span className="text-brand-gradient">Digital Reality</span>
                        </h1>

                        <p className="text-brand-secondary text-lg md:text-xl max-w-lg leading-relaxed">
                            AIM UNIVERSE delivers premium software solutions that empower businesses to scale securely and efficiently. We build the technology backbone of tomorrow.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button onClick={() => window.location.href = '/products'}>
                                View Solutions
                            </Button>
                            <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>

                    {/* Abstract 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:flex items-center justify-center"
                    >
                        {/* Same visual as before but ensured it fits "abstract" requirement */}
                        <div className="relative w-full max-w-lg aspect-square">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-surface-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2"
                            >
                                <div className="w-full h-full bg-brand-dark/50 rounded-xl relative overflow-hidden bg-grid-subtle">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent"></div>
                                    {/* Abstract Shapes */}
                                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl animate-pulse"></div>
                                    <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-brand-accent/20 rounded-full blur-xl" style={{ animationDuration: '4s' }}></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section - Updated Metrics */}
            <section className="py-12 border-b border-white/5 bg-surface-dark/20">
                <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Clients', value: '100+', icon: <Users className="text-brand-primary mb-2" size={24} /> },
                        { label: 'Experience', value: '5+ Years', icon: <Award className="text-brand-accent mb-2" size={24} /> },
                        { label: 'Client Satisfaction', value: '97%', icon: <ShieldCheck className="text-green-500 mb-2" size={24} /> },
                        { label: 'High Growth Rate', value: '127%', icon: <TrendingUp className="text-purple-500 mb-2" size={24} /> },
                    ].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4">
                            {stat.icon}
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-brand-secondary text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <WhyChooseUs />

            <Testimonials />

            {/* Final CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-primary/10 z-0"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-brand-secondary text-lg max-w-2xl mx-auto mb-10">
                        Join hundreds of innovative companies leveraging AIM UNIVERSE for their digital transformation.
                    </p>
                    <Button className="text-lg px-12 py-4 shadow-xl text-white" onClick={() => window.location.href = '/contact'}>
                        Get in Touch
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default Home;
