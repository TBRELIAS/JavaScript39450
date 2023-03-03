function DatosDelUsuario(){

    alert ("Bienvenidos a Bebradas")

    let Nombre = prompt ("Ingrese su Nombre");
    console.log ("Su Nombre es:" + " " +Nombre)

    let Apellido = prompt ("Ingrese su Apellido")
    console.log ("Su Apellido es:" + " " +Apellido)

    let DocumentoId = prompt ("Ingrese su numero de Documento")
    console.log ("Su Numero de Documento es:" + " " +DocumentoId)

    alert ("¡ Bienvenido a Bebradas" + " " + Nombre + "!")
}

DatosDelUsuario()

function EleccionDeProductos(){
    let SumaTotal = 0;
    let SeguirComprando = true
    while (SeguirComprando) {
        let ProductoSeleccionado = parseInt(prompt(`Seleccione un producto \n 1: Cerveza,\n 2: Vino,\n 3: Vodka,\n 4: Whiskey`));
        switch (ProductoSeleccionado){
            case 1:
                SumaTotal = SumaTotal+500
            break;
            case 2:
                SumaTotal = SumaTotal+1000
            break;
            case 3:
                SumaTotal = SumaTotal+2000
            break;
            case 4:
                SumaTotal = SumaTotal+8000
            break;
            default:
                alert(`Ha ingresado un producto inexistente`)
            break;
        }
        alert(`Total :`+ SumaTotal)
        let SeleccionSeguirComprando = parseInt(prompt(`Quisiera añadir mas artiulos al carrito de compras ? \n1: Si \n 2: No`));
        if(SeleccionSeguirComprando !== 1){
            SeguirComprando = false;
        }
    }
    alert(`Monto Total a pagar es de :` + SumaTotal)
}

EleccionDeProductos()