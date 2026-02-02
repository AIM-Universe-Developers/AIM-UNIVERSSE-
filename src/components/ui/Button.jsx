import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseClass} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
