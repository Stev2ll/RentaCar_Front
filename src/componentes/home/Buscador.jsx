import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import '../home/Buscador.css';

export default function Buscador() {
  return (
    <div>
      <div className="hero-image">
        <div className="overlay">
          <h1>¿BUSCAS RENTAR UN VEHÍCULO?</h1>
          <div className="search-box">
            <span className="text">Fecha Alquiler</span>
            <input type="date" placeholder="Fecha de inicio" />
            <span className="text">Fecha Devolución</span>
            <input type="date" placeholder="Fecha de fin" />
            <span className="text">Tipo de vehículo</span>
            <select>
              <option value="">Tipo de vehículo</option>
              <option value="compacto">Camión</option>
              <option value="sedan">Auto</option>
              <option value="suv">Camioneta</option>
            </select>
            <button>
              Buscar <RiSearchLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
