
const questions = [
  {
    title: "O primeiro capítulo",
    question: "1. Você gosta de suspense, fantasia, seres mágicos ou química?",
    description: "Escolha a atmosfera que faria você virar a página até de madrugada.",
    options: [
      { label: "Suspense", detail: "Segredos, tensão e mistérios.", icon: "◉", type: "suspense", scores: { mystery: 3 } },
      { label: "Fantasia", detail: "Reinos, poderes e magia.", icon: "✧", type: "fantasia", scores: { fantasy: 3 } },
      { label: "Seres mágicos", detail: "Fadas, criaturas e encantamentos.", icon: "♧", type: "magia", scores: { fantasy: 3 } },
      { label: "Química", detail: "Ciência, tensão e atração.", icon: "⚗", type: "quimica", scores: { romance: 3 } }
    ]
  },
  {
    title: "O que move sua história",
    question: "2. Você gosta mais de aventura, reviravoltas, romance ou clichês?",
    description: "Pense naquela trama que você nunca consegue abandonar.",
    options: [
      { label: "Aventura", detail: "Desafios e jornadas épicas.", icon: "➶", type: "aventura", scores: { dystopia: 2, fantasy: 1 } },
      { label: "Reviravoltas", detail: "Nada é o que parece.", icon: "⟳", type: "reviravolta", scores: { mystery: 3 } },
      { label: "Romance", detail: "Conexões intensas e inesquecíveis.", icon: "♡", type: "romance", scores: { romance: 3, emotional: 1 } },
      { label: "Clichês", detail: "Enemies to lovers e slow burn.", icon: "❦", type: "cliches", scores: { romance: 2, fantasy: 1 } }
    ]
  },
  {
    title: "Entre desejo e destino",
    question: "3. Você prefere drama, triângulos amorosos, mundos alternativos ou romance por contrato?",
    description: "Escolha o tipo de história que sempre ganha seu coração.",
    options: [
      { label: "Drama", detail: "Sentimentos à flor da pele.", icon: "☽", type: "drama", scores: { emotional: 3, romance: 1 } },
      { label: "Triângulos amorosos", detail: "Dúvidas, tensão e escolhas.", icon: "♡", type: "triangulo", scores: { romance: 2, emotional: 2 } },
      { label: "Mundos alternativos", detail: "Realidades e destinos diferentes.", icon: "✧", type: "mundos", scores: { fantasy: 2, dystopia: 2 } },
      { label: "Romance por contrato", detail: "Um acordo que vira sentimento.", icon: "✉", type: "contrato", scores: { romance: 3 } }
    ]
  },
  {
    title: "Escolha seu universo",
    question: "4. Entre estes filmes e séries, qual mais combina com você?",
    description: "Sua escolha favorita terá um peso especial no resultado.",
    options: [
      { label: "Divergente", detail: "Distopias, coragem e rebeldia.", icon: "◈", type: "divergente", scores: { dystopia: 6, fantasy: 1 } },
      { label: "Saga Winx", detail: "Magia, amizade e poderes.", icon: "✧", type: "winx", scores: { fantasy: 6 } },
      { label: "A Empregada", detail: "Segredos e suspense psicológico.", icon: "◉", type: "empregada", scores: { mystery: 6 } },
      { label: "Como Eu Era Antes de Você", detail: "Romance, drama e emoção.", icon: "♡", type: "antes", scores: { emotional: 5, romance: 2 } }
    ]
  },
  {
    title: "Quem roubaria seu coração?",
    question: "5. Qual tipo de personagem conquista você?",
    description: "Escolha seu tipo literário favorito.",
    options: [
      { label: "O misterioso", detail: "Segredos e mistérios.", icon: "🖤", type: "misterioso", scores: { mystery: 2, fantasy: 1 } },
      { label: "O poderoso", detail: "Arrogância, ambição e autoridade.", icon: "♛", type: "poderoso", scores: { fantasy: 2, dystopia: 2 } },
      { label: "O inteligente", detail: "Química e conexão.", icon: "♡", type: "inteligente", scores: { romance: 2 } },
      { label: "O rebelde", detail: "Atitude e liberdade.", icon: "🔥", type: "rebelde", scores: { dystopia: 2, fantasy: 1 } }
    ]
  },
  {
    title: "Onde sua história acontece?",
    question: "6. Qual cenário você escolheria para viver uma história?",
    description: "Imagine que você acabou de entrar nesse universo.",
    options: [
      { label: "Mansão misteriosa", detail: "Segredos em cada cômodo.", icon: "🕯", type: "mansao", scores: { mystery: 3 } },
      { label: "Reino mágico", detail: "Feitiços e intrigas.", icon: "♜", type: "reino", scores: { fantasy: 3 } },
      { label: "Universidade", detail: "Ciência e romance.", icon: "⚗", type: "universidade", scores: { romance: 3 } },
      { label: "Mundo distópico", detail: "Rebelião e sobrevivência.", icon: "🌌", type: "distopia", scores: { dystopia: 3 } }
    ]
  },
  {
    title: "O último capítulo",
    question: "7. Como você gostaria que sua história terminasse?",
    description: "Escolha o final que mais combina com você.",
    options: [
      { label: "Revelação chocante", detail: "Quero duvidar de tudo.", icon: "🥀", type: "chocante", scores: { mystery: 3 } },
      { label: "Romance inesquecível", detail: "Amor acima de tudo.", icon: "💋", type: "romantico", scores: { romance: 3 } },
      { label: "Grande conquista", detail: "Poder e superação.", icon: "♛", type: "conquista", scores: { dystopia: 2, fantasy: 2 } },
      { label: "Final agridoce", detail: "Quero sentir tudo.", icon: "🌙", type: "agridoce", scores: { emotional: 3 } }
    ]
  }
];

const profiles = {
  mystery: {
    name: "A Mente Enigmática",
    description: "Você ama pistas escondidas, personagens ambíguos e histórias que fazem desconfiar de tudo. Cada detalhe pode esconder uma verdade perturbadora.",
    tags: ["Suspense psicológico", "Segredos", "Dark academia"],
    book: "Verity — Colleen Hoover",
    screen: "A Empregada",
    mood: "Mistério e obsessão",
    color: "#d6a5ff",
    quote: "Nem toda verdade merece ser descoberta."
  },
  fantasy: {
    name: "A Herdeira das Sombras",
    description: "Sua imaginação pertence a reinos perigosos, disputas de poder e personagens que escondem muito mais do que revelam. Você nasceu para desafiar reis e descobrir a magia que existe em você.",
    tags: ["Fantasia sombria", "Poder", "Reinos mágicos"],
    book: "O Príncipe Cruel — Holly Black",
    screen: "Saga Winx",
    mood: "Magia e poder",
    color: "#c59aff",
    quote: "Até as criaturas mais delicadas podem esconder grandes poderes."
  },
  romance: {
    name: "A Cientista do Amor",
    description: "Você combina inteligência, provocações e sentimentos intensos. Para você, a melhor história começa com uma conexão inesperada e evolui para algo impossível de ignorar.",
    tags: ["Romance acadêmico", "Slow burn", "Química"],
    book: "A Hipótese do Amor — Ali Hazelwood",
    screen: "A Hipótese do Amor",
    mood: "Ciência e paixão",
    color: "#f1a7cf",
    quote: "Algumas conexões desafiam todas as hipóteses."
  },
  dystopia: {
    name: "A Rebelde da Distopia",
    description: "Você questiona regras, desafia sistemas e prefere protagonistas que precisam escolher quem realmente desejam ser. Sua história é feita de coragem, liberdade e transformação.",
    tags: ["Distopia", "Ação", "Identidade"],
    book: "Estilhaça-me — Tahereh Mafi",
    screen: "Divergente",
    mood: "Liberdade e ação",
    color: "#9bc8ff",
    quote: "Você não nasceu para caber nas regras de ninguém."
  },
  emotional: {
    name: "A Guardiã das Memórias",
    description: "Você valoriza histórias humanas, delicadas e intensas, capazes de transformar a maneira como enxergamos o amor e a vida. Prefere um final que deixa marcas a uma história que se esquece rapidamente.",
    tags: ["Drama", "Romance", "Transformação"],
    book: "Estilhaça-me — Tahereh Mafi",
    screen: "Como Eu Era Antes de Você",
    mood: "Amor e transformação",
    color: "#ffb5d9",
    quote: "Algumas histórias terminam, mas nunca deixam de existir."
  }
};

const stepTitles = questions.map(question => question.title);

const questionArea = document.getElementById("question-area");
const stepTitle = document.getElementById("step-title");
const counter = document.getElementById("counter");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const backBtn = document.getElementById("back-btn");
const flowchart = document.getElementById("flowchart");
const result = document.getElementById("result");

let currentStep = 0;
let answers = Array(questions.length).fill(null);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getOption(index) {
  if (answers[index] === null) return null;

  return questions[index].options.find(
    option => option.type === answers[index]
  ) || null;
}

function renderQuestion() {
  const question = questions[currentStep];
  const selected = answers[currentStep];

  stepTitle.textContent = stepTitles[currentStep];

  counter.textContent =
    `${String(currentStep + 1).padStart(2, "0")} / ` +
    `${String(questions.length).padStart(2, "0")}`;

  progressFill.style.width =
    `${(currentStep / questions.length) * 100}%`;

  progressTrack.setAttribute("aria-valuemax", questions.length);
  progressTrack.setAttribute("aria-valuenow", currentStep);

  backBtn.hidden = currentStep === 0;

  questionArea.innerHTML = `
    <div class="question">
      <h3>${escapeHTML(question.question)}</h3>

      <p class="question-description">
        ${escapeHTML(question.description)}
      </p>

      <div class="options">
        ${question.options.map(option => `
          <button
            type="button"
            class="option ${selected === option.type ? "selected" : ""}"
            data-type="${escapeHTML(option.type)}"
            aria-pressed="${selected === option.type}"
          >
            <span class="option-symbol" aria-hidden="true">
              ${escapeHTML(option.icon)}
            </span>

            <span class="option-copy">
              <strong>${escapeHTML(option.label)}</strong>
              <small>${escapeHTML(option.detail)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  questionArea.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", () => {
      selectAnswer(button.dataset.type);
    });
  });
}

function selectAnswer(type) {
  answers[currentStep] = type;

  updateFlowchart();

  if (currentStep < questions.length - 1) {
    currentStep++;
    renderQuestion();
  } else {
    progressFill.style.width = "100%";
    progressTrack.setAttribute("aria-valuenow", questions.length);
    showResult();
  }
}

function getScores() {
  const scores = {
    mystery: 0,
    fantasy: 0,
    romance: 0,
    dystopia: 0,
    emotional: 0
  };

  answers.forEach((answer, index) => {
    if (!answer) return;

    const option = questions[index].options.find(
      item => item.type === answer
    );

    if (!option) return;

    Object.entries(option.scores).forEach(([profile, points]) => {
      scores[profile] += points;
    });
  });

  return scores;
}

function getResultProfile() {
  const scores = getScores();

  // Em caso de empate, a ordem abaixo define o desempate.
  const ranking = Object.entries(scores).sort(
    (a, b) => b[1] - a[1]
  );

  return {
    profile: profiles[ranking[0][0]],
    scores,
    ranking
  };
}

function updateFlowchart() {
  const nodes = [
    {
      title: "Início · Bookverse",
      detail: "Sete perguntas para descobrir seu universo.",
      icon: "✦",
      active: true
    }
  ];

  questions.forEach((question, index) => {
    const option = getOption(index);

    nodes.push({
      title: `${String(index + 1).padStart(2, "0")} · ${[
        "Sua essência literária",
        "O que conquista você",
        "Seu trope favorito",
        "Seu universo escolhido",
        "Seu tipo de personagem",
        "Seu cenário ideal",
        "Seu final perfeito"
      ][index]}`,
      detail: option
        ? `${option.label} — ${option.detail}`
        : "Aguardando sua escolha...",
      icon: option ? option.icon : String(index + 1).padStart(2, "0"),
      active: Boolean(option)
    });
  });

  const completed = answers.every(Boolean);

  if (completed) {
    const { profile } = getResultProfile();

    nodes.push({
      title: `✧ ${profile.name}`,
      detail: `Seu destino: ${profile.mood}`,
      icon: "♡",
      active: true,
      final: true
    });
  }

  flowchart.innerHTML = nodes.map((node, index) => `
    ${index > 0 ? '<div class="flow-connector"></div>' : ""}

    <div class="flow-node
      ${index === 0 ? "start-node" : ""}
      ${node.active ? "" : "pending-node"}
      ${node.final ? "final-node" : ""}"
    >
      <span class="${index === 0 ? "node-symbol" : "node-number"}">
        ${escapeHTML(node.icon)}
      </span>

      <div>
        <strong>${escapeHTML(node.title)}</strong>
        <small>${escapeHTML(node.detail)}</small>
      </div>
    </div>
  `).join("");
}

function showResult() {
  const { profile, scores, ranking } = getResultProfile();

  const selections = answers.map((answer, index) => {
    const option = questions[index].options.find(
      item => item.type === answer
    );

    return option ? option.label : "";
  });

  const scoreLabels = {
    mystery: "Suspense",
    fantasy: "Fantasia",
    romance: "Romance",
    dystopia: "Distopia",
    emotional: "Drama"
  };

  const topInterests = ranking
    .filter(([, points]) => points > 0)
    .slice(0, 3)
    .map(([key]) => scoreLabels[key]);

  result.hidden = false;

  result.innerHTML = `
    <span class="result-kicker">✦ SEU UNIVERSO FOI REVELADO ✦</span>

    <h2>${escapeHTML(profile.name)}</h2>

    <p>${escapeHTML(profile.description)}</p>

    <div class="result-meta">
      ${profile.tags.map(tag =>
        `<span>${escapeHTML(tag)}</span>`
      ).join("")}
    </div>

    <div class="recommendation">
      <h3>☾ SUA FRASE DO DESTINO</h3>
      <p><em>${escapeHTML(profile.quote)}</em></p>
    </div>

    <div class="recommendation">
      <h3>♡ SUA PERSONALIDADE LITERÁRIA</h3>
      <p>
        ${topInterests.map(escapeHTML).join(" · ")}
      </p>
    </div>

    <div class="recommendation">
      <h3>✧ SUAS SETE ESCOLHAS</h3>
      <p>${selections.map(escapeHTML).join(" · ")}</p>
    </div>

    <div class="recommendation">
      <h3>📖 LIVRO PARA SUA PRÓXIMA OBSESSÃO</h3>
      <p>${escapeHTML(profile.book)}</p>
    </div>

    <div class="recommendation">
      <h3>🎬 UNIVERSO PARA MARATONAR</h3>
      <p>${escapeHTML(profile.screen)}</p>
    </div>

    <button class="restart-btn" id="restart-btn" type="button">
      ↻ Descobrir outro universo
    </button>
  `;

  updateFlowchart();

  document.getElementById("restart-btn").addEventListener(
    "click",
    restartQuiz
  );

  result.scrollIntoView({
    behavior: window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches ? "auto" : "smooth",
    block: "start"
  });
}

function restartQuiz() {
  currentStep = 0;
  answers = Array(questions.length).fill(null);

  result.hidden = true;

  progressFill.style.width = "0%";
  progressTrack.setAttribute("aria-valuenow", 0);

  renderQuestion();
  updateFlowchart();

  document.getElementById("quiz-card").scrollIntoView({
    behavior: window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches ? "auto" : "smooth",
    block: "start"
  });
}

backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    renderQuestion();
    updateFlowchart();
  }
});

renderQuestion();
updateFlowchart();

