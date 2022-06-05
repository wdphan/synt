/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: { min: '0px', max: '767px' },
			md: { min: '768px', max: '991px' },
			lg: { min: '992px', max: '1199px' },
			xl: { min: '1200px' },
		},
		plugins: [],
	},
}
