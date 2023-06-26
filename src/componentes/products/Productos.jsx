import React, { useState, useEffect } from 'react';
import img1 from '../products/3.jpeg';
import img2 from '../products/2.jpg';
import img3 from '../products/4.webp';
import img4 from '../products/5.webp';
import '../products/Productos.css'
import { Link } from 'react-router-dom';

const images = {
    img1,
    img2,
    img3,
    img4,
};


export default function Productos() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let componentMounted = true;

        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:4000/apiCar/autos");
                const responseData = await response.json();

                if (componentMounted) {
                    setData(responseData);
                    setFilter(responseData);
                    setLoading(false);
                    console.log("Data:", data);
                    console.log("Filter:", filter);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => {
        return (
            <>
              Loanding.....
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Autos</button>
                    <button className="btn btn-outline-dark me-2">Pesados</button>
                    <button className="btn btn-outline-dark me-2">Busetas</button>
                </div>
                        <>
                            {filter.map((autos) => {
                                const imageKey = `img${autos.id_auto}`; // Utiliza la misma clave que tienes en el objeto `images`
                                const imageSrc = images[imageKey];

                                return (
                                    <div className="col-md-4 mb-4" key={autos.id_auto}>
                                        <div className="card h-100 text-center p-4">
                                            <img src={imageSrc} className="card-img-top" alt="..." height="250px" />
                                            <div className="card-body">
                                                <h5 width="10" className="card-title mb-0">{autos.marca.substring(0, 12)}</h5>
                                                <h5 className="card-title">{autos.modelo}</h5>
                                                <p className="card-textlead fw-bold">${autos.precio}</p>
                                                <Link to={`/vehiculos/${autos.id_auto}`} className="btn btn-outline-dark">Ver detalles</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
            </>
        );
    };

    return (
        <div>
            <div className="containerp py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">TODOS LOS VEHÍCULOS Link TU ALCANCE</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    );
}
