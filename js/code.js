//Hecho por Arturo Renteria
//1 Obtener Variables
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const formlogin = document.querySelector('#formlogin');
const loginInvalido = document.querySelector('#loginInvalido');

//2 Evento submit de logueo y creacion de la session
formlogin.addEventListener('submit', (e) => {
    e.preventDefault();    
    const clientes = JSON.parse(localStorage.getItem('cuentas'));
    const recuCliente = clientes.filter((cliente) => cliente.correo == inputEmail.value && cliente.password == inputPassword.value);    
    if(recuCliente.length > 0){
        sessionStorage.setItem('sessionCorreo',recuCliente[0].correo);
        sessionStorage.setItem('sessionNombre',recuCliente[0].nombre);                
        window.open('cajero.html','_self');        
    }else{                
        loginInvalido.textContent='Correo y/o contraseña invalidos';        
    }
    formlogin.reset();     
});

//3 Cerrar Sesion
function cerrarSesion(){
    sessionStorage.removeItem('sessionNombre');   
    sessionStorage.removeItem('sessionCorreo');
    sessionStorage.clear(); 
}

cerrarSesion();