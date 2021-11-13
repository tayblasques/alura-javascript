function apresentar (nome) {
    return `meu nome é ${nome}`;
}

//Arrow Function
// não pode ser nomeada
// sempre deve conter uma const

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;


//Arrow function com mais de uma linha de instrução e if

const somaNumPequenos = (numero1, numero2) => {
    if (numero1 || numero2 > 10){
        return "somente numeros de 1 a 9"
    } else {
        return numero1 + numero2;
    }
}