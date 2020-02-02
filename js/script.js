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

  function clickEvent() {
    let count = 0;

    this.classList += " cross";
    this.removeEventListener("mouseleave", leaveEvent);
    this.removeEventListener("mouseover", hoverEvent);

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].classList.value.includes("cross")) {
        count++;

        console.log(count);

        if (count % 2 === 0) {
          console.log("even");
        } else {
          console.log("odd");
        }
      }
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
});
