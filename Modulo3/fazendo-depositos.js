const cliente = {
    nome:"Tayná",
    idade:"26",
    cpf:"85642315468",
    email:"tayna@email.com",
    fones:["55912345498", "1121988743124"],
    dependentes: [
        {
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"},
        {
        nome: "Samara Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    },
    saque:function(valor){
        this.saldo -= valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)
console.log(cliente.saldo)

cliente.saque(20)
console.log(cliente.saldo)


