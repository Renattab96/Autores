import React,{useState} from "react";
import '../styles/Agregar.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Agregar =()=>{
  const [nombre_autor, setAutores] = useState('')  
  const [frase, setFrase] = useState('')  

    const navigate = useNavigate()

    const agregardata=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:8000/api/crear/autor',{
        nombre_autor,
        frase
      }).then((res) => {
        console.log(res);
        navigate('/autorlist/:id')
      }).catch((err) => {
           console.log(err)
      })
    }

    return(
        <div className="agregar" >
                <h3>Agregar el Autor y su Frase</h3>
                <form onSubmit={agregardata}>
                    <ul>
                     <li>
                       <label htmlFor="">Nombre:</label>
                       <input type="text" className='form-control' onChange={(e) => setAutores(e.target.value)} />
                     </li>
    
                     <li>
                       <label htmlFor="">Frase:</label>
                       <input type="text" className='form-control'onChange={(e) => setFrase(e.target.value)}/>
                     </li>
                     <li>
                        <button><Link to={'/autorlist/:id'} >Cancelar</Link></button>
                        <button className="btn btn-success" type="submit">Agregar</button>
                     </li>
                    </ul>
                </form>
        </div>
    )
}

export default Agregar;