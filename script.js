// // Crie um objeto que receba ao menos três propriedades sobre você.
// let info = {
//     nome: 'Robson',
//     sobrenome: 'Lima',
//     altura: 1.74   
// }

// // Adicione uma nova propriedade sem alterar seu objeto inicial.
// info.sexo = "Masculino"

// // Remova uma propriedade desse objeto.
// delete info.altura

// //Mostre no console todas as propriedades desse objeto.
// console.log(info)

// // Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

let cadastro = [{
    nome: 'Robson',
    idade: 40 ,
    telefone: 11976970497,
    amigos:['Anitta', 'Neymar', 'Ronaldinho', 'Faustão']
},{
    nome: 'Isabela',
    idade: 9,
    telefone: 11976970497,   
    amigos:['Ludmila', 'Cristiano', 'Ronaldo', 'Eliana']
},{
    nome: 'Paçoca',
    idade: 9 ,
    telefone: 11976970497,
    amigos:['Fofão', 'Roberval', 'Hulk', 'Thor']

},{
    nome: 'Neo',
    idade: 30,
    telefone: 01010101010,
    amigos:['Morpheus', 'Trinity', 'Oráculo', 'Dozer']

},{
    nome: 'Trinity',
    idade: 30,
    telefone: 01010101010,
    amigos: ['Trinity', 'Neo', 'Morpheus', 'Tank']
}]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[1])