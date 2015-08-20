//
// thingy.js - Very base object...it's a thingy.
//
// If anchor element is passed to the constructor, this.physical == jQuery object,
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
  this.visible = opts.visible || false;
  this.cssClass = 'thingy';
  this.anchor = '';
  this.physical = '';

  this.iconCool = 'icon-cool.png';
  this.iconDefault = opts.defaultIcon || 'icon-blank.png'; 
  this.iconPath = 'images';
  this.iconSushi = 'icon-sushi.png';
  this.emotions = { defaultIcon: this.iconDefault, cool: this.iconCool, sushi: this.iconSushi };

  // TODO: check if opts.anchor is a string???
  if (typeof opts.anchor !== 'undefined' && $(opts.anchor).length == 1) {
    this.anchor = opts.anchor;
  }
  else if ($(opts.anchor).length > 1) {
    console.log('Thingy::The specified anchor is more than one element. Cannot attach to it.');
  }
  else if (typeof opts.anchor === 'undefined') {
    //
  }
  else {
    console.log('Thingy::The specified anchor does not exist. Not attaching.');
  }
  
  this.build();
};


// Definition
Thingy.prototype = {
  
  // Build it.
  build: function() {
    var display = (this.visible === true) ? '' : ' style="display: none;"';
    var el = '<div data-id="' + this.id + '" class="' + this.cssClass + '"' + display + '>'
           + '<img src="' + this.imgPath(this.iconDefault) + '">'
           + '</div>';
    
    if (this.anchor != '') {
      this.physical = $(el);
      $(this.anchor).append(el);
    }
    else {
      this.physical = el;
    }
  },
  
  show: function() {
    if (typeof this.physical === 'string') {
      console.log('Thingy::show:Cannot show this thingy...not a DOM element. Did you pass an anchor to the constructor?');
      return false;
    }
    else {
      $('[data-id="' + this.id + '"]').show();
    }
  },
  
  hide: function() {
    if (typeof this.physical === 'string') {
      console.log('Thingy::hide:Cannot hide this thingy...not a DOM element. Did you pass an anchor to the constructor?');
      return false;
    }
    else {
      $('[data-id="' + this.id + '"]').hide();
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
        mod = $(this.anchor).find('div[data-id="' + this.id + '"]');
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
  
  attach: function(anchor) { // TODO: need to make sure the anchor is a string???
    if (this.anchor == '') {
      if ($(anchor).length == 1) {
        $(anchor).append(this.physical);
        this.anchor = anchor;
        this.physical = $(this.physical);
      }
      else {
        console.log('Thingy::attach::Either zero elements, or more than one element exists for specified anchor. Cannot attach.');
      }
    }
    else {
      console.log('Thingy::attach::Cannot attach to ' + anchor + '. Already attached to: ' + this.anchor);
    }
  },
  
  imgPath: function(img) {
    return this.iconPath + '/' + img;
  }
};


