////Hecho por Arturo Renteria
//1. Crear el arreglo de clientes
const cuentas = [
    {
        nombre:'Arturo',
        correo:'arturo@curso.net',
        password:'arturo123',
        saldo:200
    },
    {
        nombre:'Krystel Baca',
        correo:'krystel@curso.net',
        password:'krystel123',
        saldo:990
    },
    {
        nombre:'Andres Sanchez',
        correo:'andres@curso.net',
        password:'andres123',
        saldo:10
    },
    {
        nombre:'Jesus',
        correo:'jesus@curso.net',
        password:'jesus123',
        saldo:900
    }
];

//2. Funcion para registrar cuentas
function registrarCuentas(key,item){    
    if(localStorage.cuentas == null){
        if(typeof item == 'string'){
            localStorage.setItem(Key)
        }else{
            localStorage.setItem(key,JSON.stringify(item))
        }  
    }    
}

registrarCuentas('cuentas',cuentas);