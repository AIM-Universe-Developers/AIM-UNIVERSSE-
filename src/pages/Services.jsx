import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Globe, Camera, Users, Calendar } from 'lucide-react';

const services = [
    {
        icon: <Users size={32} />,
        title: 'BPO Services',
        desc: 'Streamline operations, reduce costs, and enhance efficiency with our world-class Business Process Outsourcing services.'
    },
    {
        icon: <Users size={32} />, // Using Users again or tailored icon
        title: 'HR Solutions',
        desc: 'Build, manage, and retain top talent through innovative and customized HR solutions. Looking after recruitment, payroll, and compliance.'
    },
    {
        icon: <Calendar size={32} />,
        title: 'Event Management',
        desc: 'Creating memorable and seamless events tailored to your needs. Corporate conferences, dream weddings, or product launches.'
    },
    {
        icon: <Camera size={32} />,
        title: 'CCTV Security',
        desc: 'State-of-the-art CCTV security solutions for homes, businesses, and industrial facilities. 24/7 protection and peace of mind.'
    },
    {
        icon: <Code size={32} />,
        title: 'Software Development',
        desc: 'Cutting-edge software solutions driving business growth. Custom web apps, enterprise software, and AI-driven solutions.'
    }
];

const Services = () => {
    return (
        <div className="pt-24 px-6 container mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">What We Do</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-white">Check our </span>
                    <span className="text-gradient">Services</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Comprehensive technical and operational services to help you build, scale, and succeed.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-8 group hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-purple-500/30"
                    >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
