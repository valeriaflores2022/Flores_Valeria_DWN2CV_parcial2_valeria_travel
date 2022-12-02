var almacenamiento = JSON.parse(localStorage.getItem("carrito"));

console.log(almacenamiento)

var cuentaId = JSON.parse(localStorage.getItem("cuentaId"));
console.log(cuentaId)
var muestre = document.getElementById("muestre")



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

function fin() {
    setTimeout(tiempo, 1000)
}
mostrame()
function mostrame() {


    
    muestre.innerHTML = ""
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

            muestre.append(div)
        }
    }
    var p = document.createElement("p")
    p.innerHTML = "Total: " + total
    muestre.append(p)


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


