# Migration Guide 

## Breaking changes in v1.0!
If you have been using this package in versions under 0.x, you have to update your code. 

The major change in v1 is the way to display modelated data and errors. Now, its an object with both properties.

So, just update the calls to modelate:
```
var Modelate = require('modelate');

var model = { ... };
var user = Modelate('User').model(model);

var result = user.modelate(data); 

```
to
```
var result = user.modelate(data).data; 

```

And everything will work as it used to.
