import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../actions";

const ContactCard = ({ contact }) => {
    const { dispatch } = useGlobalReducer();
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="list-group-item d-flex justify-content-between align-items-center p-3 shadow-sm mb-2 bg-white rounded position-relative">
            <div className="d-flex flex-column">
                <h5 className="mb-1 fw-bold">{contact.name}</h5>
                <p className="mb-0 text-secondary small">
                    <i className="fa-solid fa-location-dot me-2"></i>{contact.address}
                </p>
                <p className="mb-0 text-secondary small">
                    <i className="fa-solid fa-phone me-2"></i>{contact.phone}
                </p>
                <p className="mb-0 text-secondary small">
                    <i className="fa-solid fa-envelope me-2"></i>{contact.email}
                </p>
            </div>

            <div className="d-flex align-self-start mt-1">
                <Link 
                    to={`/edit/${contact.id}`} 
                    state={contact} 
                    className="btn btn-link text-secondary p-1 me-3"
                    style={{ fontSize: "0.9rem" }}
                >
                    <i className="fa-solid fa-pencil"></i>
                </Link>
                
                <button 
                    className="btn btn-link text-secondary p-1" 
                    onClick={() => setShowConfirm(true)}
                    style={{ fontSize: "0.9rem" }}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

            {/* Confirmación de borrar */}
            {showConfirm && (
                <div className="position-absolute bg-light border p-2 rounded shadow-sm" style={{ right: "60px", top: "10px", zIndex: 10 }}>
                    <span className="small d-block mb-1 text-dark">¿Eliminar?</span>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-danger me-1 py-0 px-2" onClick={() => deleteContact(contact.id, dispatch)}>Sí</button>
                        <button className="btn btn-sm btn-secondary py-0 px-2" onClick={() => setShowConfirm(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactCard;