console.log("\nVendedor:Bienvenido a MarcoMotos, también conocido como MM")

const listaDeMotos = new Array(
    `BACCIO P110 (Roja) 1200 U$D`,
    `BACCIO P110 X (Violeta) 1350 U$D`,
    `BACCIO P110 X (Verde Agua) 1350 U$D`,
);

const edadComprador = 18;
const tieneLicencia = false;
let elegida = "BACCIO P110 X (Violeta)";

console.log("\nVendedor:Aqui están las motos disponibles para comprar.");
console.log(listaDeMotos);

const puedeComprar = edadComprador >= 18 || tieneLicencia == true;

console.log("\nComprador: Quiero comprar la moto", elegida)

console.log("\nVendedor:Buena elección, ¿pero usted cumple con los requisitos? Osea ser mayor de edad.")

if( edadComprador >= 18){
    console.log("\nComprador:Así es, tengo", edadComprador, "años.")
}else{( edadComprador < 18)
    console.log("\nComprador:Ah... no sabia que tenia que tener 18.")
    console.log("\nVendedor:Entonces lamentablemente no podrá comprar la moto.")
    return
}

console.log("\nPor ultimo, ¿usted tiene licencia?")

if(
    tieneLicencia == true){
    console.log("\nComprador: Si, tengo la licencia al dia.")
    console.log("\nVendedor: genial, ya puede comprar la moto.")
}else{
    console.log("\nComprador:¿Habia que tener licencia?...")
    console.log("\nVendedor:Si no tiene licencia no podrá comprar la moto.")
}