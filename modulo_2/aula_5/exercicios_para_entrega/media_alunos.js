const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
]
let media_alunos = new Map();
for (let i = 0; i < alunos.length; i++){
    let soma = alunos[i].notas.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0
    )
    let media = soma / alunos[i].notas.length
    media_alunos.set(alunos[i].nome, media)
}

media_alunos.forEach(
    (value, key) => {
        console.log(`A média do aluno ${key} é ${value}`)
    }
)

// for (let [key, value] of media_alunos) {
//     console.log(`A média do aluno ${key} é ${value}`)
// }