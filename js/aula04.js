window.onload = function () {

    document.getElementById('btn').addEventListener('click', btn_click);

};

function btn_click() {

    /* ajax */

    /* criamos o objeto Request */
    let pedido = new XMLHttpRequest();

    // definir a função que vai atuar mediante a resposta
    pedido.onreadystatechange = function () {
        if (pedido.readyState == 4 && pedido.status == 200) {
            // document.getElementById('caixa').innerHTML = this.responseText;
            document.getElementById('caixa').innerHTML = pedido.responseText;
        } else {
            document.getElementById('caixa').innerHTML = "Tente mais tarde.";
        }
    }

    // pedido.open("GET", "dados/xdados04.txt", true);
    pedido.open("GET", "dados/dados_lorem.txt", true);
    pedido.send();

}
