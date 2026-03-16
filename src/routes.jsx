// /src/routes.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />          
      <Route path="contact" element={<Contact />} />   
      <Route path="add" element={<AddContact />} />
      {/* RUTA DINÁMICA: El :id es la variable que detectará useParams */}
      <Route path="edit/:id" element={<EditContact />} />    
    </Route>
  )
);