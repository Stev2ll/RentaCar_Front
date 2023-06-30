import React, { useState } from 'react';
import '../registrar/Registro.css';
import {
    verificarNombre,
    verificarApellido,
    verificarGenero,
    verificarCedula,
    verificarContrasena,
    verificarCorreo,
    validarFechasLicencia
} from '../../hooks/rulesRegistro';
import Swal from 'sweetalert2';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [genero, setGenero] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [fechaEmision, setFechaEmision] = useState('');
    const [fechaCaducidad, setFechaCaducidad] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar nombre
        if (!verificarNombre(nombre)) {
            setError('Nombre inválido');
            return;
        }
        // Validar apellido
        if (!verificarApellido(apellido)) {
            setError('Apellido inválido');
            return;
        }
        // Validar cédula
        if (!verificarCedula(cedula)) {
            setError('Cédula inválida');
            return;
        }
        // Validar género
        if (!verificarGenero(genero)) {
            setError('Género inválido');
            return;
        }
        // Validar correo
        if (!verificarCorreo(correo)) {
            setError('Correo inválido');
            return;
        }
        // Validar contraseña
        if (!verificarContrasena(contrasena)) {
            setError('La contraseña debe tener 1 mayuscula,1 caracter especial');
            return;
        }
        // Validar fechas de licencia
        if (!validarFechasLicencia(fechaEmision, fechaCaducidad)) {
            setError('Fechas de licencia inválidas');
            return;
        }
        setError('');
    };
    //funcion confirmar
    const Confirmar= () =>{
        Swal.fire({
            title: 'Confirmar',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Registar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha registrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    return (
        <div className='Formulario'>
            <h2>Registrarse</h2>
            <form className='w-100' onSubmit={handleSubmit}>
                <div>
                    <label className='form-label'>Nombres</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    {error === 'Nombre inválido' && <div className="alert alert-danger p-1">{error}</div>}
                </div>
                <div>
                    <label className='form-label'>Apellidos</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    {error === 'Apellido inválido' && <div className="alert alert-danger p-1">{error}</div>}
                </div>
                <div>
                    <label className='form-label'>Cédula</label>
                    <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                    {error === 'Cédula inválida' && <div className="alert alert-danger p-1">{error}</div>}
                </div>
                <div>
                    <label className='form-label'>Correo</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {error === 'Correo inválido' && <div className="alert alert-danger p-1">{error}</div>}
                </div>
                <div>
                    <label className='form-label'>Contraseña</label>
                    <input type="password" name="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                    {error === 'Contraseña inválida' && <div className="alert alert-danger p-1">{error}</div>}
                </div>
                <div>
                    <label className="form-label">Género</label>
                    <input
                        type="text" name="genero" value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                    {error === 'Género inválido' && (
                        <div className="alert alert-danger p-1">{error}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="foto">Foto de perfil</label>
                    <input type="file" name="foto" accept=".jpg, .jpeg, .png" />
                    {error === 'Extensión de foto inválida' && <div className="alert alert-danger p-1">{error}</div>}
                </div>
                <div className="licencia">
                    <h3>Datos de licencia</h3>
                    <div>
                        <label htmlFor="fechaEmision">Fecha de Emisión:</label>
                        <input type="date" name="fechaEmision" value={fechaEmision} onChange={(e) => setFechaEmision(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="fechaCaducidad">Fecha de Caducidad:</label>
                        <input type="date" name="fechaCaducidad" value={fechaCaducidad} onChange={(e) => setFechaCaducidad(e.target.value)} />
                        {error === 'Fechas de licencia inválidas' && <div className="alert alert-danger p-1">{error}</div>}
                    </div>
                    <div>
                        <label htmlFor="tipoLicencia">Tipo de licencia: </label>
                        <select id="tipoLicencia" name="tipoLicencia">
                            <option value="Tipo A">Tipo A</option>
                            <option value="Tipo B">Tipo B</option>
                            <option value="Tipo C">Tipo C</option>
                        </select>
                    </div>
                </div>
                <button className='btn btn-warning mt-1 w-100' onClick={Confirmar} >Enviar</button>
            </form>
        </div>
    );
};

export default Registro;
