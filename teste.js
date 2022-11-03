const pessoas = [
    { nome: "Fabiana Araújo", idade: 33 },
    { nome: "Gabriel Gomes", idade: 25 },
    { nome: "Fernando Henrique", idade: 17 },
    { nome: "Ana Luiza", idade: 2 },
    { nome: "Geralda do Nascimento", idade: 93 },
    { nome: "Miguel Souza", idade: 70 },
    { nome: "Antonio Miguel", idade: 69 },
];

function buscaPorNome(pessoa) {
    for (var num = 0; num < pessoas.length; num++) { // percorre o array pessoas
        if (pessoas[num].nome === pessoa) {
            return pessoas[num];
        }
    }
}

function nomes() {
    var retorno = [];
    for (var num = 0; num < pessoas.length; num++) { // percorre o array pessoas
        var aux1 = '';
        for (var j = 0; j < pessoas[num].nome.length; j++) { // percorre o nome
            if (pessoas[num].nome.charAt(j) != ' ') { // verificar se terminou o primeiro nome
                aux1 += pessoas[num].nome.charAt(j);
            } else {
                break;
            }
        }
        retorno[num] = aux1;
    }
    return retorno;
}

function insiraID() {
    var retorno = [];
    for (var num = 0; num < pessoas.length; num++) { // percorre o array pessoas
        aux = { id: (num + 1), nome: pessoas[num].nome, idade: pessoas[num].idade };
        retorno[num] = aux;
    }
    return retorno;
}

function habilitacao() {
    var aux = [];
    var i = 0;
    for (var num = 0; num < pessoas.length; num++) { // percorre o array pessoas
        if (pessoas[num].idade >= 18) { // verifica se é maior
            aux[i] = pessoas[num];
            i++;
        }
    }
    return aux;
}

function mediaIdades() {
    var aux = 0;
    for (var num = 0; num < pessoas.length; num++) { // percorre o array pessoas
        aux += pessoas[num].idade;
    }
    return (aux/pessoas.length);
}