class Endpoint {
  constructor(config) {
    this.config = config;
    this.server = this.config.server;
    this.handlers = this.config.handlers;
    this.path = this.config.path;
    this.delay = this.config.delay;

    this.server.use(this.path, this.handle.bind(this));
  }

  handle(req, res, next) {
    try{
      if(this.handlers && this.handlers.length) {
        for(var i = 0, j = this.handlers.length; i < j; i++) {
          if(this.handlers[i].handle(req, res)) {
            break;
          }
        }
      }
    }catch(e) {}
  }

  meddle(request, response) {
    var previousEnd = response.end,
    context,
    delay = this.delay;

    if(delay) {
      response.end = function() {
        context = this;
        setTimeout(function() {
          previousEnd.apply(context, arguments);
        }, delay);
      }
    }
  }
}

module.exports = Endpoint;
