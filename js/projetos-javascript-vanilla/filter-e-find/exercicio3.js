/*
Use o array de objetos produtos para os exercícios:

const produtos = [
    { nome: 'Teclado Mecânico', preco: 450, categoria: 'Periféricos' },
    { nome: 'Monitor UltraWide', preco: 1800, categoria: 'Monitores' },
    { nome: 'Mouse Sem Fio', preco: 120, categoria: 'Periféricos' },
    { nome: 'Laptop Gamer', preco: 5000, categoria: 'Computadores' },
    { nome: 'Teclado Simples', preco: 80, categoria: 'Periféricos' }
];

filter()
- Produtos de Baixo Custo: Filtre e retorne um array com produtos que tenham o preco abaixo de 500 E pertençam à categoria 'Periféricos'. (Use o operador &&).

- Produtos Caros: Filtre e retorne um array contendo produtos com preco maior ou igual a 1000 OU que sejam da categoria 'Computadores'. (Use o operador ||).

find()
- Produto Específico: Encontre e retorne o objeto do produto cujo nome começa com a letra 'M'. (Dica: use startsWith()).

- Primeiro Produto Barato e Simples: Encontre e retorne o primeiro produto que tenha o preco abaixo de 100 E que pertença à categoria 'Periféricos'.
*/

const produtos = [
    { nome: 'Teclado Mecânico', preco: 450, categoria: 'Periféricos' },
    { nome: 'Monitor UltraWide', preco: 1800, categoria: 'Monitores' },
    { nome: 'Mouse Sem Fio', preco: 120, categoria: 'Periféricos' },
    { nome: 'Laptop Gamer', preco: 5000, categoria: 'Computadores' },
    { nome: 'Teclado Simples', preco: 80, categoria: 'Periféricos' }
]

let produtosBaixoCusto = produtos.filter(produto => {
  return produto.preco < 500 && produto.categoria == 'Periféricos'
})

let produtosCaros = produtos.filter(produto => {
  return produto.preco >= 1000 || produto.categoria == 'Computadores'
})

let produtoEspecífico = produtos.find(produto => {
  return produto.nome[0] == 'M'

  // Também podendo usar: return produto.nome.startsWith('M')
})

let primeiroProdutoBarato = produtos.find(produto => {
  return produto.preco < 100 && produto.categoria == 'Periféricos'
})

console.log(produtosBaixoCusto)
console.log(produtosCaros)
console.log(produtoEspecífico)
console.log(primeiroProdutoBarato)
