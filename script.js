const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector("#total")
const deleteEvent = document.querySelector(".delete")

btn.addEventListener('click', ()=>{
  if(!input.value) return ''
  createDeleteElements();
  input.value = ''
})

function createDeleteElements() {

  const li = document.createElement('li')
  const btn = document.createElement('button')

  li.className = 'li'
  li.textContent = input.value

  btn.className = 'btn'
  btn.textContent = 'del'
  li.appendChild(btn)

  btn.addEventListener('click', ()=>{
    result.removeChild(li)
  })

  result.appendChild(li)
}
