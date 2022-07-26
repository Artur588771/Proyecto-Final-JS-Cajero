//1 Obtener Variables
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const formlogin = document.querySelector('#formlogin');

formlogin.addEventListener('submit', () => {    
    const clientes = JSON.parse(localStorage.getItem('cuentas'));
    const recuCliente = clientes.filter((cliente) => cliente.correo == inputEmail.value && cliente.password == inputPassword.value);    
    if(recuCliente.length > 0){
        sessionStorage.setItem('sessionCorreo',recuCliente[0].correo);
        sessionStorage.setItem('sessionNombre',recuCliente[0].nombre);        
        window.open('cajero.html');        
    }else{
        alert('Usuario no Existente');
        window.location.replace("index.html");
    }
});


