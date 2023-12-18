const ul = document.querySelector('ul')
const enviar = document.querySelector('.enviar')
const input = document.querySelector('input')

function criarLi(texto){
    let li = document.createElement('li')
    li.innerHTML = texto
    ul.appendChild(li)
    
}

enviar.addEventListener('click', (e)=>{
    criarLi(input.value)
})

function enviarENTER(event){
    let enter = event.keyCode
    if(enter === 13){
        criarLi(input.value)
    }
}

input.addEventListener('keypress', enviarENTER)