/* globals MessageFormat, messages */
var mf = new MessageFormat('en');
document.getElementById('simple').innerHTML = mf.compile(messages.simple)();
document.getElementById('variable').innerHTML = mf.compile(messages.variable)({X: 'Franklin'});
document.getElementById('plural_0').innerHTML = mf.compile(messages.plural)({N: 0});
document.getElementById('plural_1').innerHTML = mf.compile(messages.plural)({N: 1});
document.getElementById('plural_other').innerHTML = mf.compile(messages.plural)({N: 2});
