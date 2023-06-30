import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../product/3.jpeg';
import img2 from '../product/2.jpg';
import img3 from '../product/4.webp';
import img4 from '../product/5.webp';
import '../product/Product.css';
import Swal from 'sweetalert2';

const images = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
};

export default function Product() {
    const { id_auto } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [maxEndDate, setMaxEndDate] = useState('');

    const currentDate = new Date();
    const minDate = currentDate.toISOString().slice(0, 10); // Fecha actual

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:4000/apiCar/autos/${id_auto}`);
            setProduct(await response.json());
            setLoading(false);
        };

        getProduct();
    }, [id_auto]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            if (startDate && endDate) {
                const start = new Date(startDate);
                const end = new Date(endDate);
                const diffTime = Math.abs(end - start);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const pricePerDay = parseFloat(product.precio);
                const totalPrice = diffDays * pricePerDay;
                setTotalPrice(totalPrice);
            }
        };

        calculateTotalPrice();
    }, [startDate, endDate, product.precio]);

    const handleStartDateChange = (event) => {
        const selectedStartDate = event.target.value;
        setStartDate(selectedStartDate);
        setEndDate(''); // Reiniciar la fecha de devolución al cambiar la fecha de alquiler

        // Actualizar la fecha máxima seleccionable en el campo de Fecha Devolución
        const selectedStart = new Date(selectedStartDate);
        const maxEndDate = new Date(selectedStart.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
        setMaxEndDate(maxEndDate);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const Loading = () => {
        return <div>Loading....</div>;
    };

    //funcion de pagar 
    const Pagar= () =>{
        Swal.fire({
            title: 'Confirmar',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: '¡Exito!',
                    title: 'Se ha guardado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
        
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-5">
                    <img src={images[id_auto]} alt={product.title} height="300px" width="300px" />
                </div>
                <div className="col md-6">
                    <h4 className="text-uppercase text-black-50">{product.marca}</h4>
                    <h1 className="display-5">{product.modelo}</h1>
                    <div className="fechas">
                        <div className="form-floating" style={{ width: '200px'}}>
                            <input className="form-control" type="date" value={startDate} onChange={handleStartDateChange} placeholder="Fecha de inicio"
                                min={minDate}
                            />
                            <label htmlFor="startDate" className="text">Fecha Alquiler</label>
                        </div>
                        <div className="form-floating" style={{ width: '200px' , marginTop: '10px' }}>
                            <input type="date"  className="form-control" value={endDate}  onChange={handleEndDateChange} placeholder="Fecha de fin"
                                min={startDate}
                                max={maxEndDate}
                            />
                            <label htmlFor="endDate" className="text">Fecha Devolución</label>
                        </div>
                    </div>

                    <h3 className="display-6 fw-bold my-4">${product.precio}</h3>
                    <h4 className="display-6 fw-bold">Total: ${totalPrice}</h4>
                    <p className="lead">{product.detalles}</p>
                    <p className="lead">{product.estado}</p>
                    <p className="lead">{product.tipo}</p>

                    <div>
                        <label className="form-label" style={{ marginRight: '5px' }}>Reserva</label>
                        <input style={{ marginRight: '10px' }} type="radio" name="opciones1" value="Masculino" id="opcion1" />
                        <label className="form-label" style={{ marginRight: '5px' }}>Transferencia</label>
                        <input  style={{ marginRight: '10px' }} type="radio" name="opciones1" value="Femenino" id="opcion2" />
                        <label className="form-label" style={{ marginRight: '5px' }}>Efectivo</label>
                        <input style={{ marginRight: '10px' }} type="radio" name="opciones1" value="Efectivo" id="opcion2" />
                        <label className="form-label" style={{ marginRight: '5px' }}>Mercado Pago</label>
                        <input  style={{ marginRight: '10px' }} type="radio" name="opciones1" value="Efectivo" id="opcion2" />
                    </div>
                    <button className="btn btn-outline-dark ms-2" onClick={Pagar}>
                        Pagar
                    </button>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="container-product">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}
