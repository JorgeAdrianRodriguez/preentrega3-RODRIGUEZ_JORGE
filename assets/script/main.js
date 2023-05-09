let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const tarjetaContenedor = document.querySelector("#tarjetaCamiseta");
const btnFinalizar = document.getElementById("finalizar");

const mensaje = (mensaje) =>{
    Toastify({
        text: mensaje,
        duration: 1500
        }).showToast();
}

function crearCard() {
    for(const camiseta of misCamisetas){
        tarjetaContenedor.innerHTML += `
        <div class="card-body">
            <img src="${camiseta.imagen}" class="card-img" alt="${camiseta.equipo}">
            <h3 class="card-title">${camiseta.equipo}</h3>
            <p class="card-text">Stock: ${camiseta.stock}</p>
            <span class="card-text">$ ${camiseta.precio}</span>
            <button id='btn-agregarCarrito${camiseta.id}' class="btn btn-primary">Agregar al Carrito</button>
        </div>
        `
    }
    misCamisetas.forEach((prod)=>{
        document.getElementById(`btn-agregarCarrito${prod.id}`).addEventListener("click",function() {
            agregarCarrito(prod);
        })
    })
}
crearCard();


function agregarCarrito(productoAComprar){
    // Si no existe es undefined si existe te devuelve el producto
    const existeElProductoEnElCarrito = carrito.find((prod) => prod.id === productoAComprar.id);
    
    if(!existeElProductoEnElCarrito){
        carrito.push({...productoAComprar, quantity: 1});
        mensaje ("El producto fue agregado exitosamente!");
    }else{
        if(productoAComprar.stock > existeElProductoEnElCarrito.quantity){
            existeElProductoEnElCarrito.quantity++
            mensaje ("El producto fue agregado exitosamente!");
        }else{
            mensaje(`No tenemos mas stock de ${productoAComprar.equipo}`);
            return;
        }
    }
    guardarStorage();
    renderizarCarrito();
    actualizarPrecioCarrito();
}

function actualizarPrecioCarrito(){
    let totalCarrito = carrito.reduce((acumulador, prod)=>acumulador+prod.precio,0);
    document.getElementById("totalCarrito").innerText="Total a pagar $: "+totalCarrito;
}

function renderizarCarrito(){
    document.getElementById("carrito").innerHTML = ``;
    document.getElementById("carrito").innerHTML += carrito.map(producto => 
    `
        <tr> 
            <td>${producto.id}</td>
            <td>${producto.equipo}</td>
            <td>${producto.precio}</td>
            <td>${producto.quantity}</td>
            <td><button onclick="borrarProducto(${producto.id})" >eliminar</button></td>
        </tr>
    `);
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
}

renderizarCarrito();


function borrarProducto(id){
    carrito = carrito.filter(producto => producto.id !== Number(id))
    guardarStorage();
    renderizarCarrito();
    actualizarPrecioCarrito();
}

function finalizarCompra(){
    carrito = [];
    guardarStorage();
    renderizarCarrito();
    actualizarPrecioCarrito();
    mensaje(`Gracias por su compra!! el monto total es: $ ${totalCarrito.precio}`);
}


const buttonFinalizar = document.getElementById("finalizar");

buttonFinalizar.addEventListener("click", finalizarCompra);










