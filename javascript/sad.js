//
// sad.js
//
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
//

var Sad = function(opts) {
  
  // TODO: Error checking of opts.
  
  if (typeof opts.defaultIcon === 'undefined') {
    opts.defaultIcon = 'icon-sad.png';
  }
  
  // Call parent constructor.
  Thingy.call(this, opts);
  
  // Initialize Sad properties.
  this.id = opts.id;

  this.iconSad = 'icon-sad.png';
  this.emotions.sad = this.iconSad;
  this.iconDefault = opts.defaultIcon;

};


// Create a Sad.prototype object that inherits from Thingy.prototype.
Sad.prototype = Object.create(Thingy.prototype);

// Set the "constructor" property to refer to Sad.
Sad.prototype.constructor = Sad;

// Create a 'super' (i.e. parent) reference.
Sad.prototype.parent = Thingy.prototype;

// New method.
Sad.prototype.sayHi = function() {
  alert('HI!!!');
};

