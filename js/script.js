let listaVetor = ['banana', 'maçã', 'pera', 'morango', 'melancia', 'uva'];
let itemNumber = 1


console.log(`\nmétodos de vetores, objetos e funções\n`);
// Função SETA - Arrow function
listaVetor.forEach( (item) =>
{
    console.log(`Fruta ${itemNumber}: ${item}`);
    itemNumber++;
}
);

console.log(`\nO tamanho do vetor é de: ${listaVetor.length} elementos.`);
console.log(`O terceiro item é ${listaVetor[2]}.`);
// _______________________________________________________________________



console.log('\n\nFiltro de frutas com a letra M\n');
// Metodo FILTER - Apenas items que começam com a letra M (Começa com M: True, se não: False)
let itensLetraM = listaVetor.filter( function(item)
{
    return item.startsWith('m');
}
);

itensLetraM.forEach( (item) =>
{
    console.log(item);
}
);
// _______________________________________________________________________



console.log(`\n\nVetor de números\n`);
// Impressão de números 
let numeros = [7, 5, 3, 8, 9, 4];
numeros.forEach( (numero) => 
{
    console.log(numero);
}
);
// _______________________________________________________________________



console.log('\n\nMétodo MAP')
// Método MAP - Função anônima, cria novo array
let numerosDobrados = numeros.map( function(numero) 
{
    return numero * 2;
}
);
console.log(numerosDobrados);
// _______________________________________________________________________



console.log(`\n\nMétodo POP`);
// Retirar ultimo elemento do array utilizando o método
numeros.pop();
numeros.forEach( (numero) => 
{
    console.log(numero);
}
);
// _______________________________________________________________________



console.log(`\n\nMétodo PUSH`);
// Inserir elemento do array utilizando o método PUSH(troca o ultimo elemento)
numeros.push(`string de números, tipagem dinamica`);
numeros.forEach( (numero) => 
{
    console.log(numero);
}
);
// _______________________________________________________________________



// OBJETOS

// Criação de objeto - OBJECT LITERALS
let endereco =
{
    rua: 'Moreira de Godói',
    numero: '77',
    cep: '06752-455',
    bairro: 'Ipiranga',
    cidade: 'São Paulo'
}
// Bracket Notation (notação do colchete)
console.log(`\n\nrua: ${endereco['rua']}`);
console.log(`Cidade: ${endereco['cidade']}`);

// Dot Notation (notação do ponto)
console.log(`\n\nrua: ${endereco.rua}`);
console.log(`Cidade: ${endereco.cidade}`);

// Imprimir no HTML
// document.write(`rua: ${endereco.rua}`);
// document.write(`Cidade: ${endereco.cidade}`);



// Declaração de função que percorre e imprime o nome da propriedade e valor
function mostraEndereco(endereco)
{
    for (let campo in endereco)
    {
        console.log(campo, endereco[campo]);
    }
}
function mostraEndereco(endereco)

