"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}
const exemplo = {
    nome: "Tainá",
    idade: 23,
    genero: "feminino"
};
console.log(apresentarPessoa(exemplo));
//# sourceMappingURL=ex5.js.map