/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"moon-900": "#694c9c",
				"moon-800": "#814ac3",
				"moon-600": "#a968cd",
				"moon-500": "#d55dff",
				"moon-300": "#a190c6",
				"moon-100": "#fafafa",
			},
		},
	},
	plugins: [],
};
