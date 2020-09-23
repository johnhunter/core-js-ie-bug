# IE11, core-js@3.6.4, String#split() unexpected behavior
Repro steps for (https://github.com/zloirock/core-js/issues/751)
IE version: 11.657.18362.0

## Description
String#split() returns incorrect output in IE11 if imported and loaded twice on a page

### Expected
```js
"test".split(/^|\s+/); //["test"]
```

### Actual
```js
"test".split(/^|\s+/); //["t","e","s","t"]
```

## How to reproduce
1. Clone this repository
2. Install packages (ex. `yarn install`)
3. Build (ex. `yarn build`)
4. Open `index.html` in IE


## Resolution

Using the core-js regexp polyfills appears to resolve the problem.
See https://github.com/zloirock/core-js/issues/741#issuecomment-570677904

1. Open `src/polyfills.js`
2. Add the line `import 'core-js/stable/regexp';`
3. Rebuild and reload `index.html` in IE