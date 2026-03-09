const API_BASE = "https://playground.4geeks.com/contact/agendas/my-agenda";

// Obtener todos los contactos
export const getContacts = async (dispatch) => {
    dispatch({ type: "SET_LOADING_CONTACTS", payload: true });
    try {
        const res = await fetch(`${API_BASE}/contacts`);
        if (res.status === 404) {
            // Si la agenda no existe, se envia la lista vacía
            dispatch({ type: "SET_CONTACTS", payload: [] });
            return;
        }
        const data = await res.json();
        dispatch({ type: "SET_CONTACTS", payload: data.contacts || [] });
    } catch (err) {
        console.error("Error cargando contactos:", err);
        dispatch({ type: "SET_LOADING_CONTACTS", payload: false });
    }
};

// Guardar (Crear o Editar)
export const saveContact = async (contact, dispatch, navigate, isEdit = false) => {
    const url = isEdit ? `${API_BASE}/contacts/${contact.id}` : `${API_BASE}/contacts`;
    
    try {
        let res = await fetch(url, {
            method: isEdit ? "PUT" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact),
        });

        // Si la agenda no existe al intentar crear un contacto (Error 404)
        if (res.status === 404 && !isEdit) {
            console.log("Creando agenda...");
            const createAgenda = await fetch(API_BASE, { method: "POST" });
            if (createAgenda.ok) {
                // Re-intentamos el POST del contacto
                res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contact),
                });
            }
        }

        if (res.ok) {
            const data = await res.json();
            dispatch({ type: isEdit ? "UPDATE_CONTACT" : "ADD_CONTACT", payload: data });
            navigate("/contact");
        }
    } catch (err) {
        console.error("Error al guardar:", err);
    }
};

// Eliminar
export const deleteContact = async (id, dispatch) => {
    try {
        const res = await fetch(`${API_BASE}/contacts/${id}`, { method: "DELETE" });
        if (res.ok) {
            dispatch({ type: "DELETE_CONTACT", payload: id });
        }
    } catch (err) {
        console.error("Error al eliminar:", err);
    }
};