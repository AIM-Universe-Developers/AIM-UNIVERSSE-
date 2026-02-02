import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';

const features = [
    {
        icon: <Zap className="text-brand-primary" size={32} />,
        title: 'Fast & Efficient',
        desc: 'Rapid deployment with optimized performance for scalable growth.'
    },
    {
        icon: <ShieldCheck className="text-brand-accent" size={32} />,
        title: 'Secure & Reliable',
        desc: 'Enterprise-grade security protocols ensuring your data acts as an asset, not a liability.'
    },
    {
        icon: <TrendingUp className="text-purple-500" size={32} />,
        title: 'Data-Driven Results',
        desc: 'Strategies backed by real-time analytics to maximize ROI.'
    },
    {
        icon: <Users className="text-emerald-500" size={32} />,
        title: 'Client-Centric',
        desc: 'Tailored solutions with 24/7 dedicated support for your business needs.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section-padding bg-surface-dark/30 border-y border-white/5">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Why Choose AIM UNIVERSE</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Building Trust Through <br /> <span className="text-brand-gradient">Excellence</span>
                    </h2>
                    <p className="text-brand-secondary max-w-2xl mx-auto text-lg">
                        We bridge the gap between complex technology and business goals, delivering solutions that matter.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card-premium text-center"
                        >
                            <div className="bg-brand-dark/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-brand-secondary text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
