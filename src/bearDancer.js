var bearDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dancer1');
  this.$node.addClass('bearDancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  // this.timeBetweenSteps = timeBetweenSteps;
  
  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
  // this.step.call(this);
};

// let oldStep = this.step;

bearDancer.prototype = Object.create(makeDancer.prototype);
bearDancer.prototype.constructor = bearDancer;

bearDancer.prototype.step = function () {
  // console.log(this);
  makeDancer.prototype.step.call(this);
  // debugger;
  // oldStep();
  this.$node.toggle();
};