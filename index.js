var express = require('express');

express.application.group = express.Router.group = function(path, fn) {
    var router = express.Router();
    fn(router);
    this.use(path, router);
    return router;
};