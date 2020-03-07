module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/*.config.js"
  ],
  // collectCoverageOnlyFrom: { "src/components/Header.vue": true },
  coverageReporters: ["html", "text-summary"]
};
