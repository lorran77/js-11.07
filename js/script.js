let listaVetor = ['banana', 'maçã', 'pera', 'morango', 'melancia', 'uva'];
let itemNumber = 1


console.log(`\nmétodos de vetores, objetos e funções\n`);
// Função SETA - Arrow function
listaVetor.forEach((item) => {
    console.log(`Fruta ${itemNumber}: ${item}`);
    itemNumber++;
}
);

console.log(`\nO tamanho do vetor é de: ${listaVetor.length} elementos.`);
console.log(`O terceiro item é ${listaVetor[2]}.`);
// _______________________________________________________________________



console.log('\n\nFiltro de frutas com a letra M\n');
// Metodo FILTER - Apenas items que começam com a letra M (Começa com M: True, se não: False)
let itensLetraM = listaVetor.filter(function (item) {
    return item.startsWith('m');
}
);

itensLetraM.forEach((item) => {
    console.log(item);
}
);
// _______________________________________________________________________



console.log(`\n\nVetor de números\n`);
// Impressão de números 
let numeros = [7, 5, 3, 8, 9, 4];
numeros.forEach((numero) => {
    console.log(numero);
}
);
// _______________________________________________________________________



console.log('\n\nMétodo MAP')
// Método MAP - Função anônima, cria novo array
let numerosDobrados = numeros.map(function (numero) {
    return numero * 2;
}
);
console.log(numerosDobrados);
// _______________________________________________________________________



console.log(`\n\nMétodo POP`);
// Retirar ultimo elemento do array utilizando o método
numeros.pop();
numeros.forEach((numero) => {
    console.log(numero);
}
);
// _______________________________________________________________________



console.log(`\n\nMétodo PUSH`);
// Inserir elemento do array utilizando o método PUSH(troca o ultimo elemento)
numeros.push(`string de números, tipagem dinamica`);
numeros.forEach((numero) => {
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
console.log(`Cidade: ${endereco.cidade} \n\n`);

// Imprimir no HTML
// document.write(`rua: ${endereco.rua}`);
// document.write(`Cidade: ${endereco.cidade}`);

// _______________________________________________________________________



console.log('\n\nFor in\n')
// Declaração de função que percorre e imprime o nome da propriedade e valor
function mostraEndereco(endereco) {
    for (let campo in endereco)
        console.log(campo, endereco[campo]);
}

mostraEndereco(endereco);
// _______________________________________________________________________



console.log('\n\nFactory function\n')
// Factory function - Criar objetos
function criarEndereco(rua, numero, cep, bairro, cidade) {
    return { rua, numero, cep, bairro, cidade }
}
// criando novo objeto
let endereco2 = criarEndereco('Nazare', 123, 9087777, 'mooca', 'rio de janeiro');
let endereco3 = criarEndereco('Socorro', '321', '3434567', 'Taboão', 'São Paulo');

// imprimir
mostraEndereco(endereco2)
console.log('');
mostraEndereco(endereco3)
// _______________________________________________________________________



console.log('\n\nConstructor function\n')
//Constructor function - função construtor
//atenção: pascal-case, uso de THIS, ponto e virgula
function Endereco(rua, numero, cep, bairro, cidade) {
    this.rua = rua;
    this.numero = numero;
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
}

//chamada da função construtor:
let endereco4 = new Endereco('das laranjas', '111', '98765438', 'Penha', 'Curitiba');

//imprimindo os valores:
mostraEndereco(endereco4);
// _______________________________________________________________________



console.log('\n\nlistas de objetos\n');

let produtos =
    [
        { id: 1, nome: 'sapato', cor: 'preto\n' },
        { id: 2, nome: 'sandalia', cor: 'marron\n' },
        { id: 3, nome: 'chinelo', cor: 'azul\n' }
    ]



//imprimir: 4 opções
produtos.forEach(produto => mostraEndereco(produto));
// _______________________________________________________________________



//Lista inserida no HTML innerhtml
function mostraEnderec(produtos) {
    for (let cadacampo of produtos) {
        for (let item in cadacampo) {

        document.write(item, cadacampo[item]);
        // let listinha = document.createElement('li').value = (item, cadacampo[item]);
        // document.write(listinha);
        };
    };
};
mostraEnderec(produtos);
// _______________________________________________________________________








