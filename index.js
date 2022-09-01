let bebida = prompt("Dame tu bebida");
let comida = prompt("Dame tu comida");

let pedido = " vas a beber " + bebida + " y vas a comer " + comida;

console.log("tu pedido es", pedido);

let billete = prompt("son 26 pesos, dame tu billete");

for (let i = 26; i <= billete; i++) {
	console.log("billete", billete);
	console.log("costo ", i);
	if (i == billete) {
		console.log("tu cambio son  " + billete - 26 + "tu billete era de " + billete);
	}
}
