// import  { useEffect , useState} from "react"

import axios from 'axios';
import {  Link, } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/AutorList.css'
import './Editar'
const AutorList = () => {

  const [autor, setautores] = useState([])
  // LLama a la lista de los autores 
  useEffect(() => {
    axios.get('http://localhost:8000/api/Autors',)
    .then((res) => {
      console.log(res);
      setautores(res.data)
      }).catch((err) => {
         console.log(err)
      })
  },[])
 
// const borrardato =(id)=>{
//   axios.delete(`http://localhost:8000/api/Autor/borrar/${id}`)
//       .then((res)=>{
//         console.log('elemento borrado', id)
//       }).catch((err)=>{
//           console.log(err)
//       })
// }

  return (
    <div className="autorlist" >
      <h3>Lista de Autores</h3>
      <p>Los Autores y sus frases</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Autor</th>
              <th>Frases </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              autor.map((autor, index) => {
                return (<tr key={index}>
                  <td>{autor.nombre_autor}</td>
                  <td>{autor.frase}</td>
                  <td>
                    <button><Link to={`/editar/${autor._id}`} >Editar</Link></button>
                    <button>Eiminar</button>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AutorList;