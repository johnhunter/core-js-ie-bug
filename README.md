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