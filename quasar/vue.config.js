const webpack = require("webpack");
const host = "0.0.0.0";
const port = 8080;

module.exports = {
  baseUrl: `http://${host}:${port}/`,
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  css: { extract: false },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/],
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type => {
      addStyleResource(config.module.rule("stylus").oneOf(type));
    });
  }
};
