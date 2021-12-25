/* submeter o formulário */

function SubmeterFormulario(id_formulario){

    let frm = $('#'+id_formulario);
    
    frm.submit(function(e){
        /* impede a submissão tradicional */
        e.preventDefault();
        // console.log("Ok");
        
         /* submissão do formulário em Ajax */
        
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            // resposta de sucesso
            success: function(i){
                // console.log('Dados submetidos com sucesso!');
                // console.log(i);
                $("#info").html("<p>Enviado com sucesso!</p>")
            },
            // resposta de erro
            error: function(){
                // console.log('Ocorreu um erro!');
                $("#info").html("<p>Ocorreu um erro!</p>")
            }
        });
        
    });
    
}

