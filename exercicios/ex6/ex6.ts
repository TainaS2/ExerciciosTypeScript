function retornarElemento<T>(array:T[],index:number){
    return array[index];
}

const numb= [20,35,50];
console.log(retornarElemento(numb,1));

const letras = ['a','r','t'];
console.log(retornarElemento(letras,2))