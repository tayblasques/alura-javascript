const cliente = {
    nome:"Tayná",
    idade:"26",
    cpf:"85642315468",
    email:"tayna@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
//notação de colchetes -> quando se usa objeto com array
//console.log(cliente[chaves[0]])

//chamei o array e fiz um forEach para que todos os dados fossem printados
chaves.forEach(info => console.log(cliente[info]))