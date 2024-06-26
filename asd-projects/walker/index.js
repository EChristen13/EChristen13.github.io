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
    W: 87,
    A: 65,
    S: 83,
    D: 68,
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
    speedY: 0,
    id: '#walker'
  }

  let walker2 = {
    x: 200,
    y: 200,
    speedX: 0,
    speedY: 0,
    id: '#walker2'
  }

  const WALLS = {
    LEFT: 0,
    RIGHT: $('#board').width(),
    TOP: 0,
    BOTTOM: $('#board').height(),
  }


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);    // execute newFrame every 0.0166 seconds (60 Frames per second)
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
    walkerCollision();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = -5

    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5

    }
    if (event.which === KEY.UP) {
      walker.speedY = -5

    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 5

    }

    //walker 2 keys
    if (event.which === KEY.A) {
      walker2.speedX = -5

    }
    if (event.which === KEY.D) {
      walker2.speedX = 5

    }
    if (event.which === KEY.W) {
      walker2.speedY = -5

    }
    if (event.which === KEY.S) {
      walker2.speedY = 5

    }
  }

  function handleKeyUp(event) {
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

    //walker 2 keys

    if (event.which === KEY.A) {
      walker2.speedX = 0

    }
    if (event.which === KEY.D) {
      walker2.speedX = 0

    }
    if (event.which === KEY.W) {
      walker2.speedY = 0

    }
    if (event.which === KEY.S) {
      walker2.speedY = 0

    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function randomIt() {
    let randomNum = Math.random();
    if (randomNum < 0.10) {
      walker = true;
    } else {
      walker2 = true;
    }
  }

  function spawnReset() {
    walker.x = 50;
    walker.y = 50;
    walker2.x = walls.RIGHT - 100;
    walker2.y = walls.BOTTOM - 100;
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    walker.x += walker.speedX
    walker.y += walker.speedY
    walker2.x += walker2.speedX
    walker2.y += walker2.speedY
  }

  function redrawGameItem() {
    $("#walker").css("top", walker.y)
    $("#walker").css("left", walker.x)
    $("#walker2").css("top", walker2.y)
    $("#walker2").css("left", walker2.x)

  }

  function wallCollision() {
    //check if walker has gone past the right
    var walkerRight = walker.x + $("#walker").width();
    var walkerBottom = walker.y + $("#walker").height();
    var walker2Right = walker2.x + $("#walker2").width();
    var walker2Bottom = walker2.y + $("#walker2").height();

    if (walkerRight > $("#board").width()) {
      walker.x -= walker.speedX
    } else if (walker.x < 0) {
      walker.x -= walker.speedX
    }

    if (walker2Right > $("#board").width()) {
      walker2.x -= walker2.speedX
    } else if (walker2.x < 0) {
      walker2.x -= walker2.speedX
    }
    // check if walker has gone past the bottom
    if (walkerBottom > $("#board").height()) {
      walker.y -= walker.speedY
    } else if (walker.y < 0) {
      walker.y -= walker.speedY
    }

    if (walker2Bottom > $("#board").height()) {
      walker2.y -= walker2.speedY
    } else if (walker2.y < 0) {
      walker2.y -= walker2.speedY
    }
  }

  function walkerCollision() {
    var walkerLeft = walker.x
    var walkerTop = walker.y
    var walkerRight = walker.x + $("#walker").width();
    var walkerBottom = walker.y + $("#walker").height();
    var walker2Left = walker2.x
    var walker2Top = walker2.y
    var walker2Right = walker2.x + $("#walker2").width();
    var walker2Bottom = walker2.y + $("#walker2").height();

    if (walker2Right > walkerLeft &&
      walker2Left < walkerRight &&
      walker2Top < walkerBottom &&
      walker2Bottom > walkerTop) {
      return true
    }
    return false;
  }

  function tagYourIt(walker1, walker2) {
    if (walker1.x < (walker2.x + walker2.width &&
      (walker1.x + walker1.width) > walker2.x &&
      walker1.y < (walker2.y + walker2.height) &&
      (walker1.y + walker1.height) > walker2.y)) {
      if (walker1) {
     
      }
    }  
    spawnReset();
  }
}
