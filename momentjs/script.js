moment.locale('en');
document.getElementById('english_date').innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

moment.locale('fr');
document.getElementById('french_date').innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
