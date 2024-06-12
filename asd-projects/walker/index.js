/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39
  };

  // Game Item Objects
  let walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(55)
    if (event.which === KEY.LEFT) {
      walker.speedX = -5

    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = -5

    }
    if (event.which === KEY.UP) {
      walker.speedY = -5

    }
    if (event.which === KEY.DOWN) {
      walker.speedY = -5

    }

  }

  function handleKeyUp() {
    if (event.which === KEY.LEFT) {
      walker.speedX = 0

    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0

    }
    if (event.which === KEY.UP) {
      walker.speedY = 0

    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 0

    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    walker.x += walker.speedX
    walker.y += walker.speedY
  }
  function redrawGameItem() { 
  $("#walker").css("top", walker.y)
  $("#walker").css("left", walker.x)
 
  }
}

function wallCollision() {
  $("#board").width()
  $("#board").height()
}
