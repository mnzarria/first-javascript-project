const   nombrePlanta = document.querySelector("#nombrePlanta"),
        luzPlanta = document.querySelector("#luzPlanta"),
        riegoPlanta = document.querySelector("#riegoPlanta"),
        difPlanta = document.querySelector("#difPlanta"),
        precioPlanta = document.querySelector("#precioPlanta"),
        imgPlanta = document.querySelector("#imgPlanta"),
        tbody = document.querySelector("#table-body"),
        busqueda = document.querySelector("#busqueda"),
        btnLimpiar = document.querySelector("#btnLimpiar"),
        btnCrear = document.querySelector("#btnCrear");
const radios = document.querySelectorAll('input[type="radio"]');

//INVENTARIO INICIAL DE PLANTAS

const plantas = [
    {id: 1, nombre: "Potus",luz:"poca",riego:"normal",dificultad:"facil",precio:1500,img:"../media/potus.jpg"},
    {id: 2, nombre: "Sansevieria",luz:"poca",riego:"normal",dificultad:"facil",precio:1500,img:"../media/sansevieria.jpg"},
    {id: 3, nombre: "Calathea",luz:"normal",riego:"normal",dificultad:"intermedio",precio:2500,img:"../media/calathea.jpg"},
    {id: 4, nombre: "Aglaonema",luz:"normal",riego:"normal",dificultad:"intermedio",precio:2500,img:"../media/aglaonema.jpg"},
    {id: 5, nombre: "Alocasia",luz:"mucha",riego:"normal",dificultad:"avanzado",precio:3500,img:"../media/alocasia.jpg"},
    {id: 6, nombre: "Fitonia rosa",luz:"normal",riego:"mucho",dificultad:"intermedio",precio:2500,img:"../media/fitoniarosa.jpg"},
    {id: 7, nombre: "Fitonia verde",luz:"normal",riego:"mucho",dificultad:"intermedio",precio:2500,img:"../media/fitoniaverde.jpg"},
];

// guardarLS(plantas);
let nuevoStock;

if (JSON.parse(localStorage.getItem("plantas"))!=null){
  nuevoStock = JSON.parse(localStorage.getItem("plantas"));
  console.log("Hay un stock cargado");
  console.log(nuevoStock);
}else{
  console.log("No hay stock cargado");
  nuevoStock = plantas;
}


//DEFINICION DE FUNCIONES
  //Función constructora Planta
  function Planta(id, nombre, luz, riego,dificultad, precio,img){
      this.id = id;
      this.nombre = nombre;
      this.luz = luz;
      this.riego = riego;
      this.dificultad = dificultad;
      if (precio == ""){
        this.precio = 9999;
      } else {
        this.precio = parseFloat(precio);
      }
      if(img==''){
        this.img = 'https://via.placeholder.com/150';
      }else{
        this.img = img;
      }
  }

  //Usos del LocalStorage
  function guardarLS(arr) {
    localStorage.setItem("plantas", JSON.stringify(arr));
    console.log("guardar Local Storage");
  }

  function recuperarLS(key) {
    console.log("recuperar Local Storage");
    return JSON.parse(localStorage.getItem(key));
  }

function crearPlanta(){
    document.getElementById("formCrear").style.display='';  
}
// nuevaPlanta = crearPlanta()

function cargarPlanta(arr,valor){
    arr.push(valor);
}

//Funcion de busqueda
const filtrar = (arr, filtro, param)=>{
    return arr.filter(el=>{
      if(param == "precio"){
        return el[`${param}`] <= parseFloat(filtro); 
      } else {
        return el[`${param}`].toLowerCase().includes(filtro.toLowerCase());
      }
    })
}
//Edición del HTML
function crearHtml(arr) {
  tbody.innerHTML = "";

  let html = "";
  for (const item of arr) {
    html = `<tr scope="row">
              <td>${item.nombre}</td>
              <td>${item.luz}</td>
              <td>${item.riego}</td>
              <td>${item.dificultad}</td>
              <td>${item.precio}</td>
              <td><img src="${item.img}"/></td>
              <td><button class="btn btn-danger" id="${item.id}">Borrar</button></td>
            </tr>`;
    tbody.innerHTML += html;
  }
// Botones BORRAR
    const arrayBorrar = document.querySelectorAll('td .btn');

    arrayBorrar.forEach(btn=>{
      btn.addEventListener("click", ()=>{
        console.log("Item "+btn.id+" borrado");
        nuevoStock= nuevoStock.filter(el=>el.id != btn.id);
        guardarLS(nuevoStock);
        crearHtml(nuevoStock);
      })
    })
  
  }

// Manejo de formularios
function limpiarCampos() {
    nombrePlanta.value = "";
    luzPlanta.value = "";
    riegoPlanta.value = "";
    difPlanta.value = "";
    precioPlanta.value = "";
    imgPlanta.value = "";
  }

//FIN DECLARACION DE FUNCIONES


//EJECUCION DE FUNCIONES
document.getElementById("formCrear").style.display='none';

guardarLS(nuevoStock);
crearHtml(nuevoStock);

//MANEJO DE EVENTOS
//Crear nueva Planta
btnCrear.addEventListener("click", () => {
  nuevaPlanta = crearPlanta();
});

btnCerrar.addEventListener("click", () => {
  document.getElementById("formCrear").style.display='none';  
});


// Uso Fetch para emular el stock de plantas en distintos locales desde un JSON
btnStock.addEventListener("click", () => {
fetch('../data/stock.json')
.then(res=>res.json())
.then(stock=>{
  let stockActual = [...stock];
  Swal.fire({
    title: "STOCK",
    html: "Rosario: " + stockActual[0].Rosario + "u" +
    "<br> Cordoba: " + stockActual[0].Cordoba + "u" +
    "<br> CABA: " + stockActual[0].CABA + "u"
  })
})
});

btnCargar.addEventListener("click",() =>{
  let ultimaPlanta = nuevoStock[(nuevoStock.length)-1];
  console.log("Actualmente la última planta tiene el id "+ultimaPlanta.id);
  let id = ultimaPlanta.id+1;
  const nuevaPlanta = new Planta(
      id,
      nombrePlanta.value,
      luzPlanta[luzPlanta.selectedIndex].text,
      riegoPlanta[riegoPlanta.selectedIndex].text,
      difPlanta[difPlanta.selectedIndex].text,
      precioPlanta.value,
      imgPlanta.value
      );    
      cargarPlanta(nuevoStock,nuevaPlanta);
      console.log("Felicitaciones! Ingresaste " + nuevaPlanta.nombre + " a la base de datos en la posición " + nuevaPlanta.id);
      // limpiarCampos();
      console.log(nuevaPlanta);
      console.log(plantas);
      Swal.fire({
        title: 'Felicitaciones!',
        text: "Agregaste una nueva planta",
        background: '#C8C85E',
        showCancelButton: true,
        confirmButtonColor: 'rgba(53, 135, 52, 1.0)',
        cancelButtonColor: '#D98324',
        confirmButtonText: 'Ver nueva planta'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            imageUrl: nuevaPlanta.img,
            imageAlt: 'foto nueva planta',
            imageHeight: 300,
            title: nuevaPlanta.nombre,
            html: "Dificultad: "+ nuevaPlanta.dificultad + 
            "<br> Riego: "+ nuevaPlanta.riego +
            "<br> Luz: "+ nuevaPlanta.luz +
            "<br> Precio: "+ nuevaPlanta.precio +"$"
          })
        }
      })
      limpiarCampos();
      guardarLS(nuevoStock);
      crearHtml(nuevoStock);
  });
    
//BUSQUEDA
busqueda.addEventListener("input",() => {
  let nuevaBusqueda = filtrar(nuevoStock, busqueda.value, "nombre");
  crearHtml(nuevaBusqueda);
})

for (const radio of radios) {
  // console.log(radio);
  radio.addEventListener('change', ()=>{
    if(radio.checked){
      //llamo al funcion generica
      busqueda.addEventListener("input", () => {
        let nuevaBusqueda = filtrar(nuevoStock, busqueda.value, radio.value);
        crearHtml(nuevaBusqueda);
      });

    }
  })
}

