// Vérifie si l'utilisateur a déjà voté
let dejaVote = localStorage.getItem("vote");

// Charger les scores depuis le localStorage
let score = parseInt(localStorage.getItem("score")) || 0;

const scoreDiv = document.getElementById("score");
const btnOui = document.getElementById("btn-oui");
const btnNon = document.getElementById("btn-non");

// Afficher le score au chargement
scoreDiv.textContent = "Score : " + score;

// Si l'utilisateur a déjà voté, on bloque les boutons
if (dejaVote === "true") {
  btnOui.disabled = true;
  btnNon.disabled = true;
}

// Vote Oui
btnOui.addEventListener("click", () => {
  if (!dejaVote) {
    score++;
    localStorage.setItem("score", score);
    localStorage.setItem("vote", "true");
    scoreDiv.textContent = "Score : " + score;
    btnOui.disabled = true;
    btnNon.disabled = true;
  }
});

// Vote Non
btnNon.addEventListener("click", () => {
  if (!dejaVote) {
    score++;
    localStorage.setItem("score", score);
    localStorage.setItem("vote", "true");
    scoreDiv.textContent = "Score : " + score;
    btnOui.disabled = true;
    btnNon.disabled = true;
  }
});

