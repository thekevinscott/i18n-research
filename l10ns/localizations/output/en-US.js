;(function() {
  var timezones = {"America/Los_Angeles":{"types":["d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","s","s","d","d","d"],"untils":[9971999000,9972000000,25693199000,25693200000,41421599000,41421600000,57747599000,57747600000,73475999000,73476000000,89197199000,89197200000,104925599000,104925600000,120646799000,120646800000,126698399000,126698400000,152096399000,152096400000,162381599000,162381600000,183545999000,183546000000,199274399000,199274400000,215600399000,215600400000,230723999000,230724000000,247049999000,247050000000,262778399000,262778400000,278499599000,278499600000,294227999000,294228000000,309949199000,309949200000,325677599000,325677600000,341398799000,341398800000,357127199000,357127200000,372848399000,372848400000,388576799000,388576800000,404902799000,404902800000,420026399000,420026400000,436352399000,436352400000,452080799000,452080800000,467801999000,467802000000,483530399000,483530400000,499251599000,499251600000,514979999000,514980000000,530701199000,530701200000,544615199000,544615200000,562150799000,562150800000,576064799000,576064800000,594205199000,594205200000,607514399000,607514400000,625654799000,625654800000,638963999000,638964000000,657104399000,657104400000,671018399000,671018400000,688553999000,688554000000,702467999000,702468000000,720003599000,720003600000,733917599000,733917600000,752057999000,752058000000,765367199000,765367200000,783507599000,783507600000,796816799000,796816800000,814957199000,814957200000,828871199000,828871200000,846406799000,846406800000,860320799000,860320800000,877856399000,877856400000,891770399000,891770400000,909305999000,909306000000,923219999000,923220000000,941360399000,941360400000,954669599000,954669600000,972809999000,972810000000,986119199000,986119200000,1004259599000,1004259600000,1018173599000,1018173600000,1035709199000,1035709200000,1049623199000,1049623200000,1067158799000,1067158800000,1081072799000,1081072800000,1099213199000,1099213200000,1112522399000,1112522400000,1130662799000,1130662800000,1143971999000,1143972000000,1162112399000,1162112400000,1173607199000,1173607200000,1194166799000,1194166800000,1205056799000,1205056800000,1225616399000,1225616400000,1236506399000,1236506400000,1257065999000,1257066000000,1268560799000,1268560800000,1289120399000,1289120400000,1300010399000,1300010400000,1320569999000,1320570000000,1331459999000,1331460000000,1352019599000,1352019600000,1362909599000,1362909600000,1383469199000,1383469200000,1394359199000,1394359200000,1414918799000,1414918800000,1425808799000,1425808800000,1446368399000,1446368400000,1457863199000,1457863200000,1478422799000,1478422800000,1489312799000,1489312800000,1509872399000,1509872400000,1520762399000,1520762400000,1541321999000,1541322000000,1552211999000,1552212000000,1572771599000,1572771600000,1583661599000,1583661600000,1604221199000,1604221200000,1615715999000,1615716000000,1636275599000,1636275600000,1647165599000,1647165600000,1667725199000,1667725200000,1678615199000,1678615200000,1699174799000,1699174800000,1710064799000,1710064800000,1730624399000,1730624400000,1741514399000,1741514400000,1762073999000,1762074000000,1772963999000,1772964000000,1793523599000,1793523600000,1805018399000,1805018400000,1825577999000,1825578000000,1836467999000,1836468000000,1857027599000,1857027600000,1867917599000,1867917600000,1888477199000,1888477200000,1899367199000,1899367200000,1919926799000,1919926800000,1930816799000,1930816800000,1951376399000,1951376400000,1962871199000,1962871200000,1983430799000,1983430800000,1994320799000,1994320800000,2014880399000,2014880400000,2025770399000,2025770400000,2046329999000,2046330000000,2057219999000,2057220000000,2077779599000,2077779600000,2088669599000,2088669600000,2109229199000,2109229200000,2120119199000,2120119200000,2140678799000,2140678800000,2147397247000,2147483647000],"offsets":[480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,420,420,480,480,480]}};

  function getTimezoneOffset(timezoneOffset, options) {
    options = options || {};
    options.hours = typeof options.hours !== 'undefined' ? options.hours : true;
    options.zeroPaddingHours = typeof options.zeroPaddingHours !== 'undefined' ? options.zeroPaddingHours : true;
    options.minutes = typeof options.minutes !== 'undefined' ? options.minutes : true;
    options.colon = typeof options.colon !== 'undefined' ? options.colon : true;
    options.zulu = typeof options.zulu !== 'undefined' ? options.zulu : false;

    var offsetFloatingHours = timezoneOffset / 60;
    var offsetHours;
    var offsetMinutes;

    if(timezoneOffset >= 0) {
      offsetHours = Math.floor(offsetFloatingHours);
      offsetMinutes = ((offsetFloatingHours % 1) * 60).toFixed(0);
    }
    else {
      offsetHours = Math.ceil(offsetFloatingHours);
      offsetMinutes = - ((offsetFloatingHours % 1) * 60).toFixed(0);
    }
    if(offsetMinutes < 10) {
      offsetMinutes = '0' + offsetMinutes;
    }

    if(options.zulu && offsetHours === 0) {
      return 'Z';
    }

    var result = '';
    if(options.zeroPaddingHours) {
      if(offsetHours > -10 && offsetHours < 0) {
        offsetHours = (offsetHours + '').replace('-', '-0');
      }
      else if(offsetHours >= 0 && offsetHours < 10) {
        offsetHours = '0' + offsetHours;
      }
    }
    if(options.hours) {
      if((offsetHours + '').charAt(0) !== '-') {
        offsetHours = '+' + offsetHours;
      }
      result += offsetHours;
    }
    if(options.colon) {
      result += ':';
    }
    if(options.minutes) {
      result += offsetMinutes;
    }

    return result;
  }

  function getLongLocalizedGMT(GMTFormat, timezoneOffset) {
    return GMTFormat.replace('{0}', getTimezoneOffset(timezoneOffset));
  }

  function roundTo(number, to) {
    return Math.round(number / to) * to;
  }

  function toSignficantDigits(number, minimumSignificantDigits, maximumSignificantDigits) {
    var multiple = Math.pow(10, maximumSignificantDigits - Math.floor(Math.log(number) / Math.LN10) - 1);
    number = Math.round(number * multiple) / multiple + '';
    var difference = maximumSignificantDigits - minimumSignificantDigits;
    if(difference > 0 && /\./.test(difference)) {
      number = number.replace(new RegExp('0{1,' + difference + '}$'), '');
    }
    var subtract = 0;
    if(/^0\./.test(number)) {
      subtract = 2;
    }
    else if(/\./.test(number)) {
      subtract = 1;
    }
    while(number.length - subtract < minimumSignificantDigits) {
      number += '0';
    }

    return number;
  }

  function toExponentDigits(number, it) {
    var minimumMantissaIntegerDigits = 1
      , maximumMantissaIntegerDigits = Infinity
      , exponentGrouping = 1
      , minimumMantissaSignificantDigits
      , maximumMantissaSignificantDigits
      , exponentNumber = 0;

    if(it.type === 'floating') {
      if(it.maximumIntegerDigits === it.minimumIntegerDigits) {
        minimumMantissaIntegerDigits = maximumMantissaIntegerDigits = it.minimumIntegerDigits;
      }
      else {
        maximumMantissaIntegerDigits = it.maximumIntegerDigits;
        exponentGrouping = it.maximumIntegerDigits;
      }

      minimumMantissaSignificantDigits = 1;
      maximumMantissaSignificantDigits = it.minimumIntegerDigits + it.maximumFractionDigits;
    }
    else {
      minimumMantissaIntegerDigits = maximumMantissaIntegerDigits = 1;
      minimumMantissaSignificantDigits = it.minimumSignificantDigits;
      maximumMantissaSignificantDigits = it.maximumSignificantDigits
    }

    if(number >= 1) {
      var divider = Math.pow(10, exponentGrouping)
        , integerLength = (number + '').replace(/\.\d+/, '').length;
      while((integerLength < minimumMantissaIntegerDigits || integerLength > maximumMantissaIntegerDigits) &&
            (exponentNumber + '').length === it.exponent.digits) {
        number = number / divider;
        exponentNumber += exponentGrouping;
        integerLength = (number + '').replace(/\.\d+/, '').length;
      }
      if((exponentNumber + '').length !== it.exponent.digits) {
        exponentNumber--;
        number = number * divider;
      }
    }
    else {
      var multiplier = Math.pow(10, exponentGrouping)
        , integerLength = (number + '').replace(/^0\.\d+/, '').replace(/\.\d+/, '').length;
      while((integerLength < minimumMantissaIntegerDigits || integerLength > maximumMantissaIntegerDigits) &&
            (Math.abs(exponentNumber) + '').length === it.exponent.digits) {
        number = number * multiplier;
        exponentNumber -= exponentGrouping;
        integerLength = (number + '').replace(/^0\.\d+/, '').replace(/\.\d+/, '').length;
      }
      if((Math.abs(exponentNumber) + '').length !== it.exponent.digits) {
        exponentNumber++;
        number = number / multiplier;
      }
    }

    var mantissa = toSignficantDigits(number, minimumMantissaSignificantDigits, maximumMantissaSignificantDigits)
      , mantissa = mantissa.split('.')
      , exponent = it.symbols.exponential;
    if(it.exponent.plusSign && exponentNumber > 0) {
      exponent += it.symbols.plusSign;
    }
    exponent += exponentNumber;

    if(it.type === 'floating') {
      if(it.minimumFractionDigits > 0) {
        if(typeof mantissa[1] === 'undefined') {
          mantissa[1] = '';
        }
        while(mantissa[1].length < it.minimumFractionDigits) {
          mantissa[1] += '0';
        }
      }
    }

    return {
      integer: mantissa[0],
      fraction: mantissa[1],
      exponent: exponent
    };
  };

  function formatNumber(it) {
    if(typeof it.number !== 'number') {
      return it.symbols.nan;
    }
    if(it.number === Infinity) {
      return it.symbols.plusSign + it.symbols.infinity;
    }
    if(it.number === -Infinity) {
      return it.symbols.minusSign + it.symbols.infinity;
    }

    var number = Math.abs(it.number)
      , prefix = it.prefix
      , suffix = it.suffix
      , currencySymbol =
        '([\\u0024\\u00A2-\\u00A5\\u058F\\u060B\\u09F2\\u09F3\\u09FB\\u0AF1\\\
           \\u0BF9\\u0E3F\\u17DB\\u20A0-\\u20BD\\uA838\\uFDFC\\uFE69\\uFF04\\\
           \\uFFE0\\uFFE1\\uFFE5\\uFFE6])'
      , startsWithCurrencySymbolSyntax = new RegExp('^' + currencySymbol)
      , endsWithCurrencySymbolSyntax = new RegExp(currencySymbol + '$');

    if(it.percentage) {
      prefix = prefix.replace('%', it.symbols.percentSign);
      suffix = suffix.replace('%', it.symbols.percentSign);
      number = number * 100;
    }
    else if(it.permille) {
      prefix = prefix.replace('‰', it.symbols.perMille);
      suffix = suffix.replace('‰', it.symbols.perMille);
      number = number * 1000;
    }

    if(it.exponent) {
      var exponent = toExponentDigits(number, it);
      integerDigits = exponent.integer;
      fractionDigits = exponent.fraction || '';
      exponent = exponent.exponent;
    }
    else if(it.type === 'significant') {
      number = toSignficantDigits(number, it.minimumSignificantDigits, it.maximumSignificantDigits);
    }
    else {
      number = roundTo(number, it.roundTo);
    }

    if(!it.exponent) {
      var numberSplit = (number + '').split('.')
        , integerDigits = numberSplit[0]
        , integerDigitsLength = integerDigits.length
        , fractionDigits = numberSplit[1] || ''
        , fractionDigitsLength = fractionDigits.length;

      if(it.type === 'floating' && integerDigitsLength < it.minimumIntegerDigits) {
        var missingIntegerDigits = it.minimumIntegerDigits - integerDigitsLength;
        for(var index = 0; index < missingIntegerDigits; index++) {
          integerDigits = '0' + integerDigits;
        }
        integerDigitsLength = it.minimumIntegerDigits;
      }
      if(it.groupSize) {
        var newIntegerDigits = '';
        for(var index = integerDigitsLength - 1; index >= 0; index--) {
          var primaryIndex = integerDigitsLength - it.groupSize.primary - 1;
          if(index === primaryIndex) {
            newIntegerDigits += it.symbols.group;
          }
          else if(index < primaryIndex && (primaryIndex - index) % it.groupSize.secondary === 0) {
            newIntegerDigits += it.symbols.group;
          }

          newIntegerDigits += integerDigits.charAt(index);
        }
        integerDigits = newIntegerDigits.split('').reverse().join('');
      }

      if(it.type === 'floating') {
        if(fractionDigitsLength > it.maximumFractionDigits) {
          fractionDigits = fractionDigits.substring(0, it.maximumFractionDigits);
        }
        else if(fractionDigitsLength < it.minimumFractionDigits) {
          var missingFractionDigits = it.minimumFractionDigits - fractionDigitsLength;
          for(var index = 0; index < missingFractionDigits; index++) {
            fractionDigits += '0';
          }
        }

        if(fractionDigits.length > it.minimumFractionDigits) {
          fractionDigits = fractionDigits.replace(/[0]+$/, '');
        }
      }
    }

    if(it.currency) {
      if(!endsWithCurrencySymbolSyntax.test(it.currency.symbol)) {
        prefix = prefix + ' ';
      }
      if(!startsWithCurrencySymbolSyntax.test(it.currency.symbol)) {
        suffix = ' ' + suffix;
      }
      prefix = prefix.replace(/¤+/, it.currency.symbol);
      suffix = suffix.replace(/¤+/, it.currency.symbol);
    }

    var result = '';
    result += prefix;
    result += integerDigits;
    if(fractionDigits.length > 0) {
      result += it.symbols.decimal + fractionDigits;
    }
    if(exponent) {
      result += exponent;
    }
    result += suffix;

    if(it.paddingCharacter) {
      var resultLength = result.length - 2;
      result = result.replace(new RegExp('\\*\\' + it.paddingCharacter), function(match) {
        var replacement = '';
        while(resultLength < it.patternLength) {
          replacement += it.paddingCharacter;
          resultLength++;
        }

        return replacement;
      });
    }

    return result;
  }

  var localizations = {
    'en-US': {
      '__getPluralKeyword': function(cardinal) {
        var cardinal = cardinal + ''
          , n = cardinal
          , i = parseInt(cardinal, 10)
          , v = 0
          , w = 0
          , f = 0
          , t = 0;

        var hasFractionalDigitsSyntax = /\.(\d+)/;

        if(hasFractionalDigitsSyntax.test(cardinal)) {
          f = hasFractionalDigitsSyntax.exec(cardinal)[1];
          v = f.length;
          t = cardinal.replace(/0+$/, '');
          t = hasFractionalDigitsSyntax.exec(t)[1];
          w = t.length;
        }
        if(i === 1 && v === 0) {
          return 'one';
        }
        return 'other';
      },
      '__getOrdinalKeyword': function(cardinal) {
        var cardinal = cardinal + ''
          , n = cardinal
          , i = parseInt(cardinal, 10)
          , v = 0
          , w = 0
          , f = 0
          , t = 0;

        var hasFractionalDigitsSyntax = /\.(\d+)/;

        if(hasFractionalDigitsSyntax.test(cardinal)) {
          f = hasFractionalDigitsSyntax.exec(cardinal)[1];
          v = f.length;
          t = cardinal.replace(/0+$/, '');
          t = hasFractionalDigitsSyntax.exec(t)[1];
          w = t.length;
        }
        if(n % 10 === 1 && n % 100 !== 11) {
          return 'one';
        }
        else if(n % 10 === 2 && n % 100 !== 12) {
          return 'two';
        }
        else if(n % 10 === 3 && n % 100 !== 13) {
          return 'few';
        }
        return 'other';
      },
      '__numberSymbols': {
        'latn': {
          'decimal': '.',
          'group': ',',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '×',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        }
      },
      '__currencies': {
        'USD': {
          'name': 'US Dollar',
          'text': {
            'local': {
              'one': 'dollar',
              'other': 'dollars'
            },
            'global': {
              'one': 'US dollar',
              'other': 'US dollars'
            }
          },
          'symbol': {
            'local': '$',
            'global': 'US$',
            'reverseGlobal': '$US'
          }
        }
      },
      '__currencyUnitPattern': {
        'one': '{0} {1}',
        'other': '{0} {1}'
      },
      '__timezones': {
        'America/Los_Angeles': {
          'name': {
            'long': {
              'standard': 'Pacific Standard Time',
              'daylight': 'Pacific Daylight Time',
              'generic': 'Pacific Time'
            },
            'short': {
              'standard': 'PST',
              'daylight': 'PDT',
              'generic': 'PT'
            }
          },
          'hasCity': true,
          'city': 'Los Angeles',
          'regionFormat': '{0} Time',
          'GMTFormat': 'GMT{0}'
        }
      },
      'SIGN_UP->FIRSTNAME': function(it) {
        var string = '';
        string += 'Firstname';
        return string;
      },
      'SIGN_UP->LASTNAME': function(it) {
        var string = '';

        return string;
      }
    }
  };

  function l(key) {
    if(!(key in localizations['en-US'])) {
      throw new TypeError('Key `' + key + '` not in en-US localizations');
    }
    return localizations['en-US'][key].call(localizations['en-US'], arguments[1]);
  }

  if(typeof require === "function" && typeof exports === 'object' && typeof module === 'object') {
    module.exports = l;
  }
  else if (typeof define === "function" && define.amd) {
    define(function() {
      return l;
    });
  }
  else {
    window.l = l;
  }
})();
