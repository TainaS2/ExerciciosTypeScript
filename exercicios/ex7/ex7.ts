interface RespostaAPI<T>{
    dados:T;
    sucesso:boolean;
}

const resp1:RespostaAPI<string>={
    dados:'OK',
    sucesso:true
}

const resp2:RespostaAPI<number[]>={
    dados:[1,2,3],
    sucesso:false
}
console.log(resp1);
console.log(resp2);