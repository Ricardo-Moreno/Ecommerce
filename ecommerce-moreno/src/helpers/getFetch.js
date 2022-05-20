
const productos = [
    { id: '1', category: 'arreglos', name: "Box de Regalo",   price: 2500, photo: '/assets/imag/arregloUno.jpeg' },
    { id: '2', category: 'regalos', name: "Box de Regalo",  price: 2700, photo: '/assets/imag/arregloDos.jpeg'  },
    { id: '3', category: 'arreglos', name: "Box de Regalo",   price: 4500, photo:'/assets/imag/arregloTres.jpeg' },
    { id: '4', category: 'regalos', name: "Box de Regalo",   price: 4500, photo:'https://i.ibb.co/Kshn3QK/arreglo-Cuatro.jpg' },
]

    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : productos
                    resolve( query )
                }, 2000)
            })
    }
