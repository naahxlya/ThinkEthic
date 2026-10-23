const dimensions = {
  consequences: { label: "Consequências", short: "Consequências", description: "Considerar quem será afetado e quais efeitos a decisão pode produzir." },
  fairness: { label: "Imparcialidade", short: "Imparcialidade", description: "Aplicar critérios consistentes, sem favorecer pessoas por proximidade ou preferência." },
  prudence: { label: "Prudência", short: "Prudência", description: "Buscar informações relevantes e avaliar riscos antes de agir." },
  revision: { label: "Revisão de ideias", short: "Revisão de ideias", description: "Reconsiderar uma posição quando surgem fatos ou argumentos relevantes." }
};

const questions = [
  {
    dimension: "consequences",
    title: "Um erro pode chegar ao cliente. O que você faz?",
    context: "Você percebe que um relatório enviado pela equipe contém um erro que pode levar o cliente a tomar uma decisão ruim. Corrigir agora pode atrasar a entrega e gerar uma cobrança do gestor.",
    options: [
      { text: "Aviso a equipe, explico o possível impacto e ajudo a corrigir o relatório antes que o cliente o utilize.", score: 3, feedback: "Você prioriza reduzir o dano e participa da solução, mesmo que isso exija assumir um custo imediato." },
      { text: "Confirmo o tamanho do erro e o prazo para correção antes de decidir como comunicar o problema.", score: 2, feedback: "Verificar a gravidade ajuda a dimensionar a resposta. Vale cuidar para que a análise não atrase uma comunicação necessária." },
      { text: "Espero para ver se alguém percebe, porque talvez o erro não faça diferença no resultado.", score: 0, feedback: "Esperar evita um desconforto imediato, mas pode ampliar o impacto caso o cliente tome uma decisão com informação incorreta." },
      { text: "Corrijo o arquivo silenciosamente e não explico que a versão anterior estava errada.", score: 1, feedback: "A correção pode reduzir o dano, mas a falta de transparência pode impedir que outras pessoas entendam o risco ou evitem a repetição." }
    ]
  },
  {
    dimension: "consequences",
    title: "Uma meta foi atingida, mas alguém saiu prejudicado.",
    context: "Sua equipe bateu uma meta importante porque transferiu parte do trabalho urgente para outra equipe sem combinar a mudança. Agora, essa equipe está sobrecarregada.",
    options: [
      { text: "Reconheço o impacto, converso com a outra equipe e ajudo a negociar uma divisão viável do trabalho.", score: 3, feedback: "Você considera os efeitos para além do resultado imediato e procura uma reparação prática." },
      { text: "Peço ao gestor que avalie a situação e proponha uma solução entre as equipes.", score: 2, feedback: "Acionar quem pode reorganizar prioridades é válido. Também pode ser útil levar uma proposta concreta de compensação." },
      { text: "Mantenho a decisão, pois a meta da minha equipe foi cumprida e cada área precisa cuidar das próprias tarefas.", score: 0, feedback: "A resposta considera o objetivo local, mas deixa de avaliar os custos transferidos para outras pessoas." },
      { text: "Ofereço ajuda apenas se a outra equipe formalizar um pedido.", score: 1, feedback: "A formalização pode organizar responsabilidades, embora esperar por ela talvez prolongue um problema que você já conhece." }
    ]
  },
  {
    dimension: "consequences",
    title: "Uma regra eficiente cria uma dificuldade inesperada.",
    context: "A empresa adotou um novo procedimento para agilizar atendimentos. Você nota que ele funciona para a maioria, mas deixa alguns clientes sem uma forma acessível de concluir o processo.",
    options: [
      { text: "Registro os casos afetados, proponho uma alternativa acessível e apresento os impactos à equipe responsável.", score: 3, feedback: "Você combina atenção às pessoas afetadas com uma proposta que permite avaliar e corrigir o procedimento." },
      { text: "Sigo a regra por enquanto e reúno exemplos concretos para discutir uma melhoria depois.", score: 2, feedback: "Reunir evidências fortalece a proposta. Se alguém estiver sendo prejudicado agora, considere uma medida provisória." },
      { text: "Mantenho o procedimento sem exceções, porque mudar a regra pode atrasar todos os atendimentos.", score: 0, feedback: "A padronização pode trazer eficiência, mas não elimina a responsabilidade de avaliar efeitos desiguais." },
      { text: "Resolvo cada caso informalmente, sem registrar o problema para não criar burocracia.", score: 1, feedback: "A solução imediata pode ajudar, mas sem registro o problema tende a se repetir e a melhoria fica difícil de justificar." }
    ]
  },
  {
    dimension: "fairness",
    title: "Duas pessoas pedem a mesma oportunidade.",
    context: "Você organiza uma capacitação com poucas vagas. Uma das pessoas é sua amiga, enquanto a outra apresentou resultados semelhantes e também demonstrou interesse.",
    options: [
      { text: "Defino critérios relacionados à capacitação, aplico os mesmos critérios às duas pessoas e explico o processo.", score: 3, feedback: "Critérios claros e consistentes reduzem a influência de preferências pessoais e tornam a decisão justificável." },
      { text: "Peço a outra pessoa da equipe que avalie as candidaturas usando critérios definidos em conjunto.", score: 3, feedback: "Uma avaliação compartilhada pode reduzir conflitos de interesse, desde que os critérios sejam pertinentes e aplicados igualmente." },
      { text: "Escolho minha amiga, pois conheço melhor sua dedicação e confio no que ela pode fazer.", score: 0, feedback: "Conhecer alguém pode trazer informações, mas também favorece quem tem mais proximidade. Evidências comparáveis ajudariam." },
      { text: "Faço um sorteio entre as duas pessoas para evitar que alguém questione minha decisão.", score: 1, feedback: "O sorteio evita favoritismo direto, mas pode ignorar critérios profissionais relevantes quando há diferenças pertinentes entre candidaturas." }
    ]
  },
  {
    dimension: "fairness",
    title: "Um colega de quem você não gosta comete um erro.",
    context: "Você revisa entregas de uma equipe e encontra um erro corrigível no trabalho de alguém com quem teve conflitos. O mesmo tipo de erro já foi tratado com tolerância em outras pessoas.",
    options: [
      { text: "Avalio o erro pelos mesmos critérios usados nos demais casos e registro a orientação de forma objetiva.", score: 3, feedback: "Aplicar critérios consistentes ajuda a separar a qualidade do trabalho da relação pessoal." },
      { text: "Peço uma segunda avaliação para verificar se meu histórico com a pessoa pode influenciar meu julgamento.", score: 3, feedback: "Reconhecer um possível viés e buscar revisão independente é uma forma concreta de proteger a imparcialidade." },
      { text: "Sou mais rigoroso porque essa pessoa já me causou problemas antes.", score: 0, feedback: "O histórico pessoal pode influenciar a reação, mas a consequência profissional deve se apoiar em fatos pertinentes ao caso." },
      { text: "Deixo passar para não parecer que estou perseguindo a pessoa.", score: 1, feedback: "Evitar uma aparência de perseguição é compreensível, mas aplicar um critério diferente também pode ser injusto." }
    ]
  },
  {
    dimension: "fairness",
    title: "A equipe precisa dividir uma tarefa pouco desejada.",
    context: "Uma tarefa repetitiva e pouco valorizada precisa ser distribuída. Uma pessoa nova costuma recebê-la porque ainda não conhece bem os processos.",
    options: [
      { text: "Proponho uma distribuição transparente, com rodízio e consideração da carga de trabalho de cada pessoa.", score: 3, feedback: "O rodízio com critérios visíveis reduz a chance de uma pessoa ficar presa continuamente à tarefa menos valorizada." },
      { text: "Pergunto à equipe como prefere distribuir a tarefa e observo se a proposta pesa sempre sobre a mesma pessoa.", score: 3, feedback: "Ouvir a equipe e observar padrões ajuda, especialmente se todos puderem discordar sem pressão." },
      { text: "Mantenho a tarefa com a pessoa nova, pois é uma forma de ela aprender começando pelo básico.", score: 0, feedback: "Aprender o processo pode ser útil, mas não justifica concentrar indefinidamente o trabalho menos desejado." },
      { text: "Escolho alguém diferente a cada vez, sem explicar como decidi a ordem.", score: 2, feedback: "O rodízio distribui o esforço, mas explicar a regra torna o processo mais previsível e confiável." }
    ]
  },
  {
    dimension: "prudence",
    title: "Chega uma denúncia, mas faltam informações.",
    context: "Uma mensagem anônima acusa um funcionário de descumprir uma regra. A acusação é séria, porém não apresenta evidências verificáveis.",
    options: [
      { text: "Preservo a confidencialidade, registro o relato e busco apuração imparcial antes de concluir qualquer coisa.", score: 3, feedback: "Você leva a denúncia a sério sem transformar uma alegação ainda não verificada em conclusão." },
      { text: "Converso com a pessoa responsável pelo processo e procuro evidências adicionais, evitando divulgar a acusação.", score: 3, feedback: "Buscar informações de forma discreta ajuda a esclarecer o caso e limita danos à reputação enquanto não há conclusão." },
      { text: "Afasto imediatamente o funcionário para mostrar que a empresa não tolera esse tipo de conduta.", score: 0, feedback: "Agir rapidamente pode parecer firme, mas uma medida sem apuração suficiente pode ser desproporcional e injusta." },
      { text: "Ignoro a mensagem porque denúncias anônimas não merecem confiança.", score: 0, feedback: "O anonimato não comprova nem invalida uma alegação. O conteúdo e a possibilidade de apuração precisam ser avaliados." }
    ]
  },
  {
    dimension: "prudence",
    title: "Você precisa decidir antes de ter todos os dados.",
    context: "Um fornecedor oferece um desconto válido somente até hoje. A compra pode economizar dinheiro, mas ainda falta confirmar se o material atende a uma exigência técnica.",
    options: [
      { text: "Verifico a exigência técnica e o custo de um possível erro antes de assumir o compromisso, mesmo que o desconto expire.", score: 3, feedback: "Você compara o benefício imediato com o risco real de uma compra inadequada antes de se comprometer." },
      { text: "Peço ao fornecedor uma extensão curta do prazo e confirmo a especificação com a área técnica.", score: 3, feedback: "Você procura reduzir a pressão do prazo e obter a informação que falta antes de decidir." },
      { text: "Aproveito o desconto e resolvo qualquer incompatibilidade depois, se ela aparecer.", score: 0, feedback: "O desconto é concreto, mas o custo posterior pode superar a economia e afetar outras pessoas ou etapas do trabalho." },
      { text: "Recuso a compra imediatamente porque qualquer incerteza torna a proposta arriscada demais.", score: 1, feedback: "Evitar um risco pode ser prudente, mas investigar a informação faltante permitiria uma decisão mais bem fundamentada." }
    ]
  },
  {
    dimension: "prudence",
    title: "Um arquivo importante foi enviado à pessoa errada.",
    context: "Você percebe que um documento interno foi enviado por engano a um destinatário externo. Ainda não sabe se o arquivo foi aberto ou compartilhado.",
    options: [
      { text: "Aviso imediatamente a pessoa responsável, sigo o procedimento de incidente e ajudo a identificar o alcance do envio.", score: 3, feedback: "Você evita improvisar sozinho e ajuda a conter o incidente enquanto os fatos são apurados." },
      { text: "Peço ao destinatário que apague o arquivo e, em paralelo, verifico com a equipe responsável quais medidas tomar.", score: 2, feedback: "Tentar limitar a exposição pode ajudar, mas é importante registrar o ocorrido e seguir o procedimento adequado." },
      { text: "Apago a mensagem da minha caixa de enviados e espero para saber se alguém percebeu.", score: 0, feedback: "Apagar a própria cópia não resolve o envio e pode dificultar a resposta a um incidente." },
      { text: "Envio outra mensagem com uma explicação detalhada antes de consultar quem cuida da segurança da informação.", score: 1, feedback: "Comunicar pode ser necessário, mas uma mensagem precipitada pode ampliar a exposição ou transmitir instruções incorretas." }
    ]
  },
  {
    dimension: "revision",
    title: "Novas evidências contradizem sua primeira opinião.",
    context: "Você defendeu uma decisão em reunião. Depois, uma colega apresenta dados confiáveis que mostram que uma premissa importante da sua argumentação estava errada.",
    options: [
      { text: "Reconheço a informação nova, reviso minha conclusão e explico o que mudou no meu raciocínio.", score: 3, feedback: "Revisar a conclusão diante de evidências relevantes fortalece a qualidade da decisão, não diminui seu valor." },
      { text: "Peço tempo para conferir os dados e me comprometo a retomar a discussão com uma posição fundamentada.", score: 3, feedback: "Adiar a conclusão para verificar evidências é razoável, desde que você realmente retome o assunto." },
      { text: "Mantenho minha posição para não perder credibilidade diante da equipe.", score: 0, feedback: "Preservar a imagem pode parecer importante no momento, mas ignorar evidências compromete a decisão e a confiança a longo prazo." },
      { text: "Aceito a conclusão da colega imediatamente, sem verificar os dados, para demonstrar abertura.", score: 1, feedback: "Estar aberto a mudar é valioso, mas revisar uma opinião também exige examinar a qualidade das novas evidências." }
    ]
  },
  {
    dimension: "revision",
    title: "Uma regra parece justa até você conhecer o contexto.",
    context: "Você defende que atrasos devem ter a mesma consequência para todos. Depois, descobre que uma falha recorrente no transporte público afetou várias pessoas da equipe naquele dia.",
    options: [
      { text: "Reavalio a regra e proponho critérios transparentes que considerem circunstâncias relevantes sem favorecer pessoas arbitrariamente.", score: 3, feedback: "Você mantém a busca por consistência, mas reconhece que tratar casos relevantes de forma justa nem sempre significa ignorar o contexto." },
      { text: "Mantenho a regra por enquanto e proponho discutir uma política clara para situações excepcionais.", score: 2, feedback: "Uma regra previsível é importante. Definir como exceções serão avaliadas pode evitar decisões improvisadas." },
      { text: "Insisto que a regra deve valer sem considerar contexto, porque qualquer exceção é injusta.", score: 0, feedback: "A consistência importa, mas desconsiderar circunstâncias relevantes também pode produzir resultados injustos." },
      { text: "Abro uma exceção para todas as pessoas envolvidas, sem registrar o motivo nem definir um critério futuro.", score: 1, feedback: "A flexibilidade pode responder ao contexto, mas sem critérios claros pode criar novas inconsistências." }
    ]
  },
  {
    dimension: "revision",
    title: "Seu plano funciona, mas a equipe aponta um efeito ruim.",
    context: "Você criou um método para acelerar as entregas. O prazo melhorou, mas colegas mostram que o método aumentou erros em uma etapa menos visível do processo.",
    options: [
      { text: "Analiso os dados, comparo os efeitos e ajusto o método se o ganho de prazo estiver criando problemas maiores.", score: 3, feedback: "Você avalia o plano pelo conjunto de efeitos e aceita ajustá-lo quando os dados justificam a mudança." },
      { text: "Faço um teste limitado de uma alternativa e comparo os resultados antes de decidir.", score: 3, feedback: "Um teste controlado permite aprender com evidências e reduzir o risco de trocar um problema por outro." },
      { text: "Defendo o método porque o indicador de prazo melhorou, que era o objetivo inicial.", score: 0, feedback: "O indicador melhorou, mas um objetivo isolado pode esconder custos que comprometem a qualidade geral." },
      { text: "Abandono o método imediatamente porque qualquer crítica indica que ele não funciona.", score: 1, feedback: "Levar críticas a sério é importante, mas analisar a extensão do problema ajuda a escolher uma resposta proporcional." }
    ]
  }
];


function randomInt(maxExclusive) {
  if (maxExclusive <= 1) return 0;

  if (globalThis.crypto && typeof globalThis.crypto.getRandomValues === "function") {
    const range = 0x100000000;
    const limit = Math.floor(range / maxExclusive) * maxExclusive;
    const buffer = new Uint32Array(1);
    let value;
    do {
      globalThis.crypto.getRandomValues(buffer);
      value = buffer[0];
    } while (value >= limit);
    return value % maxExclusive;
  }

  return Math.floor(Math.random() * maxExclusive);
}

function shuffleArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = randomInt(index + 1);
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

shuffleArray(questions);
questions.forEach(question => shuffleArray(question.options));

const state = {
  current: 0,
  answers: Array(questions.length).fill(null),
  fromResult: false
};

const screens = {
  welcome: document.getElementById("welcome-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const startButton = document.getElementById("start-button");
const optionsList = document.getElementById("options-list");
const questionTitle = document.getElementById("question-title");
const questionContext = document.getElementById("question-context");
const dimensionLabel = document.getElementById("dimension-label");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const remainingCount = document.getElementById("remaining-count");
const asideNumber = document.getElementById("aside-number");
const feedbackBox = document.getElementById("answer-feedback");
const feedbackText = document.getElementById("feedback-text");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  state.fromResult = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.current];
  const selectedIndex = state.answers[state.current];
  const currentNumber = state.current + 1;
  const remaining = questions.length - currentNumber;

  questionCounter.textContent = `PERGUNTA ${String(currentNumber).padStart(2, "0")} DE ${questions.length}`;
  progressFill.style.width = `${(currentNumber - 1 + (selectedIndex !== null ? 1 : 0)) / questions.length * 100}%`;
  progressTrack.setAttribute("aria-valuemax", questions.length);
  progressTrack.setAttribute("aria-valuenow", currentNumber - 1 + (selectedIndex !== null ? 1 : 0));
  remainingCount.textContent = remaining === 0 ? "Última pergunta" : `${remaining} ${remaining === 1 ? "pergunta restante" : "perguntas restantes"}`;
  asideNumber.innerHTML = `${String(currentNumber).padStart(2, "0")}<span>/${questions.length}</span>`;
  dimensionLabel.textContent = `DIMENSÃO: ${dimensions[question.dimension].label.toUpperCase()}`;
  questionTitle.textContent = question.title;
  questionContext.textContent = question.context;
  optionsList.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-button${selectedIndex === index ? " selected" : ""}`;
    button.setAttribute("aria-pressed", selectedIndex === index ? "true" : "false");

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const copy = document.createElement("span");
    copy.className = "option-copy";
    copy.textContent = option.text;

    button.append(letter, copy);
    button.addEventListener("click", () => selectOption(index));
    optionsList.appendChild(button);
  });

  previousButton.disabled = state.current === 0;
  previousButton.style.visibility = state.current === 0 ? "hidden" : "visible";
  nextButton.disabled = selectedIndex === null;
  nextButton.innerHTML = state.current === questions.length - 1
    ? 'Ver meu resultado <span aria-hidden="true">↗</span>'
    : 'Confirmar escolha <span aria-hidden="true">→</span>';

  if (selectedIndex !== null) {
    feedbackText.textContent = question.options[selectedIndex].feedback;
    feedbackBox.hidden = false;
  } else {
    feedbackBox.hidden = true;
    feedbackText.textContent = "";
  }
}

function selectOption(index) {
  state.answers[state.current] = index;
  renderQuestion();
  const chosen = optionsList.querySelector(".option-button.selected");
  if (chosen) chosen.focus({ preventScroll: true });
}

function goNext() {
  if (state.answers[state.current] === null) return;
  if (state.current === questions.length - 1) {
    renderResults();
    showScreen("result");
    return;
  }
  state.current += 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goPrevious() {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
}

function calculateResults() {
  const totals = {};
  Object.keys(dimensions).forEach(key => totals[key] = { score: 0, count: 0 });

  let overallScore = 0;
  questions.forEach((question, index) => {
    const answerIndex = state.answers[index];
    if (answerIndex === null) return;
    const score = question.options[answerIndex].score;
    overallScore += score;
    totals[question.dimension].score += score;
    totals[question.dimension].count += 1;
  });

  const overall = Math.round((overallScore / (questions.length * 3)) * 100);
  const dimensionScores = {};
  Object.keys(totals).forEach(key => {
    const item = totals[key];
    dimensionScores[key] = item.count ? Math.round((item.score / (item.count * 3)) * 100) : 0;
  });

  return { overall, dimensionScores };
}

function getSummary(score) {
  if (score >= 80) {
    return {
      title: "Suas escolhas mostram critérios consistentes",
      description: "Neste conjunto de situações, suas respostas se alinharam frequentemente aos critérios de análise propostos. Ainda assim, dilemas reais podem exigir informações e ponderações que o questionário não contempla.",
      reflection: "Explore quais princípios sustentaram suas escolhas e como você agiria se duas responsabilidades importantes entrassem em conflito."
    };
  }
  if (score >= 55) {
    return {
      title: "Há critérios fortes e pontos para explorar",
      description: "Suas respostas combinaram diferentes formas de lidar com os dilemas. Alguns cenários podem abrir espaço para observar melhor consequências, critérios de justiça ou informações que faltam.",
      reflection: "Escolha uma situação em que ficou em dúvida e pergunte a si mesma quais informações, pessoas afetadas ou consequências poderiam mudar sua decisão."
    };
  }
  return {
    title: "Um ponto de partida para novas perguntas",
    description: "O resultado mostra oportunidades para comparar suas escolhas com os critérios deste protótipo. Isso não significa que você seja uma pessoa menos ética: as situações são limitadas e podem não representar seus contextos reais.",
    reflection: "Releia uma ou duas escolhas e experimente construir uma alternativa que considere mais pessoas afetadas, evidências e consequências de longo prazo."
  };
}

function renderResults() {
  const { overall, dimensionScores } = calculateResults();
  const summary = getSummary(overall);

  document.getElementById("overall-score").innerHTML = `${overall}<span>%</span>`;
  document.getElementById("score-ring").style.background = `conic-gradient(var(--green) 0% ${overall}%, #e8eee6 ${overall}% 100%)`;
  document.getElementById("result-summary").textContent = summary.title;
  document.getElementById("result-description").textContent = summary.description;
  document.getElementById("reflection-text").textContent = summary.reflection;

  const chart = document.getElementById("dimension-chart");
  chart.replaceChildren();
  Object.entries(dimensions).forEach(([key, dimension]) => {
    const score = dimensionScores[key];
    const row = document.createElement("div");
    row.className = "chart-row";

    const label = document.createElement("div");
    label.className = "chart-label";
    label.textContent = dimension.short;

    const track = document.createElement("div");
    track.className = "chart-bar-track";
    track.setAttribute("aria-hidden", "true");
    const bar = document.createElement("div");
    bar.className = "chart-bar";
    bar.style.width = "0%";
    track.appendChild(bar);

    const value = document.createElement("div");
    value.className = "chart-value";
    value.textContent = `${score}%`;

    row.append(label, track, value);
    chart.appendChild(row);
    requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = `${score}%`; }));
  });
}

function reviewAnswers() {
  const firstAnswered = state.answers.findIndex(answer => answer === null);
  state.current = firstAnswered === -1 ? 0 : firstAnswered;
  state.fromResult = true;
  showScreen("quiz");
  renderQuestion();
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goNext);
previousButton.addEventListener("click", goPrevious);
document.getElementById("exit-quiz").addEventListener("click", () => showScreen("welcome"));
document.getElementById("restart-button").addEventListener("click", startQuiz);
document.getElementById("review-button").addEventListener("click", reviewAnswers);
document.getElementById("brand-home").addEventListener("click", event => {
  event.preventDefault();
  showScreen("welcome");
});