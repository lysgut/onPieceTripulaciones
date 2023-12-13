import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [tripulaciones, setTripulaciones] = useState([
        {
            id: 1,
            nombre: 'Piratas del Sombrero de Paja',
            capitan: 'Monkey D. Luffy',
            comandantes: 10,
            barco: 'Thousand Sony',
            bandera: '../src/assets/mugiwara.jpeg',
            categoria: 'Emperador del Mar',
            poder: 87
        },
        {
            id: 2,
            nombre: 'Piratas de Barbanegra',
            capitan: 'Marshall D. Teach',
            comandantes: 10,
            barco: 'Saber of Xebec',
            bandera: '../src/assets/barbanegra.jpeg',
            categoria: 'Emperador del Mar',
            poder: 95
        },
        {
            id: 3,
            nombre: 'Piratas del Pelirrojo',
            capitan: 'Shanks',
            comandantes: 10,
            barco: 'Red Force',
            bandera: '../src/assets/shanks.jpg',
            categoria: 'Emperador del Mar',
            poder: 101
        },
        {
            id: 4,
            nombre: 'Piratas de Buggy',
            capitan: 'Buggy',
            comandantes: 6,
            barco: 'Big Top',
            bandera: '../src/assets/buggy.jpg',
            categoria: 'Emperador del Mar',
            poder: 56
        },
        {
            id: 5,
            nombre: 'Piratas de Barbablanca ‡',
            capitan: 'Edward Newgate ‡',
            comandantes: 16,
            barco: 'Moby Dick',
            bandera: '../src/assets/barbablanca.png',
            categoria: 'Emperador del Mar ‡',
            poder: 140
        },
        {
            id: 6,
            nombre: 'Piratas de Big Mom ‡',
            capitan: 'Charlotte Linlin ‡',
            comandantes: 40,
            barco: 'Queen Mama Charter',
            bandera: '../src/assets/bigmom.jpeg',
            categoria: 'Emperador del Mar ‡',
            poder: 109
        },
        {
            id: 7,
            nombre: 'Piratas de las Bestias ‡',
            capitan: 'Kaidou ‡',
            comandantes: 3,
            barco: 'Desconocido',
            bandera: '../src/assets/kaido.jpg',
            categoria: 'Emperador del Mar ‡',
            poder: 120
        },
        {
            id: 8,
            nombre: 'Piratas de Roger ‡',
            capitan: 'Gol D. Roger ‡',
            comandantes: 32,
            barco: 'Oro Jackson',
            bandera: '../src/assets/roger.jpeg',
            categoria: 'Emperador del Mar ‡',
            poder: 172,
        },
        {
            id: 9,
            nombre: 'Piratas de Kuja',
            capitan: 'Boa Hancock',
            comandantes: 16,
            barco: 'Perfume Yuda',
            bandera: '../src/assets/kuja.webp',
            categoria: 'Guerrero del Mar ‡',
            poder: 72,
        },
        {
            id: 10,
            nombre: 'Piratas Donquixote ‡',
            capitan: 'Donquixote Doflamingo ‡',
            comandantes: 0,
            barco: 'desconocido',
            bandera: '../src/assets/donquixote.webp',
            categoria: 'Guerrero del Mar ‡',
            poder: 89,
        },
        {
            id: 11,
            nombre: 'Piratas Barrocos ‡',
            capitan: 'Crocodile ‡',
            comandantes: 20,
            barco: 'desconocido',
            bandera: '../src/assets/barrocos.webp',
            categoria: 'Guerrero del Mar ‡',
            poder: 62,
        },
        {
            id: 12,
            nombre: 'Piratas de Thriller Bark ‡',
            capitan: 'Gecko Moria ‡',
            comandantes: 15,
            barco: 'Thriller Bark',
            bandera: '../src/assets/trillerbark.jpeg',
            categoria: 'Guerrero del Mar ‡',
            poder: 88,
        },
        {
            id: 13,
            nombre: 'Piratas de Heart ‡',
            capitan: 'Trawfalgar D. Law ‡',
            comandantes: 20,
            barco: 'Polar Tang',
            bandera: '../src/assets/heart.webp',
            categoria: 'Guerrero del Mar ‡',
            poder: 71,
        },
        {
            id: 14,
            nombre: 'Piratas del Sol ‡',
            capitan: 'Jimbei ‡',
            comandantes: 9,
            barco: 'Barco del Sol',
            bandera: '../src/assets/sol.webp',
            categoria: 'Guerrero del Mar ‡',
            poder: 85,
        },
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{tripulaciones, setTripulaciones, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}