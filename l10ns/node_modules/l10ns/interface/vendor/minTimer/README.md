minTimer
========

minTimer is a minimum timer for a specified callback
##Install
```shell
bower install minTimer --save
```

##Usage

```javascript
minTimer.start(2000) //defaults to 1000ms

// some async calls. In this example just an AJAX jquery call.
$.ajax({
  url: 'some',
  success: function() {
    minTimer.end(function() {
      // execute some code at least after 2000ms from start
    });
  }
});
```

###Error timeout
You can also set error timeout:
```javascript
minTimer.start(2000, 4000, function() {
  // Handle error timeout
});
```
The second parameter above is the timeout error. The time it takes to issue an timeout error. The third parameter is a handler handling the timeout error.
