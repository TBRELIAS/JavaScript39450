let nombreIngresado;
let apellidoIngresado;
let emailIngresado;
let edadIngresada;
let monto;
let interesAnual;
let cantidadAnios;
let ganancias;
let montoTotal;

alert ("Bienvenidos a InverOne")

nombreIngresado = prompt ("Ingrese su Nombre");

alert ("¡ Bienvenido al Centro de Inversiones InverOne" + " " + nombreIngresado + "!")
console.log ("Su Nombre es:" + " " +nombreIngresado)

apellidoIngresado = prompt ("Ingrese su Apellido")
console.log ("Su Apellido es:" + " " +apellidoIngresado)


emailIngresado = prompt ("Ingrese su Email")
console.log ("Su Email es:" + " " +emailIngresado)

edadIngresada = parseInt(prompt("Ingrese su edad"))
console.log (edadIngresada >18)

if (edadIngresada >=18) {
    alert ("Usted es mayor de edad y responsable de cualquier accion a la que se comprometa")

    monto = parseInt(prompt("Ingrese monto de la inversion"))

    interesAnual = parseInt(prompt("Ingrese interes Anual de la Inversión"))

    cantidadAnios = parseInt(prompt("Ingrese cantidad de años a invertir"))

    montoTotal = monto - monto

    for (let i = 0; i < cantidadAnios; i++) {
    ganancias = monto * interesAnual / 100
    montoTotal = monto + montoTotal + ganancias
    console.log("Total: ", montoTotal)
    }
    alert ("Te esperamos en nuestras Sucursales para concretar ... Saludos")

} else {
    alert ("Usted es menor de Edad, por lo cual no podremos llegar a un acuerdo")
}