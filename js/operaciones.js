//1 Verifica la session
if(sessionStorage.hasOwnProperty('sessionCorreo')==false){
    principal.innerHTML='Acceso Restringido';
}

//2 Declara Variables
const bienvenido = document.querySelector('#bienvenido');
const mensajeValidar = document.querySelector('#mensajeValidar');

bienvenido.textContent = `
${sessionStorage.getItem('sessionNombre')} Bienvenido(a)`;

const clientes = JSON.parse(localStorage.getItem('cuentas'));
console.log(clientes);
const recuCliente = clientes.filter((cliente) => cliente.correo == sessionStorage.getItem('sessionCorreo'));    
console.log(recuCliente);
datos.textContent=recuCliente[0].saldo;

let operacion='';

//3 funciones
function resetear(reset){    
    datos.textContent=recuCliente[0].saldo;
    inhabilitarNumeros();
    validaroperacion(datos.textContent); 
    mensajeValidar.textContent=''      
}

function inhabilitarNumeros(){
    const valor= document.querySelectorAll('.valor');    
    valor.forEach(element => {
        element.disabled=true;    
    });
    document.querySelector('#igual').disabled=true;        
}

function habilitarNumeros(){
    const valor= document.querySelectorAll('.valor');    
    valor.forEach(element => {
        element.disabled=false;    
    });
    document.querySelector('#igual').disabled=false;    
}

function disabledOperadores(accion){
    if(accion==true){
        document.querySelector('#resta').disabled=true;
        document.querySelector('#suma').disabled=true;   
    }
    if(accion==false){
        document.querySelector('#resta').disabled=false;
        document.querySelector('#suma').disabled=false;    
    }    
}

inhabilitarNumeros();

function validaroperacion(saldo){
    if(datos.textContent == 10 ){
        document.querySelector('#resta').disabled=true;
        document.querySelector('#suma').disabled=false;
    }else if(datos.textContent == 990){
        document.querySelector('#suma').disabled=true;
        document.querySelector('#resta').disabled=false;
    }else{
        document.querySelector('#suma').disabled=false;
        document.querySelector('#resta').disabled=false;
    }
}

validaroperacion(datos.textContent);   

function recibirValores(num){
    validaroperacion(datos.textContent);
    mensajeValidar.textContent='';    
    if(num=='+' || num=='-'){        
        habilitarNumeros();        
        disabledOperadores(true);
    }
    if(num>=0){
        disabledOperadores(true);
    }    
    datos.textContent+=num;    
    return operacion=datos.textContent;        
}

function resultado(){          
    let resolver=0;    
    resolver=eval(operacion);
    datos.textContent=resolver;
    if(datos.textContent >=10 && datos.textContent<=990){    
    clientes.forEach(element => {
       if(element.correo==sessionStorage.getItem('sessionCorreo')){                 
        element.saldo=Number(datos.textContent);
       }
       
    });
    disabledOperadores(false);
    validaroperacion(datos.textContent); 
    localStorage.setItem('cuentas',JSON.stringify(clientes));
    inhabilitarNumeros();    
    }else{        
        mensajeValidar.textContent='El saldo debe ser: Min 10 y Max 990';
        datos.textContent=recuCliente[0].saldo;
        inhabilitarNumeros();
        validaroperacion(datos.textContent);
    }    
}

function cerrarSesion(){
    sessionStorage.removeItem('sessionNombre');   
    sessionStorage.removeItem('sessionCorreo');
    sessionStorage.clear();
    window.open('index.html','_self');
}