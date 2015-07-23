/* globals i18n */
window.onload = function() {
    i18n.init({ lng: 'en', postProcess: 'sprintf' }, function(err, t) {
        // test that an English object works
        document.getElementById('english').innerHTML = t('app.hello');

        // test that a flat key works
        document.getElementById('base_key').innerHTML = t('key');

        // test that interpolation works
        document.getElementById('interpolation_ordered').innerHTML = t('interpolation_ordered', 'a', 'b', 'c', 'd');
        document.getElementById('interpolation_named').innerHTML = t('interpolation_named', {name: 'Franklin'});

        // test that plurals work
        document.getElementById('child').innerHTML = t('child', {count: 1});
        document.getElementById('child_plural').innerHTML = t('child', {count: 2});

        // test that translating to French works
        i18n.setLng('fr', function(err, t) {
            document.getElementById('french').innerHTML = t('app.hello');
        });

        // test that complicated plurals work
        i18n.pluralExtensions.addRule("po", {
            "name": "Polish", 
            "numbers": [ 0, 1, 2, 3, 11, 100 ],
            "plurals": function(n) { return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5); }
        });
        i18n.setLng('po', function(err, t) {
            document.getElementById('zero').innerHTML = t("key", { count: 0 });
            document.getElementById('singular').innerHTML = t("key", { count: 1 });
            document.getElementById('two').innerHTML = t("key", { count: 2 });
            document.getElementById('few').innerHTML = t("key", { count: 4 });
            document.getElementById('many').innerHTML = t("key", { count: 12 });
            document.getElementById('hundreds').innerHTML = t("key", { count: 101 });
        });
    });
};
