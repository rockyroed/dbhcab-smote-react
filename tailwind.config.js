/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px"
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#903FCF"
				},
				secondary: {
					DEFAULT: "#C186EF"
				},
				accent: {
					DEFAULT: "#AD4CF8"
				},
				text: {
					DEFAULT: "#0D0910"
				},
				background: {
					DEFAULT: "#F6F1FA"
				},
				red: {
					DEFAULT: "#CB3232"
				},
				green: {
					DEFAULT: "#207234"
				},
				gray: {
					DEFAULT: "#B0B0B0"
				}
			},
			fontFamily: {
				sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
			}
		}
	},
	plugins: []
};
