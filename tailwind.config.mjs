/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#222222',  // Bleu primaire
				'secondary': '#FFFFFF', // Jaune secondaire
				
			  },
			  fontFamily: {
				sans: ['Playfair Display', 'ui-sans-serif', 'system-ui'],
				serif: ['Raleway', 'ui-sans-serif', 'system-ui'],
			  },
		},
	},
	plugins: [],
}
