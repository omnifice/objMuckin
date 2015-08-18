//
// happy.js
//


var Happy = function(opts) {
  
  // TODO: Error checking of opts.
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
  // Call parent constructor.
  Thingy.call(this, {id: opts.id, parent: opts.parent});
  
  // Initialize Happy properties.
  this.id = opts.id;
  
  

};


// Create a Happy.prototype object that inherits from Thingy.prototype.
Happy.prototype = Object.create(Thingy.prototype);

// Set the "constructor" property to refer to Happy.
Happy.prototype.constructor = Happy;

// Replace a method.
Happy.prototype.show = function() {
  
};

// New method.
Happy.prototype.sayHi = function() {

};


