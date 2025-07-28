const path = require('path');
const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');
 
const moduleFederationConfig = withModuleFederationPlugin({
  name: 'EvaluationProyect',

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
});
 
moduleFederationConfig.output.publicPath = 'http://localhost:4200/';
