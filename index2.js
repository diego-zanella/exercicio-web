function gravar(){
    if (document.getElementById("nome_completo").value != "" && 
    document.getElementById("email").value != "" &&
    document.getElementById("usuario").value != "" &&
    document.getElementById("senha").value != "" &&
    document.getElementById("confirmar_senha").value != "" &&
    document.getElementById("cpf").value != "" &&
    document.getElementById("contato").value != "")
    {
        if (document.getElementById("senha").value == 
        document.getElementById("confirmar_senha").value)
            {
                var form = document.getElementById("cadastro");
                var dados = new FormData(form);

                fetch("gravar.php",{
                    method:"POST",
                    body:dados
                })  
            }
        else{
            alert("senhas diferentes");
        }
    }
    else{
        alert("campos obrigatorios")
    }
    



    

   

}