/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#161622",
                "primary-red": "#EF2A39",
                "primary-green": "#084137",
                secondary: {
                    DEFAULT: "#FF9C01",
                    100: "#FF9001",
                    200: "#FF8E01",
                },
                black: {
                    DEFAULT: "#000",
                    100: "#1E1E2D",
                    200: "#232533",
                },
                gray: {
                    100: "#CDCDE0",
                },
                white: {
                    DEFAULT: "#ffffff",
                    100: "#fafafa",
                    200: "#FE8C00",
                },
                dark: {
                    100: "#131e31",
                },
                navy: "#131e31",
                "light-gray": "#F5F6FA",
            },
            fontFamily: {
                quicksand: ["Quicksand-Regular", "sans-serif"],
                "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
                "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
                "quicksand-light": ["Quicksand-Light", "sans-serif"],
                "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
            },
        },
    },
    plugins: [],
};
