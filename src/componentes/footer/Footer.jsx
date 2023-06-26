import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div style={{ backgroundColor: ' #043492' }} >
      <footer  className="text-center text-lg-start bg-light text-muted" >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: ' #043492' }}>
          <div className="me-5 d-none d-lg-block">
            <span style={{ color: 'white' }}>Conéctate con nosotras en las redes sociales:</span>
          </div>
          <div style={{ color: 'white' }}>
            <a href="#" className="me-4 text-reset">
              <FaFacebookF />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaTwitter />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaGoogle />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaLinkedin />
            </a>
            <a href="#" className="me-4 text-reset">
              <FaGithub />
            </a>
          </div>
        </section>
        <section style={{ backgroundColor: ' #043492' }}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3" style={{ color: 'white' }}>
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i><b>R</b>enta<b>C</b>ar
                </h6>
                <p>
                Alquila autos de calidad a precios accesibles.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Información</h6>
                <p>
                  <a href="#!" className="text-reset">
                    ¿Quienes somos?
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nuestra Mision
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nuestra Vision
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    ¿Porque nosotros?
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Ubicación</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Riobamba, Chimborazo, Ecuador
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Telf. 0956461616
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Telf. 3251564165
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
