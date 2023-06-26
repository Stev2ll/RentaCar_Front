import React from 'react'
import '../navbar/Navbar.css'
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 shadowm-sm">
        <div className="container">
          <Link className="navbar-brand" to="#"><b>R</b>enta<b>C</b>ar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/vehiculos">Vehiculos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">Contactos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">Reserva</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">Oficina</Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark ms-2">
                <FiLogIn className="me-1" /> Login
              </Link>
              <Link to="/registro" className="btn btn-outline-dark ms-2">
                <FiUserPlus className="me-1" /> Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
