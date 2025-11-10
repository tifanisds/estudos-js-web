# Controle de Tempo no JavaScript — setTimeout e setInterval

--- 

Compreender profundamente como funcionam os temporizadores do JavaScript, aprender a controlar execuções assíncronas baseadas no tempo, e entender suas limitações, performance e relação com o event loop.

---

## Fundamentos de Temporização

### O que são temporizadores
Temporizadores são funções que permitem atrasar ou repetir a execução de um código no JavaScript, depois de um determinado intervalo de tempo (em milissegundos).

Eles são parte da Web API (ou do ambiente Node.js), não da linguagem JavaScript em si, o que significa que o motor JS não sabe “esperar sozinho”, mas o navegador (ou Node) consegue cuidar disso.

### Por que precisamos de temporizadores?
Eles são usados quando não queremos que algo aconteça imediatamente, mas em um momento futuro ou de tempos em tempos.

Exemplos:
- Mostrar uma mensagem depois de alguns segundos.
- Criar um cronômetro que atualiza o tempo na tela.
- Fazer uma animação “piscar” a cada segundo.
- Aguardar uma resposta simulada de um servidor.

### setTimeout() — executa uma única vez, depois de um tempo
O setTimeout() serve para adiar a execução de um bloco de código.

`setTimeout(função, tempoEmMilissegundos);`

### setInterval() — executa repetidamente, em intervalos fixos
O setInterval() serve para repetir uma ação a cada X milissegundos.

`setInterval(função, tempoEmMilissegundos);`

## Estrutura e Sintaxe
```js
// setTimeout
const timeoutId = setTimeout(callback, delay);

// setInterval
const intervalId = setInterval(callback, delay);

```

- callback — função a ser executada (pode ser função nomeada, função anônima, arrow).
- delay — tempo em milissegundos antes da execução (ou entre execuções).

Exemplo real:

```js
// após 1s: "Olá Tifani"
setTimeout(() => {
    console.log("Olá Tífani")
}, 1000);

// de 1s em 1s: "Olá Tifani"    
setInterval(() => {
    Console.log("Olá Tifani")
}, 1000)

```

### Execução: única vs repetida
- setTimeout — executa o callback uma vez, após delay.
- setInterval — executa repetidamente, a cada delay (até cancelar).

## Cancelando Temporizadores
Quando usamos setTimeout() ou setInterval(), criamos tarefas agendadas para o futuro.
Mas às vezes, queremos interromper essas tarefas

por exemplo:
- o usuário fechou uma janela/modal, e o temporizador não faz mais sentido;
- queremos evitar loops infinitos ou tarefas desnecessárias;
- queremos economizar processamento quando algo não precisa mais ser atualizado

### As funções usadas para cancelar
#### clearTimeout(id)
Cancela um temporizador criado com setTimeout().
```js
const id = setTimeout(() => {
  console.log("Isso nunca será executado!");
}, 2000);

clearTimeout(id); // cancela antes de rodar

```

#### clearInterval(id)
Cancela um temporizador criado com setInterval().
```js
let count = 0;
const id = setInterval(() => {
  console.log("Contando:", count++);
  if (count > 5) clearInterval(id); // cancela após 6 execuções
}, 1000);

```

### Quando usar o cancelamento
| Situação                  | Por que cancelar?                                        |
| ------------------------- | -------------------------------------------------------- |
| Loop com `setInterval`    | Evitar que rode para sempre                              |
| Página muda / modal fecha | O conteúdo já saiu da tela                               |
| Operação foi concluída    | Não há mais necessidade de agendar tarefas               |
| Para limpar recursos      | Evitar consumo de memória ou processamento desnecessário |


## Diferenças entre setTimeout e setInterval
| Característica                                   | setTimeout | setInterval |
| ------------------------------------------------ | ---------- | ----------- |
| Executa apenas uma vez                           | ✅          | ❌           |
| Executa continuamente                            | ❌          | ✅           |
| Pode ser usado para loops manuais (com recursão) | ✅          | ✅           |
| Mais previsível em operações demoradas           | ✅          | ❌           |
 
