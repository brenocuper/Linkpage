let interruptor = document.getElementById('interruptor')
let root = document.documentElement

interruptor.addEventListener('click', () => {
  root.classList.toggle('tema-claro')
})