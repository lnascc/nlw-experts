const perguntas = [
  {
    pergunta: "Quando começou a Segunda Guerra Mundial?",
    respostas: [
      "1939",
      "1941",
      "1945"
    ],
    correta: 0 // Resposta A: 1939
  },
  {
    pergunta: "Qual país foi invadido pela Alemanha nazista em 1940, levando à evacuação de tropas britânicas de Dunquerque?",
    respostas: [
      "França",
      "Itália",
      "Holanda"
    ],
    correta: 0 // Resposta A: França
  },
  {
    pergunta: "Qual batalha é considerada a virada da guerra a favor dos Aliados na Frente Oriental?",
    respostas: [
      "Batalha de Stalingrado",
      "Batalha de Kursk",
      "Batalha de Berlim"
    ],
    correta: 0 // Resposta A: Batalha de Stalingrado
  },
  {
    pergunta: "Qual foi o nome dado ao plano de invasão da União Soviética pela Alemanha nazista em 1941?",
    respostas: [
      "Operação Barbarossa",
      "Operação Overlord",
      "Operação Market Garden"
    ],
    correta: 0 // Resposta A: Operação Barbarossa
  },
  {
    pergunta: "Qual foi a última grande ofensiva alemã na Frente Ocidental, que terminou em uma derrota decisiva para os alemães?",
    respostas: [
      "Batalha das Ardenas",
      "Batalha de Bulge",
      "Batalha de Kursk"
    ],
    correta: 0 // Resposta A: Batalha das Ardenas
  },
  {
    pergunta: "Qual evento histórico levou os Estados Unidos a entrar na Segunda Guerra Mundial?",
    respostas: [
      "Ataque a Pearl Harbor",
      "Bombardeio de Dresden",
      "Invasão da Polônia"
    ],
    correta: 0 // Resposta A: Ataque a Pearl Harbor
  },
  {
    pergunta: "Qual cidade japonesa foi alvo do primeiro ataque nuclear na história durante a Segunda Guerra Mundial?",
    respostas: [
      "Hiroshima",
      "Nagasaki",
      "Tóquio"
    ],
    correta: 0 // Resposta A: Hiroshima
  },
  {
    pergunta: "Em que ano ocorreu o Dia D, a invasão Aliada da Normandia?",
    respostas: [
      "1944",
      "1942",
      "1945"
    ],
    correta: 0 // Resposta A: 1944
  },
  {
    pergunta: "Quem foi o líder da Alemanha nazista durante a Segunda Guerra Mundial?",
    respostas: [
      "Adolf Hitler",
      "Benito Mussolini",
      "Winston Churchill"
    ],
    correta: 0 // Resposta A: Adolf Hitler
  },
  {
    pergunta: "Que tratado formalizou a aliança entre Alemanha, Itália e Japão durante a Segunda Guerra Mundial?",
    respostas: [
      "Pacto Tripartite",
      "Tratado de Versalhes",
      "Tratado de Não-Agressão Germano-Soviético"
    ],
    correta: 0 // Resposta A: Pacto Tripartite
  }
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
       
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' +totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }