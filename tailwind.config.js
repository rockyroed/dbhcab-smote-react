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
					100: "#903FCF"
				},
				secondary: {
					100: "#C186EF"
				},
				accent: {
					100: "#AD4CF8"
				},
				text: {
					100: "#0D0910",
					101: "#db4251"
				},
				background: {
					100: "#F6F1FA"
				}
			}
		}
	},
	plugins: []
};
