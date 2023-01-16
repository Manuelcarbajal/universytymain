import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Formus = ({post , setPost }) => {
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }



    // const [body, setBody] = useState('');
    const [body, setBody] = useState('');
    const [num,setNum] = useState([])

    const handleChange = e => {
        setBody(e.target.value);
    }

    const handleChangetwo = e => {
        setNum(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!body.length) {
            alert('Pon algo para postear!')
        }
      

        axios.post('/post/', {
            name: body,
            creditos: num
        }).then((response) => {
            setBody('');
            setNum([]);
            const { data } = response;
           setPost([
                ...post,
                data
           ])
        })
    }
   
    return (
        <div>
            <h1>Agregar Curso</h1>
            <div className='card'>
                <div className='card-body'>
                    <Form id='formulario' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                name='txtname'
                                className='form-control'
                                placeholder='Nombre'
                                onChange={handleChange}
                                value={body}
                                minLength='3'
                                maxLength='30'
                                expresionRegular={expresiones.nombre}
                                autoFocus
                                required
                                 />
                        </div>
                        <div className='form-group'>
                            <input
                                id='numcur'
                                type='number'
                                name='numcreditos'
                                className='form-control'
                                min='1' max='10'
                                step='1'
                                placeholder='0'
                                onChange ={handleChangetwo} 
                                value={num}
                                autoFocus
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <Button variant='dark' type='submit'>
                                POST
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>

            
        </div>
        
    )
}

export default Formus