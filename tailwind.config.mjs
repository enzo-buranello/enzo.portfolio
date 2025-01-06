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
				// Déclare une famille de polices personnalisée
				'sans': ['Playfair Display', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
				'mono': ['"Roboto Mono"', 'Courier', 'monospace'],
			  },
		},
	},
	plugins: [],
}
