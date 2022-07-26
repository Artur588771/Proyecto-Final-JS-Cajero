//1. Crear el arreglo de clientes
const cuentas = [
    {
        nombre:'Arturo',
        correo:'arturo@curso.net',
        password:'arturo123',
        saldo:200
    },
    {
        nombre:'Kim',
        correo:'kim@curso.net',
        password:'kim123',
        saldo:500
    },
    {
        nombre:'Guadalupe',
        correo:'guadalupe@curso.net',
        password:'guadalupe123',
        saldo:10
    },
    {
        nombre:'Carmen',
        correo:'carmen@curso.net',
        password:'carmen123',
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