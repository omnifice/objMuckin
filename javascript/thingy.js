//
// thingy.js - Very base object...it's a thingy.
//
// If parent element is passed to the constructor, this.physical == jQuery object,
// otherwise, it's just the string representation of the object.
//


// Constructor
var Thingy = function(opts) {
  if (typeof opts === 'undefined') {
    throw('Thingy::opts is undefined.');
  }
  
  if (typeof opts.id === 'undefined') {
    throw('Thingy::missing one or more required options.');
  }
  
  this.id = opts.id;
  this.name = opts.name || '';
  this.cssClass = 'thingy';
  this.iconCool = 'icon-cool.png';
  this.iconNormal = 'icon-blank.png';
  this.iconPath = 'images';
  this.iconSushi = 'icon-sushi.png';
  this.parent = '';
  this.physical = '';

  // After icon definitions!!!
  this.emotions = { normal: this.iconNormal, cool: this.iconCool, sushi: this.iconSushi };

  // TODO: check if opts.parent is a string???
  if (typeof opts.parent !== 'undefined' && $(opts.parent).length == 1) {
    this.parent = opts.parent;
    this.attach(this.parent);
  }
  else if ($(opts.parent).length > 1) {
    console.log('Thingy::The specified parent is more than one element. Cannot attach to it.');
  }
  else {
    console.log('Thingy::The specified parent does not exist. Not attaching.');
  }
  
  this.build();
};


// Definition
Thingy.prototype = {
  
  // Build it.
  build: function() {
    var el = '<div data-id="' + this.id + '" class="' + this.cssClass + '">'
           + '<img src="' + this.imgPath(this.iconNormal) + '">'
           + '</div>';
    
    if (this.parent != '') {
      this.physical = $(el);
      $(this.parent).append(el);
    }
    else {
      this.physical = el;
    }
  },
  
  show: function() {
    if (typeof this.physical === 'string') {
      console.log('Thingy::show:Cannot show this thingy...not a DOM element. Did you pass a parent to the constructor?');
      return false;
    }
    else {
      $(this.physical).show();
    }
  },
  
  hide: function() {
    if (typeof this.physical === 'string') {
      console.log('Thingy::hide:Cannot hide this thingy...not a DOM element. Did you pass a parent to the constructor?');
      return false;
    }
    else {
      $(this.physical).hide();
    }
  },
  
  emote: function(type) {
    var mod;
    
    if (typeof this.emotions[type] === 'undefined') {
      console.log('Thingy::emote::Invalid emote type: ' + type);
      return false;
    }
    else {
      if (typeof this.physical === 'string') {
        mod = $(this.physical);
      }
      else {
        mod = $(this.parent).find('div[data-id="' + this.id + '"]');
      }
      
      $(mod).find('img').attr('src', this.imgPath(this.emotions[type]));
      
      if (typeof this.physical === 'string') {
        this.physical = mod.get(0).outerHTML; // Return to string.
      }
      else {
        this.physical = mod;
      }
    }
  },
  
  attach: function(parent) { // TODO: need to make sure the parent is a string???
    if (this.parent == '') {
      if ($(parent).length == 1) {
        $(parent).append(this.physical);
        this.parent = parent;
      }
      else {
        console.log('Thingy::attach::Either zero elements, or more than one element exists for specified parent. Cannot attach.');
      }
    }
    else {
      console.log('Thingy::attach::Cannot attach to ' + parent + '. Already attached to: ' + this.parent);
    }
  },
  
  imgPath: function(img) {
    return this.iconPath + '/' + img;
  }
};


