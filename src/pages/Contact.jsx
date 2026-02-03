import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="pt-24 px-6 container mx-auto pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-purple-400 font-medium tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-white">Contact </span>
                    <span className="text-gradient">Us</span>
                </h1>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="glass p-8 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-300">
                                <MapPin />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    2, 1st Floor, Lakshmipuram,<br />
                                    Kilamel Street- 2, Ganapathy,<br />
                                    Coimbatore
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300">
                                <Mail />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                                <p className="text-gray-400">aimuniversse@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-pink-500/20 rounded-lg text-pink-300">
                                <Phone />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                                <p className="text-gray-400">+91 9345253890</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/aim_universse" target="_blank" rel="noreferrer" className="glass px-6 py-4 flex items-center gap-3 hover:bg-white/10 transition-colors flex-1 justify-center">
                            <Instagram className="text-pink-500" />
                            <span className="font-semibold">Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/company/aim-universse/" target="_blank" rel="noreferrer" className="glass px-6 py-4 flex items-center gap-3 hover:bg-white/10 transition-colors flex-1 justify-center">
                            <Linkedin className="text-blue-500" />
                            <span className="font-semibold">LinkedIn</span>
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass p-8 md:p-10"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                    <form className="space-y-6" action="https://docs.google.com/forms/d/e/1FAIpQLScDNOvL5HPS0iRmll2wMgxCNwqTg9t-PMqFBzhI1ZVzTsgXgQ/viewform" target="_blank">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="How can we help?"></textarea>
                        </div>
                        <Button className="w-full">
                            Send Message (via Form)
                        </Button>
                    </form>
                </motion.div>
            </div>

            {/* Map Embed */}
            <div className="mt-16 glass-panel p-2 rounded-2xl h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.170922650751!2d76.97014217409084!3d11.025799554546381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859149eff21c9%3A0x27532f51b56d816a!2sAim%20universse!5e0!3m2!1sen!2sin!4v1748857335240!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '1rem' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AIM Universse Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
