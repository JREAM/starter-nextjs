const path = require('path')

module.exports = {
  env: {
    ANALYTICS_ID: 'UA-3106599-2',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  distDir: 'build',
  poweredByHeader: false,
};

