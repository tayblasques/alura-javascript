const cliente = {
    nome:"Tayná",
    idade:"26",
    cpf:"85642315468",
    email:"tayna@email.com",
    fones:["55912345498", "1121988743124"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

//alterando a propriedade nome dentro do obj dependentes, dentro do obj cliente
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)