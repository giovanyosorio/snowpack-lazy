/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

//api https://randomfox.ca/
const max = 122
const min = 1

const random = () =>  Math.floor(Math.random() * (max - min)) + min

console.log(random());

//crear una imagen

const createImageNode = () => {

    const container = document.createElement('div')
    container.className = 'p-4'
    const img = document.createElement('img')
    img.className = 'mx-auto'
    img.width = 320
    img.src = `https://randomfox.ca/images/${random()}.jpg` //template string
    img.alt = 'Random fox'
    container.appendChild(img)
    return container
}

const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

//agregar imagen al DOM

const addBotton= document.querySelector('button')
const addImages =()=> {
    const newImage = createImageNode()
    mountNode.append(newImage)
}
addBotton.addEventListener("click",addImages)

