import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "AIM UNIVERSE transformed our operational efficiency. Their software solutions are intuitive and robust.",
        author: "Regional Director",
        company: "Logistics Corp",
    },
    {
        quote: "The HR solution they built allowed us to scale our team seamlessly. Professionalism at its best.",
        author: "HR Manager",
        company: "Tech Startups Inc",
    },
    {
        quote: "Exceptional service in event management. They handled every detail with precision and grace.",
        author: "Marketing Head",
        company: "Global Events Ltd",
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Trusted by Industry <span className="text-brand-gradient">Leaders</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-brand-dark border border-white/5 p-8 rounded-2xl relative"
                        >
                            <Quote className="text-brand-primary/20 absolute top-6 right-6" size={48} />
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic relative z-10">
                                "{item.quote}"
                            </p>
                            <div>
                                <div className="text-white font-bold">{item.author}</div>
                                <div className="text-brand-primary text-sm">{item.company}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
