const ul = document.querySelector('ul')
const li = ul.querySelectorAll('li')
const enviar = document.querySelector('.enviar')
const input = document.querySelector('input')
const btnApagar = document.querySelector('.btn-apagar')


function criarLi(texto){
    let li = document.createElement('li')
    li.innerText = texto
    ul.appendChild(li)
    createButton(li)
    input.value = ''
}

enviar.addEventListener('click', (e)=>{
    if( input.value !== ''){
        criarLi(input.value)
   }
})

function enviarENTER(event){
    let enter = event.keyCode
    if(enter === 13){
        criarLi(input.value)
    }
}

input.addEventListener('keypress', enviarENTER)
    
function createButton(li){
    const btn = document.createElement('button');
    btn.innerText = 'Apagar'
    btn.classList.add('apagar')
    li.appendChild(btn)
}

