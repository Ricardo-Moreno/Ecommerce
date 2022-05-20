import img1 from '../Imagenes/arregloUno.jpeg'
import img2 from '../Imagenes/arregloDos.jpeg'
import img3 from '../Imagenes/arregloTres.jpeg'



const productos = [
    { id: '1', category: 'arreglos', name: "Box de Regalo",   price: 2500, photo: {img1} },
    { id: '2', category: 'regalos', name: "Box de Regalo",  price: 2700, photo: {img2} },
    { id: '3', category: 'arreglos', name: "Box de Regalo",   price: 4500, photo: {img3} },
]

    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : productos
                    resolve( query )
                }, 2000)
            })
    }
