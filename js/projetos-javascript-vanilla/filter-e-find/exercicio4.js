/*
Use os seguintes arrays de dados para todos os exercícios abaixo:

const alunos = [
    { nome: 'Ana', matricula: 2023001, nota: 8.5, curso: 'ADS', status: 'Ativo' },
    { nome: 'Bruno', matricula: 2023002, nota: 4.0, curso: 'ADS', status: 'Inativo' },
    { nome: 'Carla', matricula: 2023003, nota: 9.2, curso: 'Direito', status: 'Ativo' },
    { nome: 'Daniel', matricula: 2023004, nota: 6.0, curso: 'Direito', status: 'Ativo' },
    { nome: 'Eduardo', matricula: 2023005, nota: 7.0, curso: 'ADS', status: 'Ativo' },
    { nome: 'Fernanda', matricula: 2023006, nota: 5.8, curso: 'Direito', status: 'Ativo' }
];

Desafios de filter() (Múltiplos Resultados)
- Aprovados em ADS: Filtre e retorne um array com todos os alunos do curso 'ADS' que obtiveram nota maior ou igual a 7.0.

- Quase Reprovados: Filtre e retorne um array com os alunos que obtiveram nota entre 5.0 (inclusivo) e 6.9 (inclusivo), independentemente do curso.

- Alunos Inativos de Direito: Filtre e retorne um array com alunos que estão com o status 'Inativo' OU que pertençam ao curso 'Direito'. (Cuidado com a lógica OU aqui).

Desafios de find() (Resultado Único)
- Aluno por Matrícula: Encontre e retorne o objeto do aluno cuja matricula é exatamente 2023005.

- Primeiro Reprovado: Encontre e retorne o primeiro aluno na lista que tenha a nota estritamente menor que 6.0.

- Aluno com Nome Específico: Encontre e retorne o objeto do aluno cujo nome começa com a letra 'C' e que possui nota acima de 9.0.
*/

const alunos = [
    { nome: 'Ana', matricula: 2023001, nota: 8.5, curso: 'ADS', status: 'Ativo' },
    { nome: 'Bruno', matricula: 2023002, nota: 4.0, curso: 'ADS', status: 'Inativo' },
    { nome: 'Carla', matricula: 2023003, nota: 9.2, curso: 'Direito', status: 'Ativo' },
    { nome: 'Daniel', matricula: 2023004, nota: 6.0, curso: 'Direito', status: 'Ativo' },
    { nome: 'Eduardo', matricula: 2023005, nota: 7.0, curso: 'ADS', status: 'Ativo' },
    { nome: 'Fernanda', matricula: 2023006, nota: 5.8, curso: 'Direito', status: 'Ativo' }
]

const aprovadosEmADS = alunos.filter(aluno => {
  return aluno.curso == 'ADS' && aluno.nota >= 7.0
})

const quaseReprovados = alunos.filter(aluno => {
  return aluno.nota >= 5.0 && aluno.nota <= 6.9
})

const inativosDeDireito = alunos.filter(aluno => {
  return aluno.curso == 'Direito' || aluno.status == 'Inativo'
})

const alunoPorMatricula = alunos.find(aluno => {
  return aluno.matricula == 2023005
})

const primeiroReprovado = alunos.find(aluno => {
  return aluno.nota < 6.0
})

const alunoComNomeEspecífico = alunos.find(aluno => {
  return aluno.nome[0] == 'C' && aluno.nota > 9.0 
})

console.log(aprovadosEmADS)
console.log(quaseReprovados)
console.log(inativosDeDireito)
console.log(alunoPorMatricula)
console.log(primeiroReprovado)
console.log(alunoComNomeEspecífico)


