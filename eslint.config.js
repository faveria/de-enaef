module.exports = [
{
    files: ["**/*.js"],
    languageOptions: {
    ecmaVersion: 2021,
    sourceType: "commonjs"
    },
    rules: {
    semi: "error",
    "no-unused-vars": "warn"
    }
}
];