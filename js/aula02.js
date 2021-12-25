window.onload = function () {

    document.getElementById('btn').addEventListener('click', btn_click);

};

function btn_click() {

    // document.getElementById("caixa").innerHTML = "Este é o texto alterado";

    /* ajax */

    /* criamos o objeto Request */
    let pedido = new XMLHttpRequest();

    /* definir a função que vai atuar mediante a resposta */
    pedido.onreadystatechange = function () {
        document.getElementById('caixa').innerHTML = this.responseText;
    }

    pedido.open("GET", "dados/dados.txt", true);
    pedido.send();

}
