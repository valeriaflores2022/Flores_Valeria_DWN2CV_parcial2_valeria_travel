

class travel {
  constructor(id, nombre, descripcion, precio, img, categoria) {
    this.id = id,
      this.nombre = nombre,
      this.descripcion = descripcion,
      this.precio = precio,
      this.img = img,
      this.categoria = categoria
  }
}

let productos = [];
productos[0] = new travel(0, 'Vuelos a Miami', 'Vuelos ida y vuelta a Miami con todos los impuestos incluidos', 150000, "https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Florida/Miami/miami-south-beach-night-lead-guide.jpg", 'Vuelos')
productos[1] = new travel(1, 'Vuelos a Madrid', 'Vuelos ida y vuelta a Madrid con todos los impuestos incluidos', 298000, "https://www.sae.edu/esp/wp-content/uploads/sites/10/2021/11/madrid-spain-cityscape-a-2021-08-26-18-13-19-utc-2232x1256.jpg", 'Vuelos')
productos[2] = new travel(2, 'Hotel a Roma', 'Noche  de hotel en base doble', 45000, "https://www.adnkronos.com/resources/0227-111cdb5cef53-678f360e50e5-1000/format/big/fontana_trevi_ufs.jpg", 'Hotel')
productos[3] = new travel(3, 'Hotel a Londres', 'Noche  de hotel en base doble', 60000, "https://www.revistadeck.com/sitio/wp-content/uploads/LondonI.jpg", 'Hotel')
productos[4] = new travel(4, 'Tour de degustacion de vinos en la  Toscana ', 'Tour de dia completo a un viñedo en la Toscana', 25000, "https://www.itstuscany.com/public/eaf80159-ad4b-42db-a873-1a55e5da609d.jpg", 'Excursiones')
productos[5] = new travel(5, 'Show de Flamenco en Sevilla', 'Show de flamenco con copa de sangria en Tablao 3', 15000, "https://www.flamenconline.com/wp-content/uploads/2019/11/Flamenco_en_Sevilla.jpg", 'Excursiones')





var container = document.getElementById("container")
var carrito = []

function mostrarP(array) {

  container.innerHTML = ""
  for (let i = 0; i < array.length; i++) {
    var div = document.createElement("div")
    var img = document.createElement("img")
    var p = document.createElement("p")
    var h1 = document.createElement("h1")
    var p2 = document.createElement("p")
    var h3 = document.createElement("h3")
    var button = document.createElement("button")
    div.className = "col-3  m-3 p-3 text-center justify-content-between rounded cajitaColor"




    img.src = array[i].img
   
    p.innerHTML = array[i].categoria
    h1.innerHTML = array[i].nombre
    p2.innerHTML = array[i].descripcion
    h3.innerHTML = array[i].precio
    img.setAttribute("src", array[i].img)
    button.className = "btn btn-secondary"
    button.innerHTML = "Comprar"

    button.onclick = function () {
      addCarrito(array[i]);
    };
    div.append(img)
    div.append(h1)
    div.append(h3)
    div.append(p)
    div.append(p2)
    div.append(button)




    container.append(div)
  }


}
mostrarP(productos);


function cuentaCarrito() {
  document.getElementById("cuentaCarrito").innerHTML = " Numero de objetos en carrito: " + carrito.length
}





var arrayFiltrado = []
function filtrar(cat) {
  arrayFiltrado = []

  if (cat == "todos") {
    mostrarP(productos);
  }
  else {

    for (let i = 0; i < 6; i++) {
      if (cat == productos[i].categoria) {
        arrayFiltrado.push(productos[i])

      }

    }
    mostrarP(arrayFiltrado);
  }

}






var cuentaId = [0, 0, 0, 0, 0, 0];

var modalCarrito = document.getElementById("modalCarrito")
function addCarrito(params) {
  carrito.push(params)
  cuentaId[params.id]++
  console.log(cuentaId);
  
  localStorage.setItem("cuentaId", JSON.stringify(cuentaId));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cuentaCarrito()
  mostrarCarrito()
}


function mostrarCarrito() {
  
  modalCarrito.innerHTML = ""
  var total = 0
  for (let i = 0; i < 6; i++) {
    if (cuentaId[i] != 0) {
      var div = document.createElement("div")
      var img = document.createElement("img")
      var h1 = document.createElement("h1")
      var h3 = document.createElement("h3")
      var buton = document.createElement("button")
      var cantidad = document.createElement("p")
      div.className = "row-2  m-3 p-3 justify-content-between rounded  cajitaColor"

      h1.innerHTML = productos[i].nombre
      h3.innerHTML = productos[i].precio
      img.src = productos[i].img
      img.setAttribute("class", "img-fluid");


      buton.onclick = function () {
        remove(i, productos[i].id);
      };
      buton.innerHTML = "X"
      buton.setAttribute("style", " float:right;")
      cantidad.innerHTML = "cantidad: " + cuentaId[i]
      total += productos[i].precio * cuentaId[i]

      div.append(buton)
      div.append(img)
      div.append(h1)
      div.append(cantidad)
      div.append(h3)

      modalCarrito.append(div)
    }
  }
  var p = document.createElement("p")
  p.innerHTML = "Total: " + total
  modalCarrito.append(p)


}




function remove(n, id) {
  carrito.splice(n, 1)
  cuentaId[id] = 0;

  cuentaCarrito()
  mostrarCarrito()
}

function vaciar() {
  cuentaId = [0, 0, 0, 0, 0, 0];
  carrito = []

  cuentaCarrito()
  mostrarCarrito()

}


function fin() {
  setTimeout(tiempo, 1000)
}

function tiempo() {
  var div = document.getElementById("finalizar")
  div.innerHTML = ""
  var h1 = document.createElement("h1")
  h1.innerHTML = "Gracias por viajar con valeria travel!"
  div.append(h1)
}
