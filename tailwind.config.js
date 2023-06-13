/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'theme-purple': '#8369cf',
				'theme-cyan': '#60d5d5',
			},
			fontFamily: {
				text: ['Mulish', 'Helvetica', 'sans-serif'],
				heading: ['Bookmania', 'Georgia', 'serif'],
			},
		},
	},
	plugins: [],
};

