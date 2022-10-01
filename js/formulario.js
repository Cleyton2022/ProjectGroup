function Enviar() {


    var nome,sobrenome,Email,Feedback,subject =document.getElementById('fname','lname','Email','Feedback','subject').value;
    if (nome,sobrenome,Email,Feedback,subject==""){
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');

    }
    else{
   alert("Preencha todos os campos");
    return false;
    }
}
