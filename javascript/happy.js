//
// happy.js
//
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
//

var Happy = function(opts) {
  
  // TODO: Error checking of opts.

  if (typeof opts.defaultIcon === 'undefined') {
    opts.defaultIcon = 'icon-happy.png';
  }
  
  // Call parent constructor.
  Thingy.call(this, opts);
  
  // Initialize Happy properties.
  this.id = opts.id;

  this.iconHappy = 'icon-happy.png';
  this.emotions.happy = this.iconHappy;
  this.iconDefault = opts.defaultIcon;

};


// Create a Happy.prototype object that inherits from Thingy.prototype.
Happy.prototype = Object.create(Thingy.prototype);

// Set the "constructor" property to refer to Happy.
Happy.prototype.constructor = Happy;

// Create a 'super' (i.e. parent) reference.
Happy.prototype.parent = Thingy.prototype;

// Override a method.
Happy.prototype.show = function() {
  console.log('Happy::overwritten show()');

  // Without 'super' reference above, would be Thingy.prototype.show.call(), which requires more knowledge of the super chain.
  this.parent.show.call(this);
};

// New method.
Happy.prototype.sayHi = function() {
  alert('HI!!!');
};


