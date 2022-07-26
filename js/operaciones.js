const bienvenido = document.querySelector('#bienvenido');

bienvenido.textContent = `
${sessionStorage.getItem('sessionNombre')} Bienvenido(a)`;

const clientes = JSON.parse(localStorage.getItem('cuentas'));
console.log(clientes);
const recuCliente = clientes.filter((cliente) => cliente.correo == sessionStorage.getItem('sessionCorreo'));    
console.log(recuCliente);
datos.textContent=recuCliente[0].saldo;

let primerdato=true;
let operacion='';

function resetear(reset){    
    datos.textContent=reset;
    primerdato=true;    
}

function inhabilitarNumeros(){
    const valor= document.querySelectorAll('.valor');    
    valor.forEach(element => {
        element.disabled=true;    
    });    
}

function habilitarNumeros(){
    const valor= document.querySelectorAll('.valor');    
    valor.forEach(element => {
        element.disabled=false;    
    });    
}

//inhabilitarNumeros();

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
    console.log(datos.textContent);         
    if(num>=0 && primerdato==true)
    alert('Porfavor Seleciona primero una operacion')
    else{    
    primerdato=false;
    datos.textContent+=num;
    }        
    return operacion=datos.textContent;        
}

function resultado(){          
    let resolver=0;    
    resolver=eval(operacion);
    datos.textContent=resolver;
    clientes.forEach(element => {
       if(element.correo==sessionStorage.getItem('sessionCorreo')){                 
        element.saldo=Number(datos.textContent);
       }
       
    });
    validaroperacion(datos.textContent); 
    localStorage.setItem('cuentas',JSON.stringify(clientes));    
}