Express group routes
--------------------

Simple way to group your routes in Express.

#Quick start

If you want to prefix all routes with a certain URL you can use the `group` method as following: 

```javascript
var app = require('express');
require('express-group-routes');

app.group("/api/v1", (router) => {
    router.get("/login", loginController.store); // /api/v1/login 
});
```

In case you don't want to add a prefix but still need to group certain routes you can leave the first parameter and go straight for the function:

```javascript
var app = require('express');
require('express-group-routes');

app.group((router) => {
    router.use(middleware);
});
```

#License

MIT