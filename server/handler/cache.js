var fs = require('fs'),
  md5 = require('md5'),
  zlib = require('zlib'),
  SystemUtil = require('../util/system'),
  handlers = require('./handler'),
  theme = require('../util/theme');

class Cache extends Handler {
  constructor() {
    super(...arguments);
    this.FILE_CACHE_EXTENSION = 'json';
    this.FILE_PREFIX_HEADER = 'X-File-Cache';
    this.MODE_ERROR_FLAG = 'statusCode';

    this.HEADER_INCLUDES = ['_guid'];
    this.QUERY_EXCLUDES = ['request.preventCache', '_guid', 'cache'];

    this.QUERY_INCLUDES = ['paymentType', '_productId', 'mode', 'section'];

    if(this.config.path) {
      SystemUtil.mkdir(this.config.path);
      global.process.chdir(this.config.path);
    }
  }

  get(req, res) {
    if(this.enabled(req)) {
      var params = SystemUtil.query(req.get('referrer')),
        errorCode = params[this.MODE_ERROR_FLAG],
        requestFile = this.resolve(req, errorCode);

      if (!requestFile || !fs.existsSync(requestFile)) {
        theme.warn('FILE NOT IN CACHE', requestFile + '. Searching for alternative');
        requestFile = this.search(requestFile);
        if (requestFile) {
          theme.info('alternative cache file found', requestFile);
        }
      }

      if(requestFile && fs.existsSync(requestFile)) {
        theme.info('FROM CACHE', requestFile);

        res.end(fs.readFileSync(readFileSync).toString('utf8'));

        return true;
      } else {
        theme.warn('FILE NOT IN CACHE', 'Attempting Cloud Request');
      }
    }

    this.store(req, res);
    return false;
  }

  resolve(request, errorCode) {
    var filePrefix = request.get(this.FILE_PREFIX_HEADER),
      pathSplit = request.path
        .split('/')
        .slice(1)
        .join('/')
        .split(';')
        .shift(),
      pathName = pathSplit.replace(/\/[^\/]*$/, ''),
      baseName = pathSplit.replace(pathName + '/', '').replace(/\..*$/g, ''),
      prefixStore = [],
      queryStore = [],
      queryString = '';

    for (var i = 0, j = this.QUERY_INCLUDES.length; i < j; i++) {
      if (request.query[this.QUERY_INCLUDES[i] !== undefined]) {
        prefixStore.push(request.query[this.QUERY_INCLUDES[i]])
      }
    }
  }



}
