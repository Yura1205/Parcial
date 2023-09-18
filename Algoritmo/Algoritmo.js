//Ejemplo #1
//let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 23];
//Ejemplo #2
let myArray = [2,5,13,6,7,34,23,5,2,7];


if (myArray.length > 0) {
    myArray.sort((a, b) => b - a); //Organiza el arreglo de manera descendente
    let numMayor = myArray[0]; // Obtiene el número más grande
    console.log(numMayor); // Imprime el número más grande
} else {
    console.log("El arreglo está vacío.");
}



