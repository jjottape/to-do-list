function adicionarTarefa() {
  let input = document.querySelector('input')
  let valor = input.value.trim()

  if (valor === "") return

  let li = document.createElement("li")
  li.innerHTML = valor + ' <span onclick="DeletarTarefa(this)">❌</span>'

  document.querySelector("ul").appendChild(li)
  input.value = ''

}
function DeletarTarefa(li){
     li.parentElement.remove()
}
