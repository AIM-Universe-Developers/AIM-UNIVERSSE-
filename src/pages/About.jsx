import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-brand-dark min-h-screen pt-24 pb-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Driven by <span className="text-brand-gradient">Innovation</span>
                    </h1>
                </motion.div>

                {/* Soft Background Mission Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-surface-dark/50 border border-white/5 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto backdrop-blur-sm"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Who We Are</h2>
                    <div className="space-y-6 text-brand-secondary text-lg leading-relaxed">
                        <p>
                            Founded in 2021, <span className="text-white font-semibold">AIM UNIVERSE</span> has grown into a trusted technology partner for businesses across various industries.
                        </p>
                        <p>
                            Our mission is to bridge the gap between complex technological capabilities and real-world business applications. We believe in a future where digital transformation is seamless, secure, and accessible.
                        </p>
                        <p>
                            With a commitment to quality, innovation, and customer satisfaction, we deliver tailored solutions that help businesses focus on their core strengths while we engineer their growth.
                        </p>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5 grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-brand-primary font-bold text-xl mb-2">Vision</div>
                            <p className="text-sm text-brand-secondary">To be the global leader in digital innovation.</p>
                        </div>
                        <div>
                            <div className="text-brand-accent font-bold text-xl mb-2">Mission</div>
                            <p className="text-sm text-brand-secondary">Empowering businesses through scalable tech.</p>
                        </div>
                        <div>
                            <div className="text-purple-500 font-bold text-xl mb-2">Values</div>
                            <p className="text-sm text-brand-secondary">Integrity, Excellence, and Agility.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
