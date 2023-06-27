import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import img1 from '../product/3.jpeg';
import img2 from '../product/2.jpg';
import img3 from '../product/4.webp';
import img4 from '../product/5.webp';
import '../product/Product.css'

const images = {
    img1,
    img2,
    img3,
    img4,
};
export default function Product() {

    const { id_auto } = useParams();
    const [product, setProduct] = useState([]);
    const [loanding, setLoanding] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoanding(true);
            const response = await fetch(`http://localhost:4000/apiCar/autos/${id_auto}`);
            setProduct(await response.json());
            setLoanding(false);
        };

        getProduct();
    }, []);



    const Loanding = () => {
        return (
            <>
                Loanding.....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={img1} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col md-6">
                    <h4 className='text-uppercase text-black-50'> {product.marca}</h4>
                    <h1 className='display-5'>{product.modelo}</h1>
                    <span className="text">Fecha Alquiler</span>
                    <input className='btn btn-outline-dark p-2' type="date" placeholder="Fecha de inicio" />
                    <span className="text">Fecha Devolución</span>
                    <input type="date" className='btn btn-outline-dark p-2' placeholder="Fecha de fin" />
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.precio}
                    </h3>
                    <p className="lead">{product.detalles}</p>
                    <p className="lead">{product.estado}</p>
                    <p className="lead">{product.tipo}</p>
                    <div>
                        <label className='form-label'>Reserva</label>
                        <input type="radio" name="opciones1" value="Masculino" id="opcion1" />
                        <br />
                        <label className='form-label'>PayPal</label>
                        <input type="radio" name="opciones1" value="Femenino" id="opcion2" />
                        <br />
                        <label className='form-label'>Efectivo</label>
                        <input type="radio" name="opciones1" value="Efectivo" id="opcion2" />
                        <br />
                        <label className='form-label'>Mercado Pago</label>
                        <input type="radio" name="opciones1" value="Efectivo" id="opcion2" />
                    </div>
                    <Link to="/pago" className='btn btn-outline-dark p-2'>
                        Rentar
                    </Link>
                </div>
            </>
        )
    }



    return (
        <div>
            <div className="container-product">
                <div className="row">
                    {loanding ? <Loanding /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
