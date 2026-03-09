import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const API_BASE = "https://playground.4geeks.com/contact/agendas/my-agenda";
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener contactos
  const getContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/contacts`);
      const data = await res.json();
      setContacts(data.contacts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Crear contacto
  const createContact = async (contact) => {
    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const newContact = await res.json();
      setContacts([...contacts, newContact]);
    } catch (err) {
      console.error(err);
    }
  };

  // Actualizar contacto
  const updateContact = async (id, updatedContact) => {
    try {
      const res = await fetch(`${API_BASE}/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      });
      const data = await res.json();
      setContacts(
        contacts.map((c) => (c.id === id ? data : c))
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Eliminar contacto
  const deleteContact = async (id) => {
    try {
      await fetch(`${API_BASE}/contacts/${id}`, {
        method: "DELETE",
      });
      setContacts(contacts.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Cargar contactos al inicio
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        loading,
        createContact,
        updateContact,
        deleteContact,
        getContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};