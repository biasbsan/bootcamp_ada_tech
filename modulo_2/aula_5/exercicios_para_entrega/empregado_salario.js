const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]

let salario_maior_ou_igual1500 = false;

for (let i = 0; i < empregados.length; i++) {
  if (empregados[i].salario >= 1500) {
    salario_maior_ou_igual1500 = true;
    break;
  }
}

console.log("Pelo menos um empregado tem salário maior ou igual a R$ 1.500,00:", salario_maior_ou_igual1500);

let salario_maior_ou_igual1000 = false;

for (let i = 0; i < empregados.length; i++) {
  if (empregados[i].salario <= 1000) {
    salario_maior_ou_igual1000 = true;
    break;
  }
}

console.log("Pelo menos um empregado tem salário menor ou igual a R$ 1.000,00:", salario_maior_ou_igual1000);
