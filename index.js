function siempreTRUE() {
 return true;
}

const funcionAsincrona = new Promise((resolve, reject) => {
 setTimeout(() => resolve("Hola, soy una promesa"), 5000);
});

funcionAsincrona.then((res) => console.log(res));

function* indicesPares() {
 let id = 0;

 while (id < 10) yield (id += 2);
}

const iPares = indicesPares();

console.log(siempreTRUE());
while (true) {
 let value = iPares.next();

 if (value.done) break;

 console.log(value.value);
}
