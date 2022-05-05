//nome de classe sempre começa com letra maiúscula 
class Cliente {
    // o construtor recebe os parametros necessários para construir um cliente
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    //método ou função
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new Cliente("André", "adre@email.com", "12345678900", 100);

andre.exibirSaldo()
//console.log(andre)