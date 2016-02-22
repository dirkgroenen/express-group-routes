Express group routes
--------------------

Simple way to group your routes in Express.

#Quick start

```javascript
var app = require('express');
var groupRoutes require('express-group-routes');

app.group("/api/v1", (router) => {
    router.get("/login", loginController.store);
});
```

#License

MIT