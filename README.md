css-color-names
===============

A JSON Object of css color names mapped to their hex value

Usage
-----

``` js
var csscolors = require('css-color-names');
console.dir(csscolors);
```

yields

``` json
[
  {
    "color": "black",
    "hexCode": "#000000"
  },
  {
    "color": "dimgray",
    "hexCode": "#696969"
  },
  {
    "color": "dimgrey",
    "hexCode": "#696969"
  },
  {
    "color": "gray",
    "hexCode": "#808080"
  },
  {
    "color": "grey",
    "hexCode": "#808080"
  }
  ...
]
```

How was this list generated?
----------------------------

In the Makefile you'll see a line like this:

	./getcolors.sh | ./stringify.js > $(FILE)

The first command scrapes a site for the list,
and outputs the results separated by newlines.  The
second command creates the JSON object and outputs
it to stdout, which then gets redirected into
`css-color-names.json`


License
-------

MIT
