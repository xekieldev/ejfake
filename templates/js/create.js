function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = document.getElementById("txtPrecio").value
    let s = document.getElementById("txtStock").value
    let i = document.getElementById("txtImagen").value
 
    let producto = {
        nombre: n,
        precio: p,
        stock: s,
        imagen:i
    }
    let url = "http://exequielsartor.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "../crud.html";  //NUEVO  
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
    //window.location.href = "./crud.html";  //NUEVO    
    
}
