/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Forest Green color palette
                cream: '#E8FFD7',       // Light cream - Background
                clay: '#93DA97',        // Light green - Accent
                moss: '#5E936C',        // Medium green - Primary
                charcoal: '#3E5F44',    // Dark green - Text
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
                serif: ['"Cormorant Garamond"', 'serif'],
                jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
                outfit: ['"Outfit"', 'sans-serif'],
                cormorant: ['"Cormorant Garamond"', 'serif'],
            },
            borderRadius: {
                '2rem': '2rem',
                '3rem': '3rem',
            },
            backdropBlur: {
                'xl': '24px',
            },
        },
    },
    plugins: [],
}
