const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // add this line of code to siable LintOnSave
  lintOnSave: false
})
