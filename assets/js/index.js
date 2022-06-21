// 1. Mostrar en consola la secuencia de Fibonacci: 
// a. Entre los números 0 y 1000.
// b. Números pares entre 0 y 1000.
// c. Números impares entre 0 y 1000.

// a. Entre los números 0 y 1000.

function fibonacciSecuencia(limit){
    const fib = [0, 1];
    for(let i = 2; i <= limit; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib; 
}

const testfib = fibonacciSecuencia(16)
console.log(`La secuencia de Fibonacci es la siguiente: ${testfib}`
);

// b. Números pares entre 0 y 1000.

const fibonacci = [];
const fibonacciParesSecuencia = [];
const fibonacciImparesSecuencia = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; fibonacci[fibonacci.length - 1] <= 1000; i++) {
	fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const fibonacciPares = fibonacci.filter((n) => n % 2 == 0 && n < 1000);
console.log(
	`Los pares de la secuencia de Fibonacci son los siguientes: ${fibonacciPares}`
);

// c. Números impares entre 0 y 1000.

const fibonacciImpares = fibonacci.filter((n) => n % 2 == 1 && n < 1000);
console.log(
	`Los impares de la secuencia de Fibonacci son los siguientes ${fibonacciImpares}`
);

//  2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokeones = ['Pikachu','Charmander','Bulbasaur','Squirtle']
const pokeonesUp = pokeones.map((pokeones) => pokeones.toUpperCase());
console.log("Pokemones:", pokeonesUp);

//2.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones = [
	{
		nombre: "Pikachu",
		tipo: "Electrico",
	},
	{
		nombre: "Charmander",
		tipo: "Fuego",
	},
	{
		nombre: "Bulbasaur",
		tipo: "Planta",
	},
	{
		nombre: "Squirtle",
		tipo: "Agua",
	},
	{
		nombre: "Charmeleon",
		tipo: "Fuego",
	},
	{
		nombre: "Weedle",
		tipo: "bicho",
	},
	{
		nombre: "Charizard",
		tipo: "Fuego",
	},
];

const pokemonesFuego = pokemones.filter((fuego) => fuego.tipo === "Fuego");
console.log("Pokemones de fuego", pokemonesFuego);