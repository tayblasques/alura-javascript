const cliente = {
    nome:"Tayná",
    idade:"26",
    cpf:"85642315468",
    email:"tayna@email.com",
    fones:["55912345498", "1121988743124"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

//transformamos o obj dependentes em um array adicionando []
//adicionando um novo objeto dentro do array dependentes
cliente.dependentes.push({
    nome: "Samara Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")
console.log(filhaMaisNova[0].nome)