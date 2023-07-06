/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from "./lazy"
import jsx from "hyperscript";

console.log('Happy hacking :)')

//api https://randomfox.ca/
const max = 122
const min = 1

const random = () =>  Math.floor(Math.random() * (max - min)) + min

console.log(random());

//crear una imagen

const createImageNode = () => {

    /* const container = document.createElement('div')
    container.className = 'p-4' */
    
    //const img = document.createElement('img')
    
    //img.className = 'mx-auto'
    const img = jsx("img", { className: "mx-auto" , width: "320","data-src": `https://randomfox.ca/images/${random()}.jpg`});
    //img.width = "320"
    //img.dataset.src = `https://randomfox.ca/images/${random()}.jpg` //template string
/*      const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";
    imageWrapper.appendChild(img);
    container.appendChild(imageWrapper); */
    //img.className = 'mx-auto bg-gray-300 rounded-md';
    //const container = h("div", { className: "p-4" ,img});
  //  const container = jsx("div", { className: "p-4" }, img);
    //img.alt = 'Random fox'
    
    //return container
    appendedImages++;
    printLog();
    return container

}

const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

//agregar imagen al DOM

const addBotton= document.querySelector('button')
const deleteImages = document.getElementById('btnDelete')

const cleanImages = () => {
    mountNode.innerHTML = ''
    console.log('clean')
}
deleteImages.addEventListener("click",cleanImages) 

const addImages =()=> {
    const newImage = createImageNode()
    mountNode.append(newImage)
    registerImage(newImage)
}
addBotton.addEventListener("click",addImages)

