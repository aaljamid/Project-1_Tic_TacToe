$(document).ready(function() {
  // Test the link with the Index.html
  console.log("live");

  // declare the variables
  let boxes = $(".box");
  let count = 0;

  // adding click event
  function clickEvent() {
    if (count % 2 === 0) {
      this.classList += " cross";
    } else {
      this.classList += " circle";
    }
    count++;
    this.removeEventListener("mouseleave", leaveEvent);
    this.removeEventListener("mouseover", hoverEvent);
    this.removeEventListener("click", clickEvent);

    //wins conditions for all the rows (3)

    //1
    if (
      boxes[0].classList.value == boxes[1].classList.value &&
      boxes[1].classList.value == boxes[2].classList.value &&
      boxes[0].classList.value !== "box" &&
      boxes[1].classList.value !== "box" &&
      boxes[2].classList.value !== "box"
    ) {
      if (boxes[0].classList.value.includes("cross")) {
        console.log("cross won 1");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[0].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
      }
    }

    // 2
    else if (
      boxes[3].classList.value == boxes[4].classList.value &&
      boxes[4].classList.value == boxes[5].classList.value &&
      boxes[3].classList.value !== "box" &&
      boxes[4].classList.value !== "box" &&
      boxes[5].classList.value !== "box"
    ) {
      if (boxes[3].classList.value.includes("cross")) {
        console.log("cross won 1");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[3].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
      }
    }

    //3
    else if (
      boxes[6].classList.value == boxes[7].classList.value &&
      boxes[7].classList.value == boxes[8].classList.value &&
      boxes[6].classList.value !== "box" &&
      boxes[7].classList.value !== "box" &&
      boxes[8].classList.value !== "box"
    ) {
      if (boxes[6].classList.value.includes("cross")) {
        console.log("cross won ");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[6].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
      }
    }

    //wins conditions for all the column (3)

    // 1
    else if (
      boxes[0].classList.value == boxes[3].classList.value &&
      boxes[3].classList.value == boxes[6].classList.value &&
      boxes[0].classList.value !== "box" &&
      boxes[3].classList.value !== "box" &&
      boxes[6].classList.value !== "box"
    ) {
      if (boxes[0].classList.value.includes("cross")) {
        console.log("cross won ");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[0].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
      }
    }
    // 2
    else if (
      boxes[1].classList.value == boxes[4].classList.value &&
      boxes[4].classList.value == boxes[7].classList.value &&
      boxes[1].classList.value !== "box" &&
      boxes[4].classList.value !== "box" &&
      boxes[7].classList.value !== "box"
    ) {
      if (boxes[1].classList.value.includes("cross")) {
        console.log("cross won 1");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[1].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
      }
    }

    //3
    else if (
      boxes[2].classList.value == boxes[5].classList.value &&
      boxes[5].classList.value == boxes[8].classList.value &&
      boxes[2].classList.value !== "box" &&
      boxes[5].classList.value !== "box" &&
      boxes[8].classList.value !== "box"
    ) {
      if (boxes[2].classList.value.includes("cross")) {
        console.log("cross won 1");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[2].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
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
      if (boxes[0].classList.value.includes("cross")) {
        console.log("cross won 1");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[0].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
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
        console.log("cross won 1");
        $(".winner").html(" <h2>cross won</h2>");
        stopGame();
      }
      if (boxes[2].classList.value.includes("circle")) {
        console.log("circle won");
        $(".winner").html(" <h2>circle won</h2>");
        stopGame();
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
    // boxes[i].addEventListener("mouseover", hoverEvent);
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
    location.reload(true);
  });
});
