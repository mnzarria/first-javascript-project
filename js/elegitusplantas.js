const plantas = [
    {id: 1, nombre: "Potus",luz:"poca",riego:"normal",dificultad:"facil",precio:1500,img:"potus.jpg"},
    {id: 2, nombre: "Sansevieria",luz:"poca",riego:"normal",dificultad:"facil",precio:1500,img:"sansevieria.jpg"},
    {id: 3, nombre: "Calathea",luz:"normal",riego:"normal",dificultad:"intermedio",precio:2500,img:"calathea.jpg"},
    {id: 4, nombre: "Aglaonema",luz:"normal",riego:"normal",dificultad:"intermedio",precio:2500,img:"aglaonema.jpg"},
    {id: 5, nombre: "Alocasia",luz:"mucha",riego:"normal",dificultad:"avanzado",precio:3500,img:"alocasia.jpg"},
    {id: 6, nombre: "Fitonia rosa",luz:"normal",riego:"mucho",dificultad:"intermedio",precio:2500,img:"fitoniarosa.jpg"},
    {id: 7, nombre: "Fitonia verde",luz:"normal",riego:"mucho",dificultad:"intermedio",precio:2500,img:"fitoniaverde.jpg"},
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
    let ultimaPlanta = plantas[(plantas.length)-1];
    console.log("Actualmente la última planta tiene el id "+ultimaPlanta.id);
    let id = ultimaPlanta.id+1;
    let nombre = prompt("Ingresa nombre");
    let luz = prompt("Ingresa luz");
    let riego = prompt("Ingresa riego");
    let dificultad = prompt("Ingresa dificultad");
    let precio = prompt("Ingresa precio");
    let img = prompt("Ingresa img");
    const nuevaPlanta = new Planta(id,nombre,luz,riego,dificultad,precio,img);

    return nuevaPlanta;
}
nuevaPlanta = crearPlanta()

function cargarPlanta(arr,valor){
    arr.push(valor);
}

cargarPlanta(plantas,nuevaPlanta);
console.log("Felicitaciones! Ingresaste "+nuevaPlanta.nombre + " a la base de datos en la posición " + nuevaPlanta.id);
console.log(nuevaPlanta)
console.log(plantas);

//Funcion para filtrar plantas
const filtrar = (arr, filtro, param)=>{

    return arr.filter(el=>{
      if(param == "precio"){
        // console.log("Buscaste por precio");
        return el[param] <= parseFloat(filtro); 
      }
      else if(param == "nombre"){
        // console.log("Buscaste por nombre");
        return el[param].toLowerCase().includes(filtro.toLowerCase());
      }
      else if(param == "luz"){
        // console.log("Buscaste por luz");
        return el[param].includes(filtro);
         
      }
      else if(param == "dificultad"){
        // console.log("Buscaste por dificultad");
        return el[param].includes(filtro);
      }
      else{
        console.log("Búsqueda no válida!");
      }
    })

}

let busqueda = prompt(
    "Elegí tu busqueda: \n1- Nombre. \n2 - Presupuesto disponible. \n3 - Luz disponible en tu casa. \n4 - Dificultad. \nPresioná X para finalizar."
  );
  while (busqueda != "X" && busqueda != "x") {
    switch (busqueda) {
        case "1":
            const filtroNombre = filtrar(plantas,prompt("Ingresa el nombre de la planta"),"nombre");
            console.log(filtroNombre);
        break;
        case "2":
            let presupuesto = prompt("Ingresa tu presupuesto");
            const filtroPrecio = filtrar(plantas,presupuesto,"precio");
            console.log("Plantas por menos de " + presupuesto + "$:");
            console.log(filtroPrecio);
            break;
        case "3":
            let luzDisp = prompt("Cuanta luz hay en la habitación? \n1- Poca. \n2 - Normal. \n3 - Mucha.");
            switch (luzDisp) {
                case "1":
                    const pocaLuz = filtrar(plantas,"poca","luz");
                    console.log("Plantas que van bien para tu habitación:");
                    console.log(pocaLuz);
                    break;
                case "2":
                    const normalLuz = filtrar(plantas,"normal","luz");
                    console.log("Plantas que van bien para tu habitación:");
                    console.log(normalLuz);
                    break;
                case "3":
                    const muchaLuz = filtrar(plantas,"mucha","luz");
                    console.log("Plantas que van bien para tu habitación:");
                    console.log(muchaLuz);
                    break;
                default:
                    alert("Error!");
                    break;
            }
        break;
        case "4":
            let dificult = prompt("Que tipo de plantas querés comprar? \n1- Fáciles. \n2 - Intermedio. \n3 - Avanzado.");
            switch (dificult) {
                case "1":
                    const plantaFacil = filtrar(plantas,"facil","dificultad");
                    console.log("Podes cuidar "+ plantaFacil.length+ " especies de plantas:");
                    console.log(plantaFacil);
                    break;
                case "2":    
                    const plantaNormal = filtrar(plantas,"facil","dificultad");
                    for(let i=0; i<filtrar(plantas,"intermedio","dificultad").length;i++){
                        plantaNormal.push(filtrar(plantas,"intermedio","dificultad")[i]);
                    }
                    console.log("Podes cuidar "+ plantaNormal.length+ " especies de plantas:");
                    console.log(plantaNormal);
                    break;
                case "3":
                    const plantaDificil = filtrar(plantas,"facil","dificultad");    
                    for(let i=0; i<filtrar(plantas,"intermedio","dificultad").length;i++){
                        plantaDificil.push(filtrar(plantas,"intermedio","dificultad")[i]);
                    }
                    for(let i=0; i<filtrar(plantas,"avanzado","dificultad").length;i++){
                        plantaDificil.push(filtrar(plantas,"avanzado","dificultad")[i]);
                    }
                    console.log("Podes cuidar "+ plantaDificil.length+ " especies de plantas:");
                    console.log(plantaDificil);
                    break;
                default:
                    alert("Error!");
                    break;
            }
        break;
      default:
        alert("Opción no válida");
        break;
        }
    busqueda = prompt(
      "Te quedaron dudas? \n Elegí tu busqueda: \n1- Nombre. \n2 - Presupuesto disponible. \n3 - Luz disponible en tu casa. \n4 - Dificultad. \nPresioná X para finalizar."
    );
  }

alert("Gracias por contactarte con Planterhouse!");
