import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../style/PanesLista.css"


const PanesLista = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const manejarListaPanes  = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else if (error.response.status == 401) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    manejarListaPanes();
  }, []);

  return (
    <div className="main-listaPanes">
      {data.map((result) => {
        return (
          <div
            key={result._id}
            className="casillas"
          >
            <div>
              <img
                src={result.imagen}
                alt={result.descripcion}
                className="imagenes"
              />
            </div>
            <div className="nombres-pan">{result.descripcion}</div>
            <div className="precio">
              {"$" + result.valor}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PanesLista;