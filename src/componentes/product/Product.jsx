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
                    <h4 className='text-uppercase text-black-50'> {product.categoria}</h4>
                    <h1 className='display-5'>{product.titulo}</h1>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.precio}
                    </h3>
                    <p className="lead">{product.descripcion}</p>
                    <Link to="/pago" className='btn btn-outline-dark '>
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
