import React, { useState } from 'react'
import '../login/Login.css'
import Logo from '../login/Logo.png'
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí realizar la lógica de autenticación
        console.log('Iniciar sesión:', email, password);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Aquí  implementar la lógica para recuperar la contraseña
        console.log('Recuperar contraseña:', email);
        setForgotPassword(false);
    };

    return (
        <div className="login-container">
            <h2>BIENVENIDO</h2>
            <div className="contenedor-logo">
            <img className='LogoL' src={Logo} alt="Logo empresa" />
            </div>
            <form className='form-login' onSubmit={handleLogin}>
                <div className="form-group-login">
                    <label className='label-login' htmlFor="email">Correo electrónico:</label>
                    <input className='input-login'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {!forgotPassword ? (
                    <div className="form-group-login">
                        <label className='label-login' htmlFor="password">Contraseña:</label>
                        <input className='input-login'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                ) : null}
                {!forgotPassword ? (
                    <button className='button-login' type="submit">Iniciar sesión</button>
                ) : (
                    <button className='button-login' onClick={() => setForgotPassword(false)}>Volver</button>
                )}
                {!forgotPassword ? (
                    <p className="forgot-password" onClick={() => setForgotPassword(true)}>
                        ¿Olvidaste tu contraseña?
                    </p>
                ) : (
                    <div className="form-group">
                        <label className='label-login' htmlFor="email-forgot">Correo electrónico:</label>
                        <input  className='input-login' type="email" id="email-forgot" />
                        <button className='button-login' onClick={handleForgotPassword}>Recuperar contraseña</button>
                    </div>
                )}
            </form>
        </div>
    )
}
