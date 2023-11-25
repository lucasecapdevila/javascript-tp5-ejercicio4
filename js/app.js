//  Variables
const reloj = document.getElementById('reloj')
const dia = document.getElementById('dia')
const parrafoHora = document.getElementById('hora')



//  Funciones
const primerLetraMayuscula = (texto) => {
  return texto[0].toUpperCase() + texto.slice(1)
}

const formatoHora = (hora) => {
  if (hora > 12){
    hora = hora - 12
    return '0' + hora
  }
  return hora
}

const agregarCero = (dato) => {
  if(dato < 10){
    dato = '0' + dato
    return dato
  }
  return dato
}



//  Objeto fecha (dia-mes-año)
const fecha = new Date()
let nombreDia = fecha.toLocaleString('es', {weekday: 'long'})
let diaMes = fecha.getDate()
let mes = fecha.toLocaleString('es', { month: 'long'});
let anio = fecha.toLocaleString('es', { year: 'numeric'});
let fechaCompleta = `${primerLetraMayuscula(nombreDia)} ${diaMes} de ${primerLetraMayuscula(mes)} del ${anio}`
dia.innerText = fechaCompleta



const verHora = () => {
  //  Objeto fecha (hora-minutos-segundos)
  let hora = new Date()
  let horas = hora.getHours()
  //  Agrego 0 (si es necesario)
  horas = agregarCero(horas)
  horas = formatoHora(horas)

  let minutos = hora.getMinutes()
  minutos = agregarCero(minutos)

  let segundos = hora.getSeconds();
  segundos = agregarCero(segundos)
  const horaCompleta = `${horas}:${minutos}:${segundos}`
  parrafoHora.innerText = horaCompleta
}





setInterval(verHora, 1000)



