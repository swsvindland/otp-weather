/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: "es5",
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
