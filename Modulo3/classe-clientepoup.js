class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

//extends define que a classe ClientePoup está herdando propriedades da classe Cliente
class ClientePoup extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        //no super deve ser informado as propriedades que devem ser herdadas da classe Cliente
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const andre = new ClientePoup("Andre", "andre@email.com", "12345678900", 100, 200)
console.log(andre)

andre.depositar(50)
andre.depositarPoup(50)

console.log(andre)