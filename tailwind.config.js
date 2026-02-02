/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#0f172a', // Slate 900
                'brand-primary': '#3b82f6', // Blue 500
                'brand-secondary': '#64748b', // Slate 500
                'brand-accent': '#06b6d4', // Cyan 500
                'surface-dark': '#1e293b', // Slate 800
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                'card-gradient': 'linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.7))',
            }
        },
    },
    plugins: [],
}
