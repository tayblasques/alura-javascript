function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    //call clientePoupanca vai herdar as propriedades de cliente
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const juliana = new clientePoupanca("Juliana", "4567891234", "juliana@email.com", 100, 200)
console.log(juliana)

// definindo no protótipo da função clientePoupanca uma nova função/comportamento
clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

juliana.depositarPoup(30)
console.log(juliana.saldoPoup)