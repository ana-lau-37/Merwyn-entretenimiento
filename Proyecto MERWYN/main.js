/** @format */

function saludar() {
	alert("¡Bienvenido al mágico mundo de Merwyn!");
}

let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 18) {
	alert("Sos menor de edad, no podes ingresar");
} else if (edad >= 18) {
	alert("Sos mayor de edad, podes ingresar");
	saludar();
}

for (let evento = 1; evento <= 3; evento++) {
	let nombre = prompt("Ingrese su nombre");
	alert(`Hola ${nombre} su evento es el número ${evento} del día.`);
}
alert("Por el momento ya no contamos con mas eventos para el día.");

//ver como hacer para que el ciclo se corte al obtener el numero

let eventos;
while (true) {
	eventos = prompt(
		"Elegir evento: " +
			"opciones: " +
			"Titeres, " +
			"Castillo inflable, " +
			"Animacion."
	);

	if (eventos === null) {
		break;
	}

	eventos = eventos.toLowerCase();

	switch (eventos) {
		case "titeres":
			alert("Esta función tiene un costo de $3000 y dura 45min.");
			break;

		case "castillo inflable":
			alert("Esta función tiene un costo de $7000 y dura 3hs.");
			break;

		case "animacion":
			alert("Esta función tiene un costo de $6000 y dura 2hs.");
			break;

		default:
			alert("Por el momento no contamos con la opción seleccionada.");
			continue;
	}

	break;
}

//LISTA DE LOS DIFERENTES EVENTOS
let evento1 = {
	nombre: "Títeres",
	duracion: "45min",
	costo: 3000,
	pax: 30,
};
let evento2 = {
	nombre: "Castillo inlfable",
	duracion: "3hs",
	costo: 7000,
	pax: 25,
};

let evento3 = {
	nombre: "Animacion",
	duracion: "3hs",
	costo: 8900,
	pax: 50,
};
console.log(evento1.pax);
console.log(evento1);

//AGENDA DE TURNOS:
class Turno {
	constructor(nombre, direccion, pax, servicio) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.pax = pax;
		this.servicio = servicio;
	}
}

let agenda = [];

function agregarTurno(nombre, direccion, pax, servicio) {
	const turno = new Turno(nombre, direccion, pax, servicio);
	agenda.push(turno);
}

agregarTurno("Ana", "1ro de mayo 1467", 36, "castillo");
agregarTurno("Laura", "Juan b justo 255", 38, "Titeres");
agregarTurno("Jesica", "Sarmiento 255", 45, "Animacion");

agenda.forEach((turno) => {
	console.log("Turno:", turno);
	console.log("Nombre:", turno.nombre);
	console.log("Dirección:", turno.direccion);
	console.log("Pax:", turno.pax);
	console.log("Servicio:", turno.servicio);
	console.log("___________________________________");
});
