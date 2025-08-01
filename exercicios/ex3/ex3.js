"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resumirLivro(livro) {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`;
}
const exemplo = {
    titulo: "A seleção",
    autor: "Kiera Cass",
    anoPublicacao: 2012,
};
console.log(resumirLivro(exemplo));
//# sourceMappingURL=ex3.js.map