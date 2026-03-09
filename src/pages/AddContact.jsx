import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { saveContact } from "../actions";

export const AddContact = () => {
    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const location = useLocation();
    const editContact = location.state;  

    const [contact, setContact] = useState({
        name: "", phone: "", email: "", address: ""
    });

    useEffect(() => {
        if (editContact) setContact(editContact);
    }, [editContact]);

    const handleChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        saveContact(contact, dispatch, navigate, !!editContact);
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm p-4">
                <h2>{editContact ? "Editar Contacto" : "Agregar Nuevo Contacto"}</h2>
                <form onSubmit={handleSubmit} className="mt-3">
                    <div className="mb-3">
                        <label className="form-label">Nombre Completo</label>
                        <input name="name" value={contact.name} onChange={handleChange} className="form-control" placeholder="Juan Pérez" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" type="email" value={contact.email} onChange={handleChange} className="form-control" placeholder="juan@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input name="phone" value={contact.phone} onChange={handleChange} className="form-control" placeholder="55 1234 5678" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <input name="address" value={contact.address} onChange={handleChange} className="form-control" placeholder="Calle Falsa 123, CDMX" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 mb-2">
                        {editContact ? "Actualizar Cambios" : "Guardar Contacto"}
                    </button>
                    <Link to="/contact" className="btn btn-link w-100 text-secondary text-decoration-none">
                        Volver a contactos
                    </Link>
                </form>
            </div>
        </div>
    );
};