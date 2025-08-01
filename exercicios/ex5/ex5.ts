type Genero = "feminino"|"masculino";

interface Pessoa{
    nome:string,
    idade:number,
    genero:Genero

}
function apresentarPessoa(pessoa:Pessoa):string{
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}

const exemplo:Pessoa={
    nome: "Tainá",
    idade:23,
    genero:"feminino"
}

console.log(apresentarPessoa(exemplo))