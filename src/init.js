$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    //-------------------- Adding event handlers to dancers //

    dancer.$node.mouseenter(function() {
      // mouseover behavior
      $(this).addClass("greenDancer");
    });
    dancer.$node.mouseleave(function() {
      // mouseover behavior
      $(this).removeClass("greenDancer");
    });
    //--------------------

  });
  $('.lineUpButton').click(linup);
  $('.danceAgain').click(dance);
  // $('.addBearDancer').click(dance);
  // $('.addBullDancer').click(dance);
  
});

var linup = function(){
  var initTop = 10; 
  var styleSet = {
    top : initTop,
    left : 50  
  };
  for(var i = 0; i < $('.dancer').length; i++) {
    $($('.dancer')[i]).css(styleSet);
    styleSet['top'] += 50;
  }
};

var dance = function() {

  for(var i = 0; i < $('.dancer').length; i++) {
    var styleSet = {
      top : $('body').height() * Math.random(),
      left : $('body').width() * Math.random() 
    };
    $($('.dancer')[i]).css(styleSet);
  }
};





