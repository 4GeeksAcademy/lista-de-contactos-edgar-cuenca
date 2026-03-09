import React from "react";

export const Footer = () => (
    <footer 
        className="footer mt-auto py-4 text-white border-top border-light" 
        style={{ backgroundColor: "#495057", boxShadow: "0 -2px 10px rgba(0,0,0,0.1)" }}
    >
        <div className="container text-center">
            <div className="d-flex justify-content-center align-items-center">
                <span className="h5 mb-0" style={{ color: "#339af0", fontWeight: "700", letterSpacing: "1px" }}>
                    <i className="fa-solid fa-bolt me-2 text-warning"></i> 
                    Proyecto de Edgar Cuenca
                </span>
            </div>
            <div className="mt-2">
                <small style={{ color: "#dee2e6", opacity: "0.8" }}>
                    © 2026 | Desarrollado con React & Flux
                </small>
            </div>
        </div>
    </footer>
);