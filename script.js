let score = 0;

const scoreDiv = document.getElementById("score");
const btnOui = document.getElementById("btn-oui");
const btnNon = document.getElementById("btn-non");

// Quand on clique sur "Oui"
btnOui.addEventListener("click", () => {
  score++;
  scoreDiv.textContent = "Score : " + score;
});

// Quand on clique sur "Non"
btnNon.addEventListener("click", () => {
  score++;
  scoreDiv.textContent = "Score : " + score;
});
