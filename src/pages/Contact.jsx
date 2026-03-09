import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getContacts } from "../actions";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        getContacts(dispatch);
    }, [dispatch]);

    if (store.loadingContacts) return (
        <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p>Cargando tu agenda...</p>
        </div>
    );

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Mis Contactos</h1>
                <button className="btn btn-success" onClick={() => navigate("/add")}>
                    + Nuevo Contacto
                </button>
            </div>

            {store.contacts.length === 0 ? (
                <div className="alert alert-info">No hay contactos. ¡Agrega el primero!</div>
            ) : (
                <div className="list-group">
                    {store.contacts.map(c => (
                        <ContactCard 
                            key={c.id} 
                            contact={c} 
                            onEdit={(contact) => navigate("/add", { state: contact })} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};