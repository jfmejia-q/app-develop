document.getElementById('loginForm').addEventListener('submit', function(e){
     e.preventDefault();
     
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     let mensaje =''
     let tipoalerta = ''
    if(email === '' || password===''){
        mensaje='por favor completa los campos.'
        tipoalerta = 'warning'
    }
    else if (email==='error@gmail.com' && password ==='123456'){
        mensaje='inicio de sesion exitoso'
        tipoalerta='success'
    }
    else{
        mensaje='correo o contraseña incorrectos'
        tipoalerta = 'danger'
        
    }
    let alerta =` <div class="alert alert-${tipoalerta} alert-dismissible fade show" role="alert">
                        ${mensaje}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`
                      document.getElementById('mensaje').innerHTML = alerta;
     
});