document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector('.btn-logar')
    let user = document.querySelector('.login-form')
    let pass = document.querySelector('.password-form')
    let btn_register = document.querySelector('#btn-register')
    let username = ''
    let password = ''

    btn_register.addEventListener('click', function(){
        if(user.value != '' && pass.value != ''){
            username = user.value
            password = pass.value
            document.querySelector('#feedback').innerHTML = "Registrado com sucesso!"
        }
        else
        {
            document.querySelector('#feedback').innerHTML = "Você deve escrever um Login e uma Senha"
        }
    });
    
    btn.addEventListener('click', function(){
        if (user.value == username && pass.value == password)
        {
            btn.style.backgroundColor = 'green';
            document.querySelector('#feedback').innerHTML = "Logado com sucesso"
            alert("Logado com sucesso!")
        }
        else
        {
            document.querySelector('#feedback').innerHTML = "Registre-se Primeiro!"
        }
    });
});