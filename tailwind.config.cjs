/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Atkinson Hyperlegible", "sans-serif"],
		},
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme("colors.blue.500"),
							'&:hover': {
								color: theme("colors.blue.800"),
							},
						},
						h2: {
							marginTop: '1em'
						},
						ul: {
							listStyleType: 'square',
						},
						li: {
							marginTop: '0em',
							marginBottom: '0em',
						},
						".contains-task-list": {
							listStyleType: 'none',
							paddingLeft: theme("padding.1")
						},
						".task-list-item > input": {
							marginTop: '0em',
							marginBottom: '0em',
							marginRight: theme("margin.1"),
						},
						pre: {
							borderRadius: '0',
						},
						table: {
							borderWidth: "1px",
							borderColor: theme("border.black")
						},
						td: {
							padding: theme("padding.1")
						},
						th: {
							padding: theme("padding.1")
						},
						"td:not(:first-child)": {
							borderLeftWidth: "1px"
						},
						"th:not(:first-child)": {
							borderLeftWidth: "1px"
						}
					},
				},

			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
