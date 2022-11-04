const plantas = [
    {id: 1, nombre: "Potus",luz:"poca",riego:"normal",dificultad:"facil",precio:1500,img:"potus.jpg"},
    {id: 2, nombre: "Sansevieira",luz:"poca",riego:"normal",dificultad:"facil",precio:1500,img:"sansevieira.jpg"},
    {id: 3, nombre: "Calathea",luz:"indistinta",riego:"normal",dificultad:"intermedio",precio:2500,img:"calathea.jpg"},
    {id: 4, nombre: "Aglaonema",luz:"indistinta",riego:"normal",dificultad:"intermedio",precio:2500,img:"aglaonema.jpg"},
    {id: 5, nombre: "Alocasia",luz:"indistinta",riego:"normal",dificultad:"avanzado",precio:3500,img:"alocasia.jpg"},
];

//Función constructora
function Planta(id, nombre, luz, riego,dificultad, precio,img){
    this.id = id;
    this.nombre = nombre;
    this.luz = luz;
    this.riego = riego;
    this.dificultad = dificultad;
    this.precio = precio;
    this.img = img;
}

// const nuevaPlanta = new Planta(6,"Cactus","indistinta","poco","cactus.jpg");


function crearPlanta(){
    let id = prompt("Ingresa id");
    let nombre = prompt("Ingresa nombre");
    let luz = prompt("Ingresa luz");
    let riego = prompt("Ingresa riego");
    let dificultad = prompt("Ingresa dificultad");
    let precio = prompt("Ingresa precio");
    let img = prompt("Ingresa img");
    const nuevaPlanta = new Planta(id,nombre,luz,riego,dificultad,precio,img);

    return nuevaPlanta;
}
// nuevaPlanta = crearPlanta()

function cargarPlanta(arr,valor){
    arr.push(valor);
}

// cargarPlanta(plantas,nuevaPlanta);

// console.log(cargarPlanta);
// console.log(nuevaPlanta)
// console.log(plantas);

//Funcion de filtrado

function buscarPlanta(arr,filtro){
    const plantaIdeal = arr.find((planta)=>{
        return planta.nombre.includes(filtro);
    })
return plantaIdeal;
}
let plantaIdeal = buscarPlanta(plantas,"Potus");
// console.log("En tu casa podrías " + plantaIdeal.nombre)

function filtrarPorLuz(arr,filtro){
    return arr.filter((planta)=>{
        return planta.luz == filtro;
    })
}

let plantaLuz = filtrarPorLuz(plantas,"poca");
console.log(plantaLuz);

const carrito=[];
console.log(carrito)
cargarPlanta(carrito,plantaLuz);
console.log(carrito);

let precioTotal = carrito.reduce((acumulador,elemento)=>{
    return acumulador + elemento.precio;
},0)

console.log(precioTotal);

//Funcion buscaPlantas
const filtrar = (arr, filtro, param)=>{

    return arr.filter(el=>{
      if(param == "precio"){
        return el[param] <= parseFloat(filtro); 
      }
      else if(param == "id"){
        return el[param] == parseFloat(filtro); 
      }
      else{
        return el[param].includes(filtro)
      }
    })

}

const filtroPrecio = filtrar(plantas,1500,"precio")
console.log("Plantas por menos de 1500$:")
console.log(filtroPrecio)

const filtroLuz = filtrar(plantas,"poca","luz")
console.log("Plantas para poca luz:")
console.log(filtroPrecio)
