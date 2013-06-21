## Description

eve.js - is another javascript event handler but does not use DOM.

## Usage

###Create event dispatcher

```javascript
var dispatcher = new EventDispatcher();
```

### Add event listener without arguments

```javascript
dispatcher.addListener('sayHello', function() {
  console.log('Hello');
});
```

### Add event listener with arguments

```javascript
dispatcher.addListener('sayHello', function(args) {
  console.log('Hello '+args.name);
});
```

### Dispatch event with arguments
```javascript
dispatcher.dispatch('sayHello', {"name": "Julien"});
```

## Changelog

### Version 1.0

- Initial release

## License

eve.js is freely distributable under the terms of the MIT license.

Copyright (c) 2013 Julien BREUX

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
