const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2 // Índice da resposta correta (respostas[2] === "const myVar;")
    },
    {
      pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        ".pop()",
        ".shift()",
        ".splice()"
      ],
      correta: 0 // Índice da resposta correta (respostas[0] === ".pop()")
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log()"
      ],
      correta: 0 // Índice da resposta correta (respostas[0] === "console.log()")
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===", 
        "!="
      ],
      correta: 1 // Índice da resposta correta (respostas[1] === "===")
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar novos elementos ao final de um array em JavaScript?",
      respostas: [
        ".push()",
        ".concat()",
        ".join()"
      ],
      correta: 0 // Índice da resposta correta (respostas[0] === ".push()")
    },
    {
      pergunta: "Qual é a função JavaScript que é usada para verificar se uma variável não está definida?",
      respostas: [
        "isNaN()",
        "isUndefined()",
        "typeof undefined"
      ],
      correta: 2 // Índice da resposta correta (respostas[2] === "typeof undefined")
    },
    {
      pergunta: "Qual método é usado para converter uma string para um número em JavaScript?",
      respostas: [
        ".toInt()",
        ".parseInteger()",
        "parseInt()"
      ],
      correta: 2 // Índice da resposta correta (respostas[2] === "parseInt()")
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para remover o primeiro elemento de um array em JavaScript?",
      respostas: [
        ".shift()",
        ".pop()",
        ".slice()"
      ],
      correta: 0 // Índice da resposta correta (respostas[0] === ".shift()")
    },
    {
      pergunta: "Como você faz um loop através de um objeto em JavaScript?",
      respostas: [
        "for (var key in obj)",
        "for (var i = 0; i < obj.length; i++)",
        "forEach()"
      ],
      correta: 0 // Índice da resposta correta (respostas[0] === "for (var key in obj)")
    },
    {
      pergunta: "Qual é a saída do seguinte código JavaScript?\n\nconsole.log(typeof null);",
      respostas: [
        "'object'",
        "'null'",
        "'undefined'"
      ],
      correta: 0 // Índice da resposta correta (respostas[0] === "'object'")
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