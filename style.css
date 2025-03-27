const cards = [
  {
    front: "🟥 URGÊNCIA x EMERGÊNCIA",
    back: "Urgência: PA ↑ sem LOA<br>Emergência: PA ↑ com LOA (ex: AVC, EAP, IAM)"
  },
  {
    front: "🧠 CASO 1: PA 200x110 + cefaleia leve",
    back: "✅ Urgência hipertensiva<br>Medicação oral, sem LOA"
  },
  {
    front: "💥 CASO 2: PA 220x130 + confusão mental",
    back: "✅ Emergência hipertensiva<br>Encefalopatia = LOA"
  }
];

const container = document.getElementById("cards-container");

cards.forEach(({ front, back }) => {
  const card = document.createElement("div");
  card.className = "card";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const frontEl = document.createElement("div");
  frontEl.className = "card-front";
  frontEl.innerHTML = front;

  const backEl = document.createElement("div");
  backEl.className = "card-back";
  backEl.innerHTML = back;

  inner.appendChild(frontEl);
  inner.appendChild(backEl);
  card.appendChild(inner);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});
