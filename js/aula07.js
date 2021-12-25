function executar() {

    /* Ajax */
    
    /* criamos o objeto Request */
    let pedido = new XMLHttpRequest();

    /* resposta */
    pedido.onreadystatechange = function() {
        /* verificar o estado da resposta */
        if (this.readyState == 4 && this.status == 200) {
            /* tratamento dos dados */
            let dados = this.responseXML;
            let clientes = dados.getElementsByTagName("cliente");
            //alert(clientes.length);
            let conteudo = '<h3>CLIENTES</h3>';
            /* definir a apresentação dos dados */
            
            for(let i=0; i < clientes.length; i++){
                conteudo += '<p>Nome: ' + clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + '</p>';
                conteudo += '<p>Contacto: ' + clientes[i].getElementsByTagName("contacto")[0].childNodes[0].nodeValue + '</p>';
                conteudo += '<hr />';
            }
            
            document.getElementById('caixa1').innerHTML = conteudo;
        }
    }

    /* pedido */
    
    pedido.open("GET", "dados/dados.xml", true);
    pedido.send();

    

}

