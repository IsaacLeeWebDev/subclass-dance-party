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
    let dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    let dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    let dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    //-------------------- Adding event handlers to dancers //
    dancer.$node.click(function() {
      pythagoreanTheorum(this);
    });
    dancer.$node.mouseenter(function() {
      // mouseover behavior
      $(this).addClass('greenDancer');
    });
    dancer.$node.mouseleave(function() {
      // mouseover behavior
      $(this).removeClass('greenDancer');
    });
    //--------------------

  });
  $('.lineUpButton').click(linup);
  $('.danceAgain').click(dance);
  // $('.addBearDancer').click(dance);
  // $('.addBullDancer').click(dance);
  
});

const linup = function() {
  let initTop = 10; 
  let styleSet = {
    top: initTop,
    left: 50  
  };
  for (let i = 0; i < $('.dancer').length; i++) {
    $($('.dancer')[i]).css(styleSet);
    styleSet['top'] += 50;
  }
};

const dance = function() {

  for (let i = 0; i < $('.dancer').length; i++) {
    let styleSet = {
      top: $('body').height() * Math.random(),
      left: $('body').width() * Math.random() 
    };
    $($('.dancer')[i]).css(styleSet);
  }
};

const pythagoreanTheorum = function(targetDancer) {
  
  let D = []; 
  
  let targetTopLoc = Math.pow(parseInt($(targetDancer).css('top').slice(0, $(targetDancer).css('top').length - 2)), 2);
  let targetLeftLoc = Math.pow(parseInt($(targetDancer).css('left').slice(0, $(targetDancer).css('left').length - 2)), 2);
  let distanceTarget = targetTopLoc + targetLeftLoc;

  for (let i = 0; i < $('.dancer').length; i++) {
    let topLoc = Math.pow(parseInt($($('.dancer')[i]).css('top').slice(0, $($('.dancer')[i]).css('top').length - 2)), 2);
    let leftLoc = Math.pow(parseInt($($('.dancer')[i]).css('left').slice(0, $($('.dancer')[i]).css('left').length - 2)), 2);
    let distance = topLoc + leftLoc;
    
    if (distance !== distanceTarget) {
      D.push([Math.abs(distance - distanceTarget), $($('.dancer')[i])]);  
    }
  }

  D.sort(compareDistances);
  
  /* 

    1. store in a variable, the five closest neighbors

    2.  define an object which stores css properties and values, whose property names are top and left
        and whose values are variables that will change with respect to either their previous position
        or the position of the targetDancer
      
      2.a position the five closest neighbors in a circle around the targetDancer
        2.a.i. position the closest neighbor at 12 o'clock
        2.a.ii position the next neighbor at four o'clock and so on.
        (Note: we will use the function of a circle to determine the position of each neighbor around the targetDancer
        the radius of the circle will be 400px)

      2.b the neighbors will walk around the center of the circle

  */

  let sixClosestNeighbors = D.slice(0, 6);
  let sixClosestNeighborsOriginalLocations = [];
  for (let i = 0; i < sixClosestNeighbors.length; i++) {
    sixClosestNeighborsOriginalLocations.push([sixClosestNeighbors[i][1].css('top').slice(0, sixClosestNeighbors[i][1].css('top').length - 2), sixClosestNeighbors[i][1].css('left').slice(0, sixClosestNeighbors[i][1].css('left').length - 2), sixClosestNeighbors[i][1]]);
    // [top, left, jQuery Object];
  }
  
  let radius = 100;

  let cssSettings = {
    top: undefined,
    left: undefined
  };
  

  for (let i = 0; i < 1; i++) {
  // 1
    cssSettings['top'] = parseInt($(targetDancer).css('top').slice(0, $(targetDancer).css('top').length - 2)) + radius;
    cssSettings['left'] = parseInt($(targetDancer).css('left').slice(0, $(targetDancer).css('left').length - 2));
    console.log(cssSettings);
    sixClosestNeighbors[i % 6][1].css(cssSettings);

    //2 
    cssSettings['top'] = cssSettings['top'] - radius * 0.6;
    cssSettings['left'] = cssSettings['left'] - radius * 0.8;
    console.log(cssSettings);
    sixClosestNeighbors[(i + 1) % 6][1].css(cssSettings);

    //3
    cssSettings['top'] = cssSettings['top'] - radius * 0.8;
    console.log(cssSettings);
    sixClosestNeighbors[(i + 2) % 6][1].css(cssSettings);

    //4
    cssSettings['left'] = cssSettings['left'] + radius * 1.6;
    console.log(cssSettings);
    sixClosestNeighbors[(i + 3) % 6][1].css(cssSettings);
 
    //5
    cssSettings['top'] = cssSettings['top'] + radius * 0.8;
    console.log(cssSettings);
    sixClosestNeighbors[(i + 4) % 6][1].css(cssSettings);

    // 6
    cssSettings['top'] = parseInt($(targetDancer).css('top').slice(0, $(targetDancer).css('top').length - 2)) - radius;
    cssSettings['left'] = parseInt($(targetDancer).css('left').slice(0, $(targetDancer).css('left').length - 2));
    console.log(cssSettings);
    sixClosestNeighbors[i + 5 % 6][1].css(cssSettings);
  }


};

const compareDistances = function(a, b) {
  return a[0] - b[0];
};




