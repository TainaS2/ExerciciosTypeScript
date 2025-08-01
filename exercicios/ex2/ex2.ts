type StatusRequisicao= "sucesso"|"erro"|"carregando";

function mostrarMensagemStatus(status: StatusRequisicao):string{
    if (status=="carregando"){
        return "Aguarde... carregando dados."
    }else if(status=="erro"){
        return "Ocorreu um erro!"
    }else if(status=="sucesso"){
        return "A requisição foi um sucesso"
    }else{
        return "Status desconhecido"
    }
}
console.log(mostrarMensagemStatus("carregando"));
console.log(mostrarMensagemStatus("sucesso")); 
console.log(mostrarMensagemStatus("erro"));   