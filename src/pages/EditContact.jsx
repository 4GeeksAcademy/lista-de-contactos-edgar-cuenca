import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const EditContact = () => {
    // useParams sirve para capturar el ID de la URL
    const { id } = useParams(); 
    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });

    useEffect(() => {
        const loadContact = async () => {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/my-agenda/contacts/${id}`);
            if (response.ok) {
                const data = await response.json();
                setContact(data); // aqui se llena el formulario con lo que mande la API
            }
        };
        loadContact();
    }, [id]);

    return (
        <div className="container mt-5">
            <h2>Editando Contacto ID: {id}</h2>
            <input 
                className="form-control mb-2" 
                value={contact.name} 
                onChange={(e) => setContact({...contact, name: e.target.value})} 
            />
            {/* ... otros inputs ... */}
            <button className="btn btn-success">Actualizar</button>
        </div>
    );
};