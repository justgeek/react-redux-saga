module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^MainContainers(.*)$": "<rootDir>/src/app/MainContainers$1"
  },
  setupTestFrameworkScriptFile: "<rootDir>/src/app/config/tests.config.ts",
  moduleDirectories: [
    "node_modules",
    "<rootDir>/src",
    "rootDir>/src/app/MainContainers"
  ]
};
