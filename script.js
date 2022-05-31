const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validarCampos()
})


const validarCampos = ()=> {
    const usuarioValor = usuario.value.trim()
    const claveValor = clave.value.trim() 

    if (usuarioValor === '' || claveValor === '') {
        alert ("completar todos los campos")
    }else{
        alert ("Bienvenido " + usuarioValor)
    }
}