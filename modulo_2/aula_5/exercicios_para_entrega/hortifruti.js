const fruta = [
    'banana ',
    'Maçã',
    ' abacaxi',
    'melancia',
    'laranja',
    'limão',
]

const legume = [
    'cenoura',
    'batata',
    'brócolis',
    'abobora',
    'tomate',
    'alho-poró'
]

const verdura = [
    'alface',
    'espinafre',
    'rúcula',
    'couve',
    'agrião',
    'acelga'
]

const hortifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

var qtd_frutas = 0;
var qtd_legumes = 0;
var qtd_verduras = 0;

for (let i = 0; i < hortifrutis.length; i++) {

    // hortifrutis[i] é fruta?
    // Se for fruta, soma 1 no total de frutas
    for (j = 0; j < fruta.length; j++) {
        if (normalizaTexto(hortifrutis[i]) == normalizaTexto(fruta[j])) {
            qtd_frutas++;
        } 
    }
    
    

    // hortifrutis[i] é legume?
    // Se for legume, soma 1 no total de legumes
    for (j = 0; j < legume.length; j++) {
        if (normalizaTexto(hortifrutis[i]) == normalizaTexto(legume[j])) {
            qtd_legumes++;
        }  
    }

    // hortifrutis[i] é verdura?
    // Se for verdura, soma 1 no total de verduras
    for (j = 0; j < verdura.length; j++) {
        if (normalizaTexto(hortifrutis[i]) == normalizaTexto(verdura[j])) {
            qtd_verduras++;
        } 
    }

    console.log(i, '-', hortifrutis[i]);
}

console.log('Frutas:', qtd_frutas);
console.log('Legumes:', qtd_legumes);
console.log('Verduras:', qtd_verduras);

function normalizaTexto(texto) {
    return texto.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
