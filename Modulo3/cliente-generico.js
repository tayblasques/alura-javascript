// função construtora
function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
            //usando new basta passar os valores para os objetos que existem na função
const tayna = new cliente("Tayná", "4896547891", "tayna@email.com", 100)
console.log(tayna)