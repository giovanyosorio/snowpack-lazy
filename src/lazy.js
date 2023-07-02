// Intersection Observer
//lazy loading
const isIntersecting = (entry) => {
    //entry es el elemento que se esta observando
    return entry.isIntersecting //true dentro de la pantalla
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
   // console.log(entries)
})
const loadImage = (entry) => {
   const container = entry.target //img //container (div)
    
    const imagen = container.firstChild
     const url = imagen.dataset.src
    //load image
    imagen.src = url
    //desregistra la imagen
    observer.unobserve(container) 
}


export const registerImage = (img) => {
//intersection observer observa si un elemento esta en el viewport

    observer.observe(img)
}
