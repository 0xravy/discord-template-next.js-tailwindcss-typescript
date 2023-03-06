/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#202225",
                secondary: "#5865f2",
                gray: colors.gray.trueGray,
                gray: {
                    1000: "#232428",
                    900: "#202225",
                    800: "#2f3136",
                    700: "#36393f",
                    600: "#4f545c",
                    400: "#d4d7dc",
                    300: "#e3e5e8",
                    200: "#ebedef",
                    100: "#f2f3f5",
                },
            },
        },
    },
    plugins: [],
};
