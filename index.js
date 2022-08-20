function siempreTRUE() {
 return true;
}

// Yo la hice así ...
const funcionAsincronaWithPromise = new Promise((resolve, reject) => {
 setTimeout(() => resolve("Hola, soy una promesa"), 5000);
});

// Así estaba en la solución .. no se cuál es mejor, calculo que esta...
async function funcionAsincrona() {
 return setTimeout(() => console.log("Hola, soy una promesa"), 5000);
}

function* indicesPares() {
 let id = 0;

 while (id < 10) yield (id += 2);
}

const iPares = indicesPares();

// Llamamos a las funciones asíncronas antes de las síncronas.
funcionAsincrona();
funcionAsincronaWithPromise.then((res) => console.log(res));

console.log(siempreTRUE());
while (true) {
 let value = iPares.next();

 if (value.done) break;

 console.log(value.value);
}
