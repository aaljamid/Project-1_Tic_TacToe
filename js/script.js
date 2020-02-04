$(document).ready(function() {
  // Test the link with the Index.html
  console.log("live");

  // declare the variables
  let boxes = $(".box");
  let count = 0;
  let countScore1 = 0;
  let countScore2 = 0;
  let crossWin = "<h2>Cross Won!</h2>";
  let circleWin = "<h2>Circle Won!</h2>";

  // adding click event
  function clickEvent() {
    // player turn will be determin by the counter
    // cross = even numbers (0,2,4, etc..)
    if (count % 2 === 0) {
      this.classList += " cross";

      // circle = odd numbers (1,3,5, etc..)
    } else {
      this.classList += " circle";
    }

    // increse counter +1 for eavery click
    count++;
    this.removeEventListener("mouseleave", leaveEvent);
    this.removeEventListener("mouseover", hoverEvent);
    this.removeEventListener("click", clickEvent);

    // Cross win function
    // if the cross wins this is will show up
    const crossWinFunction = function() {
      // adding countScore1 to keep track of the number of wins
      countScore1++;
      $(".winner").html(crossWin);
      $(".score1").html(countScore1);

      // remove all event listeners function to stop the game if any playr wins
      stopGame();
    };

    // circal wins function
    const circleWinFunction = function() {
      // adding countScore2 to keep track of the number of wins
      countScore2++;
      $(".winner").html(circleWin);
      $(".score2").html(countScore2);
      // remove all event listeners function to stop the game if any playr wins
      stopGame();
    };

    //wins conditions for all the rows (3)

    //1
    // compare the classes' names for the first row
    // and make sure the boxes' classes are not named 'box'
    if (
      boxes[0].classList.value == boxes[1].classList.value &&
      boxes[1].classList.value == boxes[2].classList.value &&
      boxes[0].classList.value !== "box" &&
      boxes[1].classList.value !== "box" &&
      boxes[2].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[0].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the circle wins
      if (boxes[0].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    // 2
    // compare the classes' names for the 2nd row
    // and make sure the boxes' classes are not named 'box'
    else if (
      boxes[3].classList.value == boxes[4].classList.value &&
      boxes[4].classList.value == boxes[5].classList.value &&
      boxes[3].classList.value !== "box" &&
      boxes[4].classList.value !== "box" &&
      boxes[5].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[3].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the circle wins
      if (boxes[3].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    //3
    // compare the classes' names for the 3rd row
    // and make sure the boxes' classes are not named 'box'
    else if (
      boxes[6].classList.value == boxes[7].classList.value &&
      boxes[7].classList.value == boxes[8].classList.value &&
      boxes[6].classList.value !== "box" &&
      boxes[7].classList.value !== "box" &&
      boxes[8].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[6].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the circle wins
      if (boxes[6].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    //wins conditions for all the column (3)

    // 1
    // compare the classes' names for the 1st column
    // and make sure the boxes' classes are not named 'box'
    else if (
      boxes[0].classList.value == boxes[3].classList.value &&
      boxes[3].classList.value == boxes[6].classList.value &&
      boxes[0].classList.value !== "box" &&
      boxes[3].classList.value !== "box" &&
      boxes[6].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[0].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the circle wins
      if (boxes[0].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }
    // 2
    // compare the classes' names for the 2nd column
    // and make sure the boxes' classes are not named 'box'
    else if (
      boxes[1].classList.value == boxes[4].classList.value &&
      boxes[4].classList.value == boxes[7].classList.value &&
      boxes[1].classList.value !== "box" &&
      boxes[4].classList.value !== "box" &&
      boxes[7].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[1].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the circle wins
      if (boxes[1].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    //3
    // compare the classes' names for the 3rd column
    // and make sure the boxes' classes are not named 'box'
    else if (
      boxes[2].classList.value == boxes[5].classList.value &&
      boxes[5].classList.value == boxes[8].classList.value &&
      boxes[2].classList.value !== "box" &&
      boxes[5].classList.value !== "box" &&
      boxes[8].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[2].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the circle wins
      if (boxes[2].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    //wins conditions for all the corners (2)

    //1
    else if (
      boxes[0].classList.value == boxes[4].classList.value &&
      boxes[4].classList.value == boxes[8].classList.value &&
      boxes[0].classList.value !== "box" &&
      boxes[4].classList.value !== "box" &&
      boxes[8].classList.value !== "box"
    ) {
      // adding condition if the cross wins
      if (boxes[0].classList.value.includes("cross")) {
        crossWinFunction();
      }
      // adding condition if the cross wins
      if (boxes[0].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    //2
    else if (
      boxes[2].classList.value == boxes[4].classList.value &&
      boxes[4].classList.value == boxes[6].classList.value &&
      boxes[2].classList.value != "box" &&
      boxes[4].classList.value != "box" &&
      boxes[6].classList.value != "box"
    ) {
      if (boxes[2].classList.value.includes("cross")) {
        crossWinFunction();
      }
      if (boxes[2].classList.value.includes("circle")) {
        circleWinFunction();
      }
    }

    /// No one wins
    else if (count >= 9) {
      console.log("Tie");
      $(".winner").html(" <h2>Tie</h2>");
      stopGame();
    }
  }

  function hoverEvent() {
    this.classList += " black";
  }

  function leaveEvent() {
    this.classList = "box";
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", clickEvent);
    boxes[i].addEventListener("mouseover", hoverEvent);
    boxes[i].addEventListener("mouseleave", leaveEvent);
  }

  const stopGame = function() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener("mouseleave", leaveEvent);
      boxes[i].removeEventListener("mouseover", hoverEvent);
      boxes[i].removeEventListener("click", clickEvent);
    }
  };

  $(".playAgain").click(function() {
    count = 0;
    console.log("button test");
    $(".box").attr("class", "box");
    $(".winner").html("<h2></h2>");

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", clickEvent);
      boxes[i].addEventListener("mouseover", hoverEvent);
      boxes[i].addEventListener("mouseleave", leaveEvent);
    }
  });
});
