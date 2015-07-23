/* globals sprintf */
document.getElementById('ordered').innerHTML = sprintf("The first 4 letters of the english alphabet are: %s, %s, %s and %s", "a", "b", "c", "d");
document.getElementById('swapped').innerHTML = sprintf("%2$s %3$s a %1$s", "cracker", "Polly", "wants");
document.getElementById('named').innerHTML = sprintf("Hello %(name)s", {
    name: "Dolly"
});
