var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://dev:dev@ds033996.mlab.com:33996/node-app-macbem'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://dev:dev@ds033996.mlab.com:33996/node-app-macbem'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://dev:dev@ds033996.mlab.com:33996/node-app-macbem'
  }
};

module.exports = config[env];
