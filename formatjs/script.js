window.onload = function() {
    HandlebarsIntl.registerWith(Handlebars);

    var source = document.getElementById("number-template").innerHTML;
    var template = Handlebars.compile(source);

    var intlData = {
        locales: 'en-US'
    }

    var context = {
        price: 1000
    };

    document.getElementById('english_number').innerHTML = template(context, {
        data: {intl: intlData}
    });

    intlData = {
        locales: 'fr'
    }

    document.getElementById('french_number').innerHTML = template(context, {
        data: {intl: intlData}
    });


    intlData = {
        "locales": "en-US",
        "messages": {
            "photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
        }
    };
    template = Handlebars.compile(document.getElementById("photos-template").innerHTML);
    context = {
        name     : 'Annie',
        numPhotos: 1000,
        takenDate: Date.now()
    }
    document.getElementById('photos').innerHTML = template(context, {
        data: {intl: intlData}
    });

};
