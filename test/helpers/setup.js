require('babel-register')({ presets: ['react', 'es2015'] });
require('babel-polyfill')

// we need an instance of the dom
global.document = require('jsdom').jsdom(
  //put in some html
  "<head><meta charset='UTF-8'><title>Weathrly</title></head><body><div id='application'></div><script type='text/javascript' src='main.bundle.js'></script></body>"
)
global.window = document.defaultView
global.navigator = window.navigator
// and an instance of the window
