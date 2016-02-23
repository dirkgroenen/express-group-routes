Express group routes
--------------------

> Simple way to group your routes in Express.

Using this module you can easily create route groups in ExpressJS. It transforms the following code:

```javascript
var app = require('express');
var router1 = app.Router();
...
var router1_1 = router1.Router();
...
var router2 = app.Router();
...
```

into:

```javascript
var app = require('express');
require('express-group-routes');

app.group((router) => {
    // Router1
    router.group((router) => {
        // Router1_1
    });
});

app.group(() => {
    // Router2
});
```

##Quick start

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

## Real world example

The code below is used in one of my projects and shows you how you can use this simple module to write (in my opinion) cleaner code.

```javascript
router.group("/api/v1", function(router) {
    // Public available endpoints
    router.post("/login", controller("LoginController#login"));
    router.post("/registration", controller("RegistrationController#create"));

    router.group(function(router){
        // Make sure all routes in this group use authentication
        router.use(authentication);

        router.get("/user/me", controller("UserController#me"));
    });
});
```

#License

MIT