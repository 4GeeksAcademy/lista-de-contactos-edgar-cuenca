import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 py-3 shadow border-bottom border-secondary">
            <div className="container">
                {/* Logo Principal */}
                <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
                    <i className="fa-solid fa-bolt text-warning me-2 fs-4"></i>
                    <span className="fw-bold fs-4" style={{ color: "#0d6efd", letterSpacing: "0.5px" }}>
                        Agenda Edgar
                    </span>
                </Link>

                {/* Botón Hamburguesa para Móvil */}
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navEdgar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenedor de Botones Unificados */}
                <div className="collapse navbar-collapse" id="navEdgar">
                    <div className="navbar-nav ms-auto align-items-center mt-3 mt-lg-0">
                        
                        {/* Botón Lista: Outline Cian */}
                        <Link to="/contact" className="nav-link px-lg-2 w-100 w-lg-auto">
                            <button className="btn btn-outline-info btn-sm rounded-pill px-4 fw-bold w-100 shadow-sm shadow-hover">
                                <i className="fa-solid fa-list-ul me-2"></i>Lista de Contactos
                            </button>
                        </Link>

                        {/* Botón Añadir: Outline Azul (Ahora igual al de lista) */}
                        <Link to="/add" className="nav-link px-lg-2 w-100 w-lg-auto">
                            <button className="btn btn-outline-primary btn-sm rounded-pill px-4 fw-bold w-100 shadow-sm shadow-hover">
                                <i className="fa-solid fa-plus me-2"></i>Añadir Contactos
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};