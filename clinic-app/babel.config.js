module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["/"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            tests: ["./tests/"],
            "@components": "./components/",
            "@stores/*": "./stores/",
            "@doctypes/*": "./types/",
          },
        },
      ],
    ],
  };
};
