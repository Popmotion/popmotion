const config = {
  verbose: true,
  moduleFileExtensions: [
            "ts",
            "js"
        ],
   transform: {
            "\\.(ts)$": "../../../node_modules/ts-jest/preprocessor.js"
        },
    testRegex: "/_tests/.*\\.(ts|js)$",
    rootDir: "src"
};

module.exports = config;
