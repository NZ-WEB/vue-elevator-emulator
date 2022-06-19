module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "\\.ts$": "<rootDir>/node_modules/babel-jest",
  },
};
