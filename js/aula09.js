$(document).ready(function () {
    $("#btn_cmd").click(function () {
        // $("#caixa").load('dados/dados.html');
        // $("#caixa").load('dados/dados.html #p3');
        // $("#caixa").load('dados/dados.html', function(responseTxt, statusTxt, xhr){
        $("#caixa").load('dados/xdados.html', function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success"){
                alert('Comunicação realizada com sucesso!');
            } else if (statusTxt == "error") {
                // alert('Ocorreu um erro na comunicação!');
                alert('ERRO: ' + xhr.status + ": " + xhr.statusText );
            }
        });
    });
});

