datePickerId.max = new Date().toISOString().split("T")[0]//Script para data de nascimento ter o valor máximo ser o dia atual.
function enviar(){
    var dataInput = document.getElementById('datePickerId').value//Cria uma variável onde recebe o valor do elemento com id 'datePickerId'.
    var data = new Date(dataInput)//Cria uma variável onde o construtor Date recebe a String 'dataInput' que receber um valor inserido no elemento <input> do tipo "date", sendo assim, o valor associado será uma string no formato "YYYY-MM-DD". O contrutor Date consegue interpretar essa string e cria um objeto 'Date' correspondente. (Com argumento do tipo String)
    var anoNasc = data.getFullYear()//Cria uma variável onde recebe o ano da data representada pelo objeto 'Date' no formato "YYYY".

    var anoAtual = new Date()//Cria uma variável onde o contrutor Date não recebe argumentos, obtendo a data e horas atuais.
    var anoAtual = anoAtual.getFullYear()//A variável recebe apenas o ano da data representada pelo objeto 'Date'.

    var idade = anoAtual - anoNasc//Cria uma variável a partir do resultado de 'anoAtual' - 'anoNasc'.
    teste.innerHTML = idade
}