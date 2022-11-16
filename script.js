async function changeContext() {
  const idEle = document.querySelector(".adviceId");
  let adviceEle = document.querySelector(".advice");
  let id = 117;
  let advice = "";
  const response = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      id = data.slip.id;
      advice = data.slip.advice;
    })
    .catch((err) => console.log(err));

  idEle.innerHTML = id;
  adviceEle.innerHTML = advice;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", changeContext);

const dice = document.querySelector(".rotate");

dice.addEventListener("click", function () {
  dice.classList.toggle("down");
});
