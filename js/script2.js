$(document).ready(function() {
  console.log("Live");

  let boxes = $(".box");
  let count = 0;

  function clickEvent() {
    if (count % 2 === 0) {
      console.log("even");
      this.classList += " cross";
    } else {
      console.log("odd");
      this.classList += " circle";
    }

    this.removeEventListener("mouseleave", leaveEvent);
    this.removeEventListener("mouseover", hoverEvent);

    for (let i = 0; i < boxes.length; i++) {
      let className = $("#box-" + i).attr("class");
    }
    count++;
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
});

let winArry = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
