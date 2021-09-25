module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",

      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            tests: ["./tests/"],
            components: "./src/components",
            constants: ["./src/constants"],
            screens: ["./src/screens"],
            hooks: ["./src/hooks"],
            store: ["./src/store"],
            helpers: ["./src/helpers"],
          },
        },
      ],
    ],
  };
};
