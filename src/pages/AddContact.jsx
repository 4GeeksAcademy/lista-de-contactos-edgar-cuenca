import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { saveContact } from "../actions";

export const AddContact = () => {
    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams(); // Detecta si hay un ID en la URL

    // 1. Iniciamos el estado vacío
    const [contact, setContact] = useState({
        name: "", phone: "", email: "", address: ""
    });

    // 2. Este useEffect es el "cerebro" que llena los campos
    useEffect(() => {
        // Si venimos de un clic en "Editar", el objeto está en location.state
        if (location.state) {
            setContact(location.state);
        } 
        // Si no hay state pero hay ID (por si refrescan la página), 
        // podrías hacer un fetch aquí, pero con el state es más rápido.
    }, [location.state]);

    const handleChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Si hay ID, es una edición (PUT), si no, es creación (POST)
        saveContact(contact, dispatch, navigate, !!id);
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm p-4">
                <h2 className="mb-4">{id ? "Editar Contacto" : "Agregar Nuevo Contacto"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Nombre Completo</label>
                        <input 
                            name="name" 
                            value={contact.name || ""} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Ej: Juan Pérez" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input 
                            name="email" 
                            type="email" 
                            value={contact.email || ""} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="juan@gmail.com" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Teléfono</label>
                        <input 
                            name="phone" 
                            value={contact.phone || ""} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="55 1234 5678" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Dirección</label>
                        <input 
                            name="address" 
                            value={contact.address || ""} 
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Calle Falsa 123" 
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 mb-2">
                        {id ? "Guardar Cambios" : "Guardar Contacto"}
                    </button>
                    <Link to="/contact" className="btn btn-link w-100 text-secondary text-decoration-none">
                        o volver a contactos
                    </Link>
                </form>
            </div>
        </div>
    );
};