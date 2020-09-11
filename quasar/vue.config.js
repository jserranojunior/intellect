const webpack = require("webpack");
module.exports = {
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
