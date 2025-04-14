const perguntas = [
  {
    texto: "Qual faculdade tem mais haver com você??",
    opcoes: [
      { texto: "TI", patos: ["Carol"] },
      { texto: "Direito", patos: ["Isa"] },
      { texto: "Engenharia", patos: ["Vini", "Wilgner"] },
      { texto: "Física", patos: ["Joao"] },
      { texto: "Biologia", patos: ["Louise", "Stoqui"] },
      { texto: "Educação física", patos: ["Gui"] },
      { texto: "Artes cênicas", patos: ["Lauro"] },
      { texto: "Matemática", patos: ["Ale"] },
      { texto: "Psicologia", patos: ["Stoqui", "Isa"] },
      { texto: "Foda-se faculdade!", patos: ["Gui", "Joao"] },
      { texto: "Não sei...", patos: ["Stoqui", "Ale"] },
    ]
  },
  {
    texto: "Qual sua cor favorita?",
    opcoes: [
      { texto: "Rosa", patos: ["Carol", "Isa"] },
      { texto: "Azul", patos: ["Vini", "Louise", "Gui", "Stoqui"] },
      { texto: "Amarelo", patos: ["Carol"] },
      { texto: "Laranja", patos: ["Stoqui"] },
      { texto: "Preto", patos: ["Vini", "Gui", "Ale", "Joao"] },
      { texto: "Arco-íris!", patos: ["Carol", "Isa", "Lauro"] },
    ]
  },
  {
    texto: "Qual seu animal favorito?",
    opcoes: [
      { texto: "Gato", patos: ["Isa", "Louise"] },
      { texto: "Cachorro", patos: ["Carol", "Gui", "Wilgner"] },
      { texto: "Ornitorrinco", patos: ["Gui", "Stoqui", "Vini"] },
      { texto: "Axolote", patos: ["Stoqui", "Louise"] },
      { texto: "Unicórnio", patos: ["Carol", "Lauro", "Vini"] },
      { texto: "Galinha", patos: ["Carol", "Gui"] },
      { texto: "Pombo", patos: ["Joao", "Ale"] },
    ]
  },
  {
    texto: "Qual seu rolê perfeito?",
    opcoes: [
      { texto: "Sair para comer", patos: ["Carol", "Louise"] },
      { texto: "Shopping", patos: ["Vini", "Stoqui"] },
      { texto: "Beber", patos: ["Isa", "Louise"] },
      { texto: "Encontrar amigos", patos: ["Gui", "Isa"] },
      { texto: "Ver carros", patos: ["Vini", "Louise", "Wilgner"] },
      { texto: "Eu não saio de casa", patos: ["Ale", "Joao"] },
      { texto: "Cinema/teatro", patos: ["Lauro"] },
    ]
  },
  {
    texto: "Você se estressa com facilidade?",
    opcoes: [
      { texto: "Porque você está perguntando isso? Eu pareço estressadx? *começa a chorar*", patos: ["Carol"] },
      { texto: "Para caralho", patos: ["Joao", "Louise", "Wilgner"] },
      { texto: "Digamos que tenho limites", patos: ["Isa", "Vini"] },
      { texto: "Pra me tirar do sério tem que se esforçar muito.", patos: ["Gui", "Ale"] },
      { texto: "Sei que todos estão dando seu melhor nessa vida, eu não me estresso", patos: ["Lauro"] },
    ]
  },
  {
    texto: "Qual seu jogo preferido?",
    opcoes: [
      { texto: "Genshin Impact", patos: ["Isa"] },
      { texto: "Minecraft", patos: ["Ale", "Stoqui"] },
      { texto: "The Witcher", patos: ["Joao"] },
      { texto: "Valorant", patos: ["Carol"] },
      { texto: "Jogo da vida", patos: ["Gui"] },
      { texto: "Jogo de carro", patos: ["Vini"] },
      { texto: "Outros", patos: ["Lauro"] },
      { texto: "Não tenho tempo pra isso não", patos: ["Louise", "Wilgner"] },
    ]
  },
  {
    texto: "Qual seu pensamento sobre sua vida?",
    opcoes: [
      { texto: "Preciso ficar rico antes dos 30", patos: ["Gui", "Wilgner"] },
      { texto: "Quero viver todas as boas experiências possíveis", patos: ["Carol", "Lauro"] },
      { texto: "Cada dia que passa é mais um dia perto do fim", patos: ["Joao"] },
      { texto: "Eu não sei... só estou seguindo um dia de cada vez", patos: ["Stoqui", "Isa"] },
      { texto: "Quanto mais velho fico mais paro de sonhar", patos: ["Vini", "Ale"] },
      { texto: "Melhor sozinho do que mal acompanhado", patos: ["Louise"] },
    ]
  },
  {
    texto: "Qual desses eventos você gostaria mais de ir?",
    opcoes: [
      { texto: "Visitar o quiropraxista", patos: ["Gui", "Isa"] },
      { texto: "Uma terapia pra desembaraçar meus pensamentos", patos: ["Carol", "Stoqui"] },
      { texto: "Ir numa exibição de vinho", patos: ["Louise", "Vini"] },
      { texto: "Reality show de namoro", patos: ["Wilgner"] },
      { texto: "Festa universitária", patos: ["Lauro", "Joao"] },
      { texto: "Nada compensa sair de casa", patos: ["Ale"] },
    ]
  }
];

const resultados = {
  "Carol": {
    texto: "🌸 Você é a Carol!",
    imagem: "carol.jpg"
  },
  "Joao": {
    texto: "🧠 Você é o João!",
    imagem: "joao.jpg"
  },
  "Lauro": {
    texto: "🔥 Você é o Lauro!",
    imagem: "lauro.jpg"
  },
  "Isa": {
    texto: "🌈 Você é a Isa!",
    imagem: "isa.jpg"
  },
  "Wilgner": {
    texto: "🛠️ Você é o Wilgner!",
    imagem: "wilgner.jpg"
  },
  "Vini": {
    texto: "🎭 Você é o Vini!",
    imagem: "vini.jpg"
  },
  "Louise": {
    texto: "🌿 Você é a Louise!",
    imagem: "louise.jpg"
  },
  "Stoqui": {
    texto: "🌀 Você é o Stoqui!",
    imagem: "stoqui.jpg"
  },
  "Gui": {
    texto: "⚽ Você é o Gui!",
    imagem: "gui.jpg"
  },
  "Ale": {
    texto: "📚 Você é o Ale!",
    imagem: "ale.jpg"
  }
};


let perguntaAtual = 0;
let pontuacao = {};

// Começar quiz
function comecarQuiz() {
  document.getElementById("tela-inicial").classList.add("escondido");
  document.getElementById("tela-perguntas").classList.remove("escondido");
  mostrarPergunta();
}

// Mostrar pergunta
function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  document.getElementById("pergunta-texto").textContent = pergunta.texto;

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  pergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.onclick = () => {
      registrarResposta(opcao.patos);
    };
    opcoesDiv.appendChild(botao);
  });
}

// Registrar resposta
function registrarResposta(patos) {
  patos.forEach(pato => {
    if (!pontuacao[pato]) {
      pontuacao[pato] = 0;
    }
    pontuacao[pato]++;
  });

  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("tela-perguntas").classList.add("escondido");
  document.getElementById("tela-resultado").classList.remove("escondido");

  let maisPontos = 0;
  let patoFinal = "";

  for (const pato in pontuacao) {
    if (pontuacao[pato] > maisPontos) {
      maisPontos = pontuacao[pato];
      patoFinal = pato;
    }
  }

  // Atualiza o texto
  document.getElementById("resultado-texto").textContent =
    resultados[patoFinal]?.texto || "🕵️ Você é um pato misterioso!";

  // Atualiza a imagem
  document.getElementById("imagem-resultado").src =
    resultados[patoFinal]?.imagem || "https://via.placeholder.com/150"; // imagem padrão, se não encontrar
}


// Reiniciar quiz
function reiniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = {};
  document.getElementById("tela-resultado").classList.add("escondido");
  document.getElementById("tela-inicial").classList.remove("escondido");
}
