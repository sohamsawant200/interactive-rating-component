console.log("Welcome to Rating Component");

container = document.getElementsByClassName("container");
thankyou = document.getElementsByClassName("thankyou");
buttons = document.querySelectorAll("div.rating > button");
beforeRate = document.getElementById("beforeRate");
afterRate = document.getElementById("afterRate");
submit = document.getElementById("submit");
rate = document.getElementById("rate");

const makeAllNormal = function () {
  Array.from(buttons).forEach((element) => {
    element.style.backgroundColor = "hsl(210, 20%, 30%)";
  });
};

// After Rating
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllNormal();
    console.log("clicked");
    console.log(e.target.id);
    e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    e.target.style.color = "white";
    rate.innerText = " " + e.target.id + " ";
  });
});

// After Submit
submit.addEventListener("click", () => {
  beforeRate.classList.add("none");
  afterRate.classList.remove("none");
});
