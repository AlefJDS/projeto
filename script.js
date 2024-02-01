function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //O COMANDO ABAIXO MOSTRA COMO O TOGGLE FUNCIONA
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //substituir a imagem, se estiver light mode
    img.setAttribute("src", "./assets/avatar1.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  //pegar tag img
  //caso contrario substituir imagem normal
}
