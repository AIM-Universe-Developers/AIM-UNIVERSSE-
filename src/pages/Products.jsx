import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Anbu Transports',
        description: 'A comprehensive logistics and transport management solution designed to optimize fleet operations. Real-time tracking, automated scheduling, and cost-efficiency analytics built-in.',
        features: ['Real-time Fleet Tracking', 'Cost Analytics', 'Automated Dispatch'],
        iconPath: '/image/logo/anbu.logo.png',
        gradient: 'from-orange-500/20 to-red-600/20',
        border: 'hover:border-orange-500/50'
    },
    {
        id: 2,
        name: 'Tick My Bus',
        description: 'Revolutionizing the travel industry with a seamless bus booking platform. Integrates payment gateways, route mapping, and instant reservations into one fluid experience.',
        features: ['Instant Reservations', 'Secure Payments', 'Route Optimization'],
        iconPath: '/image/logo/tmbus logo.jpeg',
        gradient: 'from-blue-400/20 to-cyan-500/20',
        border: 'hover:border-cyan-500/50'
    },
    {
        id: 3,
        name: 'Fintrack',
        description: 'The ultimate financial clarity tool for businesses and individuals. Track expenses, manage budgets, and forecast growth with AI-driven insights.',
        features: ['Budget & Expense Tracking', 'AI Financial Insights', 'Multi-currency Support'],
        iconPath: '/image/service-icons/fintrack.png',
        gradient: 'from-green-400/20 to-emerald-600/20',
        border: 'hover:border-emerald-500/50'
    },
    {
        id: 4,
        name: 'Event Management System',
        description: 'A comprehensive platform to simplify event planning and execution. Manage registrations, schedules, and attendee engagement seamlessly.',
        features: ['Seamless Registration', 'Real-time Scheduling', 'Attendee Analytics'],
        iconPath: '/image/service-icons/event.png',
        gradient: 'from-purple-500/20 to-pink-600/20',
        border: 'hover:border-pink-500/50',
        link: 'https://event-management-1-rs9y.onrender.com/'
    }
];

const Products = () => {
    return (
        <div className="bg-brand-dark min-h-screen pt-24 pb-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Portfolio</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Enterprise-Grade <span className="text-brand-gradient">Solutions</span>
                    </h1>
                    <p className="text-brand-secondary max-w-2xl mx-auto text-lg">
                        Discover our suite of proprietary products designed to solve complex real-world challenges with elegance and speed.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image / Visual Side */}
                            <div className="flex-1 w-full relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                                <div className={`relative bg-surface-dark border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden transition-all duration-300 ${product.border} shadow-2xl`}>
                                    <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
                                    <img
                                        src={product.iconPath}
                                        alt={product.name}
                                        className="w-1/2 h-1/2 object-contain drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    {/* Fallback Text if Image Breaks */}
                                    <div className="absolute bottom-4 left-6 text-2xl font-bold text-white/10 select-none pointer-events-none">
                                        {product.name}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 space-y-6">
                                <div className={`inline-block p-3 rounded-lg bg-white/5 border border-white/10 mb-2`}>
                                    {/* Just a generic icon placeholder, could use specific icon per product if available */}
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/20"></div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h2>
                                <p className="text-brand-secondary text-lg leading-relaxed">
                                    {product.description}
                                </p>

                                <ul className="space-y-3 py-4">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 size={20} className="text-brand-primary shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Button
                                        className="flex items-center gap-2 group"
                                        onClick={() => product.link && window.open(product.link, '_blank')}
                                    >
                                        {product.link ? 'Visit Platform' : 'Learn More'} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Products;
