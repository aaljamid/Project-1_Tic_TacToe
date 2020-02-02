$(document).ready(function() {
  console.log("live");

  //   let boxes = $("th");

  //   function r1t1() {
  //     //   $("img").append(" src=img/x.png");
  //     $(".r1t1").append(
  //       " <img src='img/x.png' alt='Genral Assembly' width='10px' />"
  //     );
  //     console.log("works");
  //   }

  //   $(".r1t1").click(r1t1);

  //DOM manipulation code

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
      if (boxes[i].classList.value.includes("cross")) {
        console.log(count);
      }
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
