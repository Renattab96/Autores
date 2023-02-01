import React, { useState } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';


const Editar = () => {

    const [nombre_autor, setautores] = useState('');
    const [frase, setfrase] = useState('');
    
    //Sirve para obtener el id de la ruta 
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Autor/filtrar/${id}`)
            .then((res)=>{
                console.log(res)
                setautores(res.data.nombre_autor)
                setfrase(res.data.frase)
            }).catch((err) => {
                console.log(err)
              });
    },[id])

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/Autor/edicion/${id}`,{
            nombre_autor,
            frase
        }).then((res)=>{
            console.log(res)
            navigate('/autorlist/*')
        }).catch((err) => {
            console.log(err)
          });
    }

    // const deleteHandler =(e)=>{
    //     axios.delete(`http://localhost:8000/api/Autor/borrar/${id}`)
    //     .then((res)=>{
    //         navigate('/autorlist/*')
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <ul>
                    <li>
                        <label htmlFor="">Nombre:</label>
                        <input type="text" className='form-control' value={nombre_autor} onChange={(e) => setautores(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="">Frase:</label>
                        <input type="text" className='form-control' value={frase} onChange={(e) => setfrase(e.target.value)} />
                    </li>
                    <li>
                        <button type='submit' >Actualizar</button>
                       <button><Link to={'/autorlist/*'} >Cancelar</Link></button>   
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Editar;