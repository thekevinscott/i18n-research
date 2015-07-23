var minTimer = (function() {
  return {
    t           : 0,
    minDuration : null,
    interval    : null,
    hasEnded    : false,

    start : function(minDuration, errorTimeout, error) {
      var _this        = this;
      this.minDuration = minDuration || 1000;
      this.t           = 0;
      this.interval    = setInterval(function() {
        _this.t += 100;
      }, 100);

      if(errorTimeout && error) {
        setTimeout(function() {
          if(!_this.hasEnded) {
            error();
          }
        }, errorTimeout);
      }
    },

    end : function(cb) {
      var _this = this;
      if(this.t > this.minDuration) {
        if(typeof cb === 'function') {
          _this.hasEnded = true;
          cb();
        }
      } else {
        setTimeout(function() {
          if(typeof cb === 'function') {
            _this.hasEnded = true;
            cb();
          }
        }, this.minDuration - this.t);
      }
      clearTimeout(this.interval);
    }
  }
})();
