import React from 'react'
import '../registrar/Registro.css'
import useForm from '../../hooks/userForm'

export default function Registro() {
    const initialData = {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
    }
    const onValidate = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexCedula = /^[0-9]{10}$/;
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const fechaEmision = form.fechaEmision ? new Date(form.fechaEmision) : null;
        const fechaCaducidad = form.fechaCaducidad ? new Date(form.fechaCaducidad) : null;
        const cincoAniosEnMilisegundos = 5 * 365 * 24 * 60 * 60 * 1000;
        const currentDateTime = new Date();

        if (!form || !form.nombre || !form.nombre.trim()) {
            errors.nombre = 'El campo "Nombre" no debe ser vacío.';
        } else if (!regexName.test(form.nombre)) {
            errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
        }

        if (!form || !form.apellido || !form.apellido.trim()) {
            errors.apellido = 'El campo "Apellido" no debe ser vacío.';
        } else if (!regexName.test(form.apellido)) {
            errors.apellido = 'El campo "Apellido" solo acepta letras y espacios.';
        }

        if (!form || !form.cedula || !form.cedula.trim()) {
            errors.cedula = 'El campo "Cédula" no debe ser vacío.';
        } else if (!regexCedula.test(form.cedula)) {
            errors.cedula = 'El campo "Cédula" debe contener 10 números.';
        }

        if (!form || !form.correo || !form.correo.trim()) {
            errors.correo = 'El campo "Correo" no debe ser vacío.';
        } else if (!regexEmail.test(form.correo)) {
            errors.correo = 'El campo "Correo" contiene un formato no válido.';
        }

        if (!form || !form.password || !form.password.trim()) {
            errors.password = 'El campo "Contraseña" no debe ser vacío.';
        } else if (!regexPassword.test(form.password)) {
            errors.password = 'El campo "Contraseña" debe tener al menos 8 caracteres, una letra mayúscula y un número.';
        }

        if (fechaEmision && fechaCaducidad) {
            if (fechaCaducidad < currentDateTime) {
                errors.fechaCaducidad = 'La fecha de caducidad no puede ser anterior a la fecha actual.';
            }

            if (fechaCaducidad - fechaEmision < 0) {
                errors.fechaCaducidad = 'La fecha de caducidad no puede ser anterior a la fecha de emisión.';
            }

            if (fechaCaducidad - fechaEmision > cincoAniosEnMilisegundos) {
                errors.fechaCaducidad = 'La licencia no puede tener más de 5 años de vigencia.';
            }
        }

        return errors;
    }



    const { form, errors, loanding, handleChange, handleSubmit } = useForm(initialData, onValidate)

    return (
        <div className='Formulario'>
            <h2>Registrarse</h2>
            <form className='w-100' onSubmit={handleSubmit}>
                <div>
                    <label className='form-label'>Nombres</label>
                    <input type="text" className='form-control' name='nombre' value={form.nombre} onChange={handleChange} />
                    {errors.nombre && <div className="alert alert-danger p-1">{errors.nombre}</div>}
                </div>
                <div>
                    <label className='form-label'>Apellidos</label>
                    <input type="text" className='form-control' name='apellido' value={form.apellido} onChange={handleChange} />
                    {errors.apellido && <div className="alert alert-danger p-1">{errors.apellido}</div>}
                </div>
                <div>
                    <label className='form-label'>Cédula</label>
                    <input type="text" className='form-control' name='cedula' value={form.cedula} onChange={handleChange} />
                    {errors.cedula && <div className="alert alert-danger p-1">{errors.cedula}</div>}
                </div>
                <div>
                    <label className='form-label'>Correo</label>
                    <input type="email" className='form-control' name="correo" value={form.correo} onChange={handleChange} />
                    {errors.correo && <div className="alert alert-danger p-1">{errors.correo}</div>}
                </div>
                <div>
                    <label className='form-label'>Contraseña</label>
                    <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <div className="alert alert-danger p-1">{errors.password}</div>}
                </div>
                <div>
                    <label className='form-label'>Masculino</label>
                    <input type="radio" name="opciones1" value="Masculino" id="opcion1" />
                    <label className='form-label'>Femenino</label>
                    <input type="radio" name="opciones1" value="Femenino" id="opcion2" />
                </div>
                <div>
                    <label htmlFor="archivo">Selecciona un archivo:</label>
                    <input type="file" id="archivo" name="archivo" />
                </div>
                <div className="licencia">
                    <h3>Datos de licencia</h3>
                    <div>
                        <label htmlFor="fechaEmision">Fecha de Emisión:</label>
                        <input type="date" id="fechaEmision" name="fechaEmision" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="fechaCaducidad">Fecha de Caducidad:</label>
                        <input type="date" id="fechaCaducidad" name="fechaCaducidad" onChange={handleChange} />
                        {errors.fechaCaducidad && <div className="alert alert-danger p-1">{errors.fechaCaducidad}</div>}
                    </div>
                    <div>
                        <label htmlFor="tipoLicencia">Tipo de licencia: </label>
                        <select id="tipoLicencia" name="tipoLicencia" onChange={handleChange}>
                            <option value="Tipo A">Tipo A</option>
                            <option value="Tipo B">Tipo B</option>
                            <option value="Tipo C">Tipo C</option>
                        </select>
                    </div>
                </div>

                <button className='btn btn-warning mt-1 w-100' disabled={loanding}>{loanding ? "Enviando..." : "Enviar"}</button>
            </form>
        </div>
    )
}
