jquery.phantom
==============
Generates a phantom form and submits it.

Usage
-----
```
var formConfig = {
    name: 'myForm',
    action: '/action-to-post-to',
    method: 'post',
    data: {
        foo: 'bar'
    }
    preSubmit: function($form) {} // optional
};
$.phantom(formConfig);
```

