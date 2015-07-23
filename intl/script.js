/* globals Intl */
var nf;

nf = new Intl.NumberFormat('en');
document.getElementById('number_en').innerHTML = nf.format(1000.23);

nf = new Intl.NumberFormat('fr');
document.getElementById('number_fr').innerHTML = nf.format(1000.23);

nf = new Intl.NumberFormat('de');
document.getElementById('number_de').innerHTML = nf.format(1000.23);

var df;
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

df = new Intl.DateTimeFormat('en');
document.getElementById('date_en').innerHTML = df.format(date);

df = new Intl.DateTimeFormat('de');
document.getElementById('date_de').innerHTML = df.format(date);

df = new Intl.DateTimeFormat('fr');
document.getElementById('date_fr').innerHTML = df.format(date);
