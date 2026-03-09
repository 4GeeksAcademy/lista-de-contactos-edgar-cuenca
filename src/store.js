export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],
    contacts: [],            // lista de contactos
    loadingContacts: true,   // indicador de carga
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...store, contacts: action.payload, loadingContacts: false };
    case "ADD_CONTACT":
      return { ...store, contacts: [...store.contacts, action.payload] };
    case "UPDATE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map(c => (c.id === action.payload.id ? action.payload : c))
      };
    case "DELETE_CONTACT":
      return { ...store, contacts: store.contacts.filter(c => c.id !== action.payload) };
    case "SET_LOADING_CONTACTS":
      return { ...store, loadingContacts: action.payload };

    default:
      throw Error("Unknown action.");
  }
}