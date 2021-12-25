<?php

    /* devolve as boas-vindas ao usuário com nome e sobrenome */

    if( isset($_GET['n']) and isset($_GET['s']) ){
        $nome = $_GET['n'];
        $sobrenome = $_GET['s'];
        $frase_final = "Seja bem-vindo(a) ao servidor, Sr(a) $nome $sobrenome";
        echo $frase_final;
    }
    
    // echo 'teste';

?>
