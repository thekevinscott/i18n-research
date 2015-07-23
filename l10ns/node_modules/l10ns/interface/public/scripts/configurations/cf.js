window.cf = (function() { var configs = {
  "NAME_SPACE": "cf",
  "MIN_PAGE_LOAD_TIME": 500,
  "MOBILE_WIDTH": 500,
  "TOUCH_OUT_OF_RANGE": 10,
  "AJAX_TIMEOUT": 10000,
  "JSON_HIJACK_PREFIX": "while(1);",
  "X_REQUESTED_BY": "1",
  "CLIENT_ERROR_PATH": "/log/error",
  "OPERATORS": {
    "Equals": "==",
    "Smaller than": "<",
    "Bigger than": ">",
    "Smaller and equal": "<=",
    "Bigger and equal": ">=",
    "Last character is": "lci"
  },
  "ADDITIONAL_COMPAIR_OPERATORS": {
    "and": "&&",
    "or": "||"
  }
};for(var key in configs) { if(/REGEX/.test(key)) { configs[key] = new RegExp(configs[key]); } }return configs; })();