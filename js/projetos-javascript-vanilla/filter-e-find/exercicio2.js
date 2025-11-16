/*
Use o array de objetos usuarios para os exercícios:
const usuarios = [
    { nome: 'Alice', idade: 28, ativo: true },
    { nome: 'Bob', idade: 19, ativo: false },
    { nome: 'Charlie', idade: 35, ativo: true },
    { nome: 'David', idade: 17, ativo: false },
    { nome: 'Eve', idade: 28, ativo: true }
];

filter()
- Usuários Ativos: Filtre e retorne um array contendo apenas os usuários que estão com o status ativo: true.

- Usuários Adultos: Filtre e retorne um array contendo os usuários com idade igual ou superior a 18 anos.

find()
- Usuário por Nome: Encontre e retorne o objeto do usuário cujo nome é 'Charlie'.

- Primeiro Usuário de 28 Anos: Encontre e retorne o primeiro objeto de usuário cuja idade é exatamente 28.
*/

const usuarios = [
    { nome: 'Alice', idade: 28, ativo: true },
    { nome: 'Bob', idade: 19, ativo: false },
    { nome: 'Charlie', idade: 35, ativo: true },
    { nome: 'David', idade: 17, ativo: false },
    { nome: 'Eve', idade: 28, ativo: true }
];

let usuariosAtivos = usuarios.filter(usuario => {
  return usuario.ativo == true
})

let usuariosAdultos = usuarios.filter(usuario => {
  return usuario.idade >= 18
})

let usuarioCharlie = usuarios.find(usuario => {
  return usuario.nome == 'Charlie'
}) 

let usuarioVinteOitoAnos = usuarios.find(usuario => {
  return usuario.idade == 28
})

console.log(usuariosAtivos)
console.log(usuariosAdultos)
console.log(usuarioCharlie)
console.log(usuarioVinteOitoAnos)
