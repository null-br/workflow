var express = require('express'),
  Endpoint = require('./endpoint'),
  theme = require('../util/theme');

class App {
  constructor(config) {
    this.config = config;
    this.port = this.config.port || 3001;
    this.endpoints = {};
  }

  start() {
    this.server = express();
    if(this.config.endpoints) {
      for(var path in this.config.endpoints) {
        this.endpoints[path] = new Endpoint({
          path: path,
          server: this.server,
          handlers: this.config.endpoints[path],
          delay: this.config.delay
        });
      }
    }

    if (this.config.resources) {
      for(var i = 0, j = this.config.resources.length; i < j; i++) {
        this.server.use(express.static(this.config.resources[i]));
      }
    }

    this.server.listen(this.port);
    theme.info('proxy server is listening on port: ' + this.port)
  }
}

module.exports = App;
