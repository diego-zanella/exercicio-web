<?php

    $nome = $_POST["nome_completo"];
    $email = $_POST["email"];
    $usuario = $_POST["usuario"];
    $cpf = $_POST["cpf"];
    $contato = $_POST["contato"];

    $query = "INSERT INTO usuario(nome, email, usuario, cpf, contato) VALUES($nome,$email,$usuario,$cpf,$contato)";

    echo $query;

    ?>