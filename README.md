# marky-deep-links

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/marky-deep-links.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/marky-deep-links
[travis-image]: https://img.shields.io/travis/Flet/marky-deep-links.svg?style=flat-square
[travis-url]: https://travis-ci.org/Flet/marky-deep-links

Make heading links work in `marky-markdown` generated HTML

Inspired by: [npm/newww deep-links.js](https://github.com/npm/newww/blob/ebbe8a3344341b08026d03c67cfe53e541e88283/assets/scripts/deep-links.js)

In `marky-markdown` generated heading DOM ids are prefixed with `user-content-` for security reasons. This package checks whether someone has clicked on an auto-generated id, and updates the URL fragment remove the prefix, and scrolls the page to the header. This also works at startup if someone links to an anchor from an external site.

This package works best with browserify!

## Install
```
npm install --save marky-deep-links
```

## Usage

```js
var markyDeepLinks = require('marky-deep-links')

markyDeepLinks()

```

## Pre-built Files for Browsers
For convenience, feel free to use the browserify generated files included in this package:
- marky-deep-links-standalone-min.js (minified)
- marky-deep-links-standalone.js (unminified)

Note that these are set up to use the default `user-content-` prefix.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE)
