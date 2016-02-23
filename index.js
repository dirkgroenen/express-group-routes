var express = require('express');

express.application.group = express.Router.group = function(arg1, arg2) {
    var fn, path;

    if (arg2 === undefined) {
        path = "/";
        fn = arg1;
    }
    else {
        path = arg1;
        fn = arg2
    }

    var router = express.Router();
    fn(router);
    this.use(path, router);
    return router;
};