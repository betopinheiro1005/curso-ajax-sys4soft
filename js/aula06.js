function fnajax(url, funcao) {

    /* criamos o objeto Request */
    let pedido = new XMLHttpRequest();

    /* resposta */
    pedido.onreadystatechange = function () {
        if (pedido.readyState == 4 && pedido.status == 200) {
            funcao(pedido);
        }
    }

    /* enviar o pedido */
    
    pedido.open("GET", url, true);
    pedido.send();

}

function cmd1(p){
    document.getElementById('caixa1').innerHTML = p.responseText;
}

function cmd2(p){
    document.getElementById('caixa2').innerHTML = p.responseText;
}


