/* globals Polyglot */
var phrases = {
    "nav": {
        "hello": "Hello",
        "hello_name": "Hello, %{name}",
        "sidebar": {
            "welcome": "Welcome"
        }
    }
}
var polyglot = new Polyglot({phrases: phrases});

document.getElementById('english_hello_name').innerHTML = polyglot.t("nav.hello_name", { name: "John"});

polyglot.extend({
  "num_cars": "%{smart_count} car |||| %{smart_count} cars",
});


polyglot.extend({
  "num_cars": "%{smart_count} car |||| %{smart_count} cars",
});
document.getElementById('english_cars_singular').innerHTML = polyglot.t("num_cars", 1);
document.getElementById('english_cars_plural').innerHTML = polyglot.t("num_cars", 2);

polyglot.locale('po');

polyglot.extend({
  "num_cars": "%{smart_count} samoch&#243;d |||| %{smart_count} samochody |||| samochodów",
});

document.getElementById('polish_cars_one').innerHTML  = polyglot.t("num_cars", 1); 
document.getElementById('polish_cars_few').innerHTML  = polyglot.t("num_cars", 2); 
document.getElementById('polish_cars_many').innerHTML = polyglot.t("num_cars", 5);
