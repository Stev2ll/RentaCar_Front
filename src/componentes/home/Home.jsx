import React from 'react'
import Img1 from '../home/1.webp'
import '../home/Home.css'
import Buscador from '../home/Buscador'
import Products from '../products/Productos'
import Footer from '../footer/Footer'



export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark  border-0">
                <img src= {Img1} className="card-img" alt="Backgraound" height="775px"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title1 display-3 fw-bolder mb-0">TENEMOS EL VEHÍCULO PARA TI</h5>
                            <p className="card-text lead ">Las mejores opciones para que reserves y aproveches</p>
                        </div>
                    </div>
                    <Buscador/>
            </div>
            <Products/>
            <Footer/>
        </div>
    )
}
