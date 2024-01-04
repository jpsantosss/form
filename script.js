datePickerId.max = new Date().toISOString().split("T")[0]//Script para data de nascimento ter o valor máximo ser o dia atual.

function verificarCampos() {
    var form = document.getElementById('formulario')//Cria uma variável com o elemento de id 'formulario'.
    var camposObrigatorios = form.querySelectorAll('[required]')//Cria umva variável onde o 'querySelectorAll' percorre todos os elementos dentro do HTML que tem o atributo 'required'.

    var camposPreenchidos = true//Cria uma variável booleana com valor true.
    camposObrigatorios.forEach(function(campo) {//Percorre cada elemento da lista de campos obrigatórios.
        if (!campo.value || !campo.checkValidity()) {//Loop onde verifica se o campo atual está vazio (!campo.value) ou se não passa na validação usando (checkValidity()) isso pode pode acontecer se o usuário inserir um valor inválido, como uma data inválida ou um email mal formatado.
            camposPreenchidos = false//Se algum dos campos obrigatórios for preenchido ou não for válido, a variável 'camposPreenchidos' recebe 'false'.
            return;//Interrompe o loop, pois se um campo não estiver preenchido, não há necessidade de verificar os outros campos.
        }
    })
    if (camposPreenchidos) {//Se os campos obrigatórios estiverem preenchidos da maneira correta irá chamar a função 'enviar()'.
        enviar()
    } else {//Caso algum campo obrigatório estiver preenchido incorretamente exibe um alerta para o usuário.
        alert('Por favor, preencha todos os campos obrigatórios corretamente.')
    }
}
function formatarTelefone(input) {
    var numeroTelefone = input.value.replace(/\D/g, '');//'input.value' obtém o valor atual do campo de entrada, '.replace('/\D/g')' usa uma expressão regular para substituir todos os caracteres não numéricos ('\D') por uma string vazia (' ').
    // '\D' corresponde a qualquer caractere não numérico.
    // 'g' indica que a substituição deve ser feita globalmente

    var formatoTelefone = numeroTelefone.substr(0, 2)//Pega os dois primeiros dígitos do número de telefone. Lógica dos números no parênteses: A partir do 0 pega 2 números.
                            + ' ' +//Concatenação
                            numeroTelefone.substr(2, 5)//Pega os cinco dígitos seguintes do número de telefone. Lógica dos números no parênteses: A partir do 2 pega 5 números.
                            + ' ' + 
                            numeroTelefone.substr(7, 4);//Pega os quatro últimos dígitos do número de telefone. A partir do 7 pega 4 números.

    input.value = formatoTelefone;
}

function enviar(){
    var dataInput = document.getElementById('datePickerId').value//Cria uma variável onde recebe o valor do elemento com id 'datePickerId'.
    var data = new Date(dataInput)//Cria uma variável onde o construtor Date recebe a String 'dataInput' que receber um valor inserido no elemento <input> do tipo "date", sendo assim, o valor associado será uma string no formato "YYYY-MM-DD". O contrutor Date consegue interpretar essa string e cria um objeto 'Date' correspondente. (Com argumento do tipo String)
    var anoNasc = data.getFullYear()//Cria uma variável onde recebe o ano da data representada pelo objeto 'Date' no formato "YYYY".

    var anoAtual = new Date()//Cria uma variável onde o contrutor Date não recebe argumentos, obtendo a data e horas atuais.
    var anoAtual = anoAtual.getFullYear()//A variável recebe apenas o ano da data representada pelo objeto 'Date'.

    var idade = anoAtual - anoNasc//Cria uma variável a partir do resultado de 'anoAtual' - 'anoNasc'.
    var nomePessoa = document.getElementById('nome').value//Cria uma variável com o nome da pessoa.

    var horaAtual = new Date()//Cria uma varaiável com a Data e Hora atuais.
    var horaAtual = horaAtual.getHours()//A variável recebe apenas a hora atual.

    var resultado = document.getElementById('resultado')
    if(idade < 18){//Verifica se a idade da pessoa registrada é menor que 18.
        resultado.innerHTML = `O usuário registrado é <span style="text-decoration: underline; color: red;">menor de idade</span>, portanto, não pode continuar!`//Aparecerá está mensagem se o usuário for menor de 18 anos.
    } else {//Se não...
        if(horaAtual <= 6){//Verifica a hora do seu sistema para mudar a mensagem.
            horaAtual = 'Boa madrugada!'
            resultado.innerHTML = `<span style="color: green;">${horaAtual} ${nomePessoa}, seu formulário foi enviado com sucesso!</span>`
        } else if(horaAtual <= 12) {//Verifica a hora do seu sistema para mudar a mensagem.
            horaAtual = 'Bom dia!'
            resultado.innerHTML = `<span style="color: green;">${horaAtual} ${nomePessoa}, seu formulário foi enviado com sucesso!</span>`
        } else if(horaAtual <= 18){//Verifica a hora do seu sistema para mudar a mensagem.
            horaAtual = 'Boa tarde!'
            resultado.innerHTML = `<span style="color: green;">${horaAtual} ${nomePessoa}, seu formulário foi enviado com sucesso!</span>`
        } else {
            horaAtual = 'Boa noite!'
            resultado.innerHTML = `<span style="color: green;">${horaAtual} ${nomePessoa}, seu formulário foi enviado com sucesso!</span>`
        }
    }
}