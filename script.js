const cards = [
  {
    front: "🟥 COMPARATIVO: É urgência ou emergência?",
    back: `
    <strong>URGÊNCIA:</strong><br>
    - PA elevada sem LOA<br>
    - Sintomas leves: cefaleia, epistaxe leve<br><br>
    <strong>EMERGÊNCIA:</strong><br>
    - PA elevada com LOA<br>
    - Ex: AVC, IAM, edema agudo de pulmão
    `
  },
  {
    front: "🧠 EXEMPLO 1: PA 200x110 + cefaleia leve. É urgência?",
    back: "✅ SIM – É urgência hipertensiva (sem LOA).<br>Conduta: medicação oral e observação."
  },
  {
    front: "💥 EXEMPLO 2: PA 220x130 + confusão mental. É emergência?",
    back: "✅ SIM – Suspeita de encefalopatia hipertensiva (LOA).<br>Conduta: internação e medicação EV."
  },
  {
    front: "📚 DEFINIÇÃO: O que é crise hipertensiva?",
    back: "PA ≥180x120 mmHg com ou sem lesão de órgão-alvo (LOA).<br>Divide-se em <strong>urgência</strong> (sem LOA) e <strong>emergência</strong> (com LOA)."
  },
  {
    front: "🧾 REFERÊNCIA BRASILEIRA",
    back: `Diretriz Brasileira de Hipertensão Arterial - SBC 2020<br>
    <em>https://departamentos.cardiol.br/dha</em>`
  },
  {
    front: "🩺 CASO CLÍNICO 1",
    back: `Homem 65a, PA 210x120, cefaleia leve, sem alterações visuais ou neurológicas.<br><br>
    ❓ Diagnóstico? <br>✅ URGÊNCIA HIPERTENSIVA`
  },
  {
    front: "🩺 CASO CLÍNICO 2",
    back: `Mulher 58a, PA 240x130, dispneia súbita, estertores e B3 no exame físico.<br><br>
    ❓ Diagnóstico? <br>✅ EMERGÊNCIA HIPERTENSIVA (EAP)`
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
