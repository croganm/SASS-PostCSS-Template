// postcss.config.js
module.exports = {
    plugins: [
        require("postcss-import"),
        require("@fullhuman/postcss-purgecss")({
            content: ["./**/*.html"],
        }),
        require("postcss-preset-env")({
            stage: 1,
        }),
        require("cssnano")({
            preset: "default",
        }),
    ],
};
