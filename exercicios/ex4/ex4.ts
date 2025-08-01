interface Usuario{
    nome:string,
    email:string,
    exibirInfo():string
}

const exemplo:Usuario ={
    nome:"Tainá",
    email:"tatatrdcouto@gmail.com",
    exibirInfo(){
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
}

console.log(exemplo.exibirInfo());