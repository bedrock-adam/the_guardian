var connect = require('connect'),
    serveStatic = require('serve-static');

connect()
  .use(serveStatic(__dirname + '/../client'))
  .listen(3000);
