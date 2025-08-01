interface Livro{
    titulo:string,
    autor:string;
    anoPublicacao:number
}

function resumirLivro(livro:Livro):string{
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`;
}

const exemplo: Livro = {
    titulo: "A seleção",
    autor: "Kiera Cass",
    anoPublicacao: 2012,
};

console.log(resumirLivro(exemplo));