import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import AddLink from "./AddLink.jsx";

const Logado = () => {
   const { id } = useParams();


  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      setLoading(true);
      const responseLinks = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}/links`
      );
      const response = await axios.get(
        `https://usuarios.ronierlima.dev/users/${id}`
      );
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      alert("Deu erro");
    } finally {
      setLoading(false);
    }
  }

  return loading ? <>carregando...</>:
  <>
  <div id="formulario">
  <Card user={user}></Card>
  </div>
  </>
}

export default Logado;