# Javascript Internationalization

This document is a compilation of internationalization research I've done with the goal to localize a (mostly) client-side Javascript app.

### Some definitions

**i18n** (*internationalization*) - The process by which software is made language and locale neutral. i18n stands for 18 characters in the word *internationalization*.

**l10n** (*localization*) - The required processes to localize software into a specific locale (includes translations, rules about numbers, currencies, dates, and more).

## High-Level Considerations

Besides language translation, there's other localization requirements you might need to consider.

* **Dates** &mdash; Date formats change across cultures. For example, 10/4/15 means October 4th in the US, and April 10th in the UK.
* **Times** &mdash; Different locales require either a 24-hour clock or 12-hour clock. Also, some locales use different notations, like 5h10 in French.
* **Formatting of numbers** &mdash; Different locales use different digits to represent numbers. So, 3,025.23 in English would be 3.025,23 in Greman, and 3 025,23 in French.
* **Images** &mdash; If you have images with text, you need to make sure to provide versions for each locale.
* **UI Spacing** &mdash; You need to provide enough space in the UI to handle expanded lengths of words. IBM has provided [design guidelines](http://www-01.ibm.com/software/globalization/guidelines/a3.html) that specify an additional 200% space for short words; The W3 provides an example of a translation for [Flickr requiring an additional 300% in Italian](http://www.w3.org/International/articles/article-text-size.en).
* **Text Sorting** &mdash; Text sorting can vary by language. For instance, German has two types of sort order, [phonebook and dictionary](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/), which determine whether to sort by sounds (umlauted vowels become to character pairs: ä → ae, ö → oe, ü → ue.) or by character order.
* **Punctuation** &mdash; Different languages use different punctuation. [For instance](https://en.wikipedia.org/wiki/Internationalization_and_localization), double quotes in English (" ") are represented as guillemets in French (« »).
* **Keyboard shortcuts** &mdash; If you have hotkeys that map to English words, these should be updated with a mapping for each locale.
* **Outbound links** &mdash; External links to documentation will need to take language into account.
* **Accessibility** &mdash; If the software offers accessibility options, those will need to take the locales into consideration.

There's a few more that I don't need to handle for this particular project:

* **Currencies**
* **Addresses** &mdash; including zipcodes
* **Phone numbers**
* **Validation** &mdash; Luckily, we have no data input fields that would require locale-specific validation (like number inputs or date/time inputs).


# Technical Considerations


## Keys

When translating strings, there's no consensus on [how to specify keys](https://stackoverflow.com/questions/10654056/best-practice-for-key-values-in-translation-files) used for the strings. Three main strategies are used: English strings, descriptive keys, and object keys.

### English Strings
Using a string as a key might look like this:


	// returns "Welcome" in English,
	// and "Willkommen" in German
	_("Welcome")

	
Which would return the given string in English, and the translation in another language.

This is the format that both [`gettext`](https://www.gnu.org/software/gettext/) (Linux's i18n implementation) and [`genstrings`](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/genstrings.1.html) (Apple's i18n tool) use. Using English strings have a number of clear benefits:

* It directly shows the meaning of the text.
* If a translation is unavailable, it's possible to fall back to the given string.	
* Given that this strategy is the closest thing to an i18n key standard, if browsers were to implement an i18n translation standard in the future, this will probably be the strategy.

However, there are drawbacks:

* Using English as the default can lead to conflicting keys in other languages. For instance, an English word "Email" might require two different texts in French, ["E-Mail" or "Envoyer un e-mail"](https://stackoverflow.com/questions/10654056/best-practice-for-key-values-in-translation-files).
* If an English translation changes, every translation file's keys needs to be updated (though, presumbly, if an English translation changes, every other language will have to change as well).
* For longer texts, specifying English strings keys could become verbose, particularly for paragraph-length text.
	
### Descriptive keys

Using descriptive keys for each translation is another oft-used solution that would look like this:


	// returns "Welcome" in English,
	// and "Willkommen" in German
	_("WELCOME_MESSAGE")
	
This method solves many of the drawbacks of using strings (handling homonyms, changing English translations without updating all language files, and less verbose).

However, using abstract keys comes with its own set of disadvantages:

* It's not immediately clear what a given string means, so metadata or comments dictating the purpose and placement of strings would be necessary.
* No fallback is possible if a translation doesn't exist.
* Collisions in key names could happen much more frequently.

### Objects

Finally, we could use objects which is effectively a more advanced key structures:

	// returns "Welcome" in English,
	// and "Willkommen" in German
	_("messages.welcome")

The main benefit here would be to keep things better organized by namespacing various texts. This is the strategy that [Rails uses for their i18n tool](http://guides.rubyonrails.org/i18n.html). It would also avoid the issue of collisions highlighted above with a flat JSON object.

## Passing arguments

In many languages, [word order can change](https://blogs.oracle.com/userassistance/entry/keeping_it_simple_yet_effective_facebooks_i18n_best_practices). Therefore, it's important that translations maintain the ability to change word order in sentences. This means string concatenations should be avoided:

	// Bad!
	_("File moved to ") + folder_name + _("a few minutes ago")
	
	// Good!
	_("File moved to % a few minutes ago", %s)
	
Most libraries accept arguments in order or as named parameters which allows for flexible input. This allows the developer to decide which method of input to use, dependinding on whether verbosity or clarity is desired.

	// Passing arguments in order
	_('The first letters in the alphabet: %s %s %s', 'a', 'b', 'c')
	
	// Passing named arguments
	_('Welcome to %(version), %(user_name)', { version: 'Awesome Software', user_name: 'admin' })

## Plurals

Another problem between different locales [concerns plurals](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html).

Different languages have different rules for plurals. Polish, for instance, [has four plural forms](http://alistapart.com/article/pluralization-for-javascript):

>A plural rule defines a plural form using a formula that includes a counter. A counter is the number of items you’re trying to pluralize. Say we’re working with “2 rabbits.” The number before the word “rabbits” is the counter. In this case, it has the value 2. Now, if we take the English language as an example, it has two plural forms: singular and plural. Therefore, our rules look like this:

> * If the counter has the integer value of 1, use the singular: “rabbit.”
> * If the counter has a value that is not equal to 1, use the plural: “rabbits.”
> 
> However, the same isn’t true in Polish, where the same word—“rabbit,” or “królik”—can take more than two forms:
> 
> * If the counter has the integer value of 1, use “królik.”
> * If the counter has a value that ends in 2–4, excluding 12–14, use “królika.”
> * If the counter is not 1 and has a value that ends in either 0 or 1, or the counter ends in 5–9, or the counter ends in 12–14, use “królików.”
> * If the counter has any other value than the above, use “króliki.”

To solve this, [ICU's **MessageFormat**](http://userguide.icu-project.org/formatparse/messages) provides a standard for formatting plurals in strings across languages. (It also specifies how to handle genders in different languages.)

A message with plurals might look like this:

	'There {files, plural, one{is # file} other{are # files}}';

The message above shows plurals inlined in the message. Another strategy is to define each plural message separately:

	{
		FILE_MESSAGE: {
			one: "There is # file",
			other: "There are # files"
		}
	}

Defining plurals using the latter strategy can become very verbose, especially for longer text strings. Inlining plurals as shown in the first example is much more concise.

## Organizing translation files

Many libraries organize translation files by language with an optional capitilized country code:

	- de.json
	- en-US.json
	- fr-CA.json
	- fr.json

If we decide to split up translation files by application section, languages would be the logical folder structure:

	- de/
	  - constants.json
	  - files.json
	  - users.json
	- en-US/
	  - constants.json
	  - files.json
	  - users.json

This would be useful if we wanted to abstract out constants for each set of translations in order to share common words or phrases.

## Translation formats

The most obvious file format is JSON.

However, [`gettext`](https://www.gnu.org/software/gettext/), Linux's standard translation library, uses a format called [PO files](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) which is also worth considering.

The [format of a PO file](http://pology.nedohodnik.net/doc/user/en_US/ch-poformat.html) is:

	white-space
	#  translator-comments
	#. extracted-comments
	#: reference…
	#, flag…
	#| msgid previous-untranslated-string
	msgid untranslated-string
	msgstr translated-string

There is wide support across languages for reading PO files, including [Node](https://github.com/mikejholly/node-po), [Python](https://polib.readthedocs.org/en/latest/quickstart.html), and [Java](https://www.gnu.org/software/gettext/manual/html_node/Java.html).

A major argument in favor of using PO files is that it would allow us to take advantage of the ecosystem that's been built up around the PO format. For instance, [POEdit](https://poedit.net/) is a popular translating tool; numerous [online web services](https://webtranslateit.com/en/docs/file_formats/) offer PO support; and any experienced translator will certainly be familiar with the PO format.

Additionally, if you're sharing translation files with a particular non-Javascript backend, PO might be a more appropriate file format than JSON.

# Debugging and development

When it comes to debugging translation integration, a number of recommendations are worth highlighting.

### Pseudo Language

A common recommendation is to set up an "pseudo language" for testing. This will highlight all translated strings in the application and allow developers to quickly locate any untranslated strings.

[One solution](http://www.agileconnection.com/article/internationalization-best-practices-agile-teams?page=0%2C1) is to simply pad English strings, making it easy to see missing strings:

> "里îßEnter your name:里îß"

Another option is to replace English with a [repeating character](http://www.techrepublic.com/blog/10-things/10-tips-and-best-practices-for-software-localization/):

> “XXXXX”

[My favorite](http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx) is replacing English characters with similar, yet distinctly foreign, replacements:

> Ŝęľęčŧ äŉ äččőūŉŧ þęľőŵ ŧő vįęŵ őř đőŵŉľőäđ yőūř äväįľäþľę őŉľįŉę şŧäŧęmęŉŧş.

### Identifiers

HTML elements containing translations should be tagged with the particular key of the translation in development mode. This will make it easy to identify a particular translation if it acts up.

### Translator Tools

We should provide an easy way to see what translations are missing across all translation files.



# Solutions

## Translations

I evaluated a number of i18n libraries. Here are my thoughts on each.

###[FormatJS](http://formatjs.io/)
*License: [Yahoo BSD](https://github.com/yahoo/formatjs-site/blob/master/LICENSE.md) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/formatjs/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/formatjs/)*

FormatJS is a collection of i18n tools, including integrations for templating engines such as Handlebars.

Handlebars helpers automatically translate based on the locale:

	var template = Handlebars.compile(
	    '{{formatNumber price style="currency" currency="USD"}}'
	);

	template({ price: 1000 }, {
        data: {intl: { locales: 'en-US' }}
	});
	> $1,000	
    
	// switching to French
	var result = template({ price: 1000 }, {
		data: {intl: {locales: 'fr' }}
	});
	> 1 000 $US    

Number and Date/Time localizations are included as well.

FormatJS also handles plurals according to the ICU MessageFormat standard:

	var intlData = {
		"locales": "en-US",
		"messages": {
			"photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
		}
	};
	
	var template = Handlebars.compile(
		'{{formatMessage (intlGet "messages.photos")
        name=name
        numPhotos=numPhotos
        takenDate=takenDate}}'
	);
	var context = {
		name: 'Annie',
		numPhotos: 1000,
		takenDate: Date.now()
	};
	
	template(context, {
		data: {intl: intlData}
	});
	> Annie took 1,000 photos on July 23, 2015.

Additionally, the set of APIs appears to be modular, so we can pick and choose what we want to include.

### [i18next](http://i18next.com/)
*License: [MIT](https://github.com/i18next/i18next/blob/master/license) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/i18next/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/i18next/)*

i18next handles string translations. It doesn't seem to work with dates or numbers. Supports the browser and Node.

*locales/en/translation.json*

	{
		"app": {
			"name": "Hello"
		}
	}
	
*locales/fr/translation.json*

	{
		"app": {
			"hello": "Bonjour"
		}
	}	

*script.js*

	t("app.name");
	> Hello
	
	i18n.setLng('fr', function(err, t) {
		t("app.name");
	});
	> Bonjour
	


i18next has nice [sprintf and interpolation support](http://i18next.com/pages/doc_features.html). 

*locales/en/translation.json*
	{
		interpolation_ordered: 'The first 4 letters of the english alphabet are: %s, %s, %s and %s',
		"interpolation_named": "Hello __name__"
	}
	
*script.js*

	t('interpolation_named', {name: 'Franklin'});
	> Hello Franklin
	t('interpolation_ordered', 'a', 'b', 'c', 'd');
	> The first 4 letters of the english alphabet are: a, b, c, and d

It also handles plurals, along with the ability to define your own plural rules.

	i18n.t("key", { count:   0 }); // -> zero
	i18n.t("key", { count:   1 }); // -> singular
	i18n.t("key", { count:   2 }); // -> two
	i18n.t("key", { count:  11 }); // -> many
	
	// sample for arabic
	i18n.pluralExtensions.addRule("ar", {
		"name": "Arabic", 
  		"numbers": [ 0, 1, 2, 3, 11, 100 ],
  		"plurals": function(n) {
  			return Number(n === 0 ? 
  							0 :
  							n == 1 ? 
  								1 :
  								n == 2 ? 
  									2 : 
  									n % 100 >= 3 && n % 100 <= 10 ?
  										3 : 
  										n % 100 >= 11 ? 
  											4 : 
  											5);
  		}
	});

A nicely built library, very customizable, with dynamic requiring of translation files.

### [l10ns](http://l10ns.org/)
*License: [MIT](https://github.com/tinganho/l10ns/blob/master/LICENSE-MIT) | [Code Sample](https://github.com/scottlabs/i18n-research/tree/master/l10ns)*

L10ns is [spoken of highly](http://alistapart.com/article/pluralization-for-javascript), and purports to offer a number of nice features including robust plurals handling.

Unfortunately, the getting started documentation is missing steps, and the generated code has a syntax error so I wasn't able to fully evaluate the library.

	// Provided sample code
	var requireLocalizations = require('path/to/output/all.js');
	var l = requireLocalizations('en-US');
	
	l('SIGN_UP->FIRSTNAME');
	> Franklin
	
	l('SIGN_UP->LASTNAME');
	> Pierce


Overall, the neat features include:

* Automatic source code traversal to find translation strings and automatically generating the translation files via running `> l10ns compile`
* An [online web editor](https://raw.githubusercontent.com/scottlabs/i18n-research/master/l10ns/l10ns%20web%20interface.png) for translators to use to input translations

However, the library requires some very non-standard translation file formats, and would require additional compilation steps in our build process.

### [Polyglot](http://airbnb.io/polyglot.js/)
*License: [Custom](https://github.com/airbnb/polyglot.js/blob/master/LICENSE) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/polyglot/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/polyglot/)*

Polyglot is an i18n library built and used by Airbnb.

It supports both Node and the browser. It's agnostic to translation file format.

	var phrases = {
   		"nav": {
        	"hello_name": "Hello, %{name}",
    	}
	}
	
	var polyglot = new Polyglot({phrases: phrases});

	polyglot.t("nav.hello_name", { name: "John"});
	> Hello, John


Some drawbacks:

* Does not support English strings for translation keys; i.e., provides no fallback mechanism
* Naive implementation of plurals (does not seem to handle more than two plural forms)
* Does not handle ordered parameters, must be named objects.



#### Then there's a number of tools that offer a subset of i18n support.

### [MessageFormat](https://github.com/SlexAxton/messageformat.js)
*License: [Similar to MIT](https://github.com/SlexAxton/messageformat.js/blob/master/LICENSE) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/messageformat/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/messageformat)*

This is an implementation of the ICU MessageFormat in Javascript.

This library is focused solely on handling pluralization and generalization.

	{
		"GENDER"         : "male",
		"NUM_RESULTS"    : 1,
		"NUM_CATEGORIES" : 2
	}
	> "He found 1 result in 2 categories."

	{
  		"GENDER"         : "female",
		"NUM_RESULTS"    : 1,
  		"NUM_CATEGORIES" : 2
	}
	> "She found 1 result in 2 categories."

	{
		"GENDER"         : "male",
		"NUM_RESULTS"    : 2,
  		"NUM_CATEGORIES" : 1
	}
	> "He found 2 results in 1 category."

	{
		"NUM_RESULTS"    : 2,
  		"NUM_CATEGORIES" : 2
	}
	> "They found 2 results in 2 categories."

This looks like a solid library.

### [Sprintf](https://github.com/alexei/sprintf.js)
*License: [Similar to MIT](https://github.com/alexei/sprintf.js/blob/master/LICENSE) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/sprintf/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/sprintf/)*

If we want to roll our own translation library, this is a solid implementation of sprintf.

	// Ordered parameters
	sprintf("The first 3 letters are: %s, %s and %s", ["a", "b", "c"]);
	> The first 3 letters are: a, b and c
	
	// Argument swapping
	sprintf("%2$s %3$s a %1$s", "cracker", "Polly", "wants");
	> Polly wants a cracker
	
	// Named arguments
	sprintf("Hello %(name)s", { name: 'Dolly' } );
	// Hello Dolly


## Date / Times

### Intl
*Polyfill License: [MIT](https://github.com/andyearnshaw/Intl.js/blob/master/LICENSE.txt) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/intl/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/intl/)*

[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) is a built-in API for handling a subset of localization needs, including number and date formatting and string sorting. Two other great articles about Intl are [here](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) and [here](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

	// Numbers
	var nf = new Intl.NumberFormat('en');
	nf.format(1000.23);
	> 1,000.23
	
	nf = new Intl.NumberFormat('fr');
	nf.format(1000.23);
	> 1 000,23
	
	// Dates
	var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
	var df = new Intl.DateTimeFormat('en');
	df.format(date);
	> 12/19/2012

	df = new Intl.DateTimeFormat('de');
	df.format(date);
	> 19.12.2012

Intl is currently supported on Chrome, Firefox, and IE11+. It is unsupported on Safari, but a [polyfill exists](https://github.com/andyearnshaw/Intl.js).

### Moment.js
*License: [MIT](https://github.com/nrenner/achavi/blob/master/licenses/momentjs-LICENSE) | [Code Sample](https://github.com/scottlabs/i18n-research/blob/master/momentjs/script.js) | [Live Example](https://i18n-javascript-research.herokuapp.com/momentjs/)*

Moment.js has [i18n support](http://momentjs.com/docs/#/i18n/), including date and time localization.

	moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
	> "Sunday, February 14th 2010, 3:25:50 pm"
	
	moment.locale('fr');
	moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
	> "jeudi, juillet 23 2015, 1:11:00 pm"


## Punctuation
*[Code Sample](https://github.com/scottlabs/i18n-research/blob/master/punctuation/styles.less) | [Live Example](https://i18n-javascript-research.herokuapp.com/punctuation)*

A nifty solution for [handling punctuation in CSS](http://www.smashingmagazine.com/2014/06/23/css-driven-internationalization-in-javascript/) is proposed by Maksim Chemerisuk. Using the `lang` element on the `<html>` element, in our LESS files we could do something like:

	.quote {
		&:lang(en) {
			&&::before, &&::after {
				content: '"';
			}
		}
		&:lang(fr) {
			&&::before {
		   		content: "«";
			}
			&&::after {
				content: '»';
			}
		}		
	}


# Other Resources
### Online translation services
* [Web Translate It](https://webtranslateit.com/en/docs/file_formats/)
* [Verbalize It](https://www.verbalizeit.com/)

### Other definitions
* **[CLDR](http://cldr.unicode.org/)** A standard set of locale data. Included are translations for currency, country names, patterns for formatting numbers, translations for dates, etc.
