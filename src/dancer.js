// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  var obj;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // this.thisStep = this.step;
  // this.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };
  // this.step();

  // this.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   this.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  // this.step.bind(this);
  this.step();
  // return dancer;
};

makeDancer.prototype.constructor = Object.create(makeDancer.prototype);
  
// let i = 0;
makeDancer.prototype.step = function() {
  // var thisStep = this.step;

  // for (let i = 0; i < 100; i++) {
  // let thisStep = this.step();
  // let thisStepBinding = this.step.bind(this);
  // let thisTimeStep = this.timeBetweenSteps;
  // debugger;
  // console.log(thisStepBinding, thisTimeStep);
  // if(this.thisStep === undefined) {
  //   return;
  // }
  // debugger;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // }
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

