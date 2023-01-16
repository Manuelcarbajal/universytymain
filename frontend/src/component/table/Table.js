import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

//component 
import Formus from './Form'
import Date from './date'
import PopUp from './PopUp'

//import boostrap
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';


//import style
import './Table.scss'

function Tablefun() {


    //vicnualdos con edit
    const [show, setShow] = useState(false);
    const [record, setRecord] = useState(null);

    // vinculado con el gety casi todo
    const [post, setPost] = useState([])


    //mostar
    useEffect(() => {
        axios.get('/get/').then((response) => {
            setPost(response.data)
        }).catch(() => {
            alert('Algo anda mal')
        })
    }, [])



    //delete
    const handleDelete = (id) => {
        axios.delete(`/delete/${id}`)
            .then(() => {
                const newCurso = post.filter(curso => {
                    return curso.id !== id

                });
                setPost(newCurso)

            }).catch(() => {
                alert('No se pudo borrar')
            })
    }





    return (
        <div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <Formus post={post} setPost={setPost} />
                    </div>
                    <div className="col-md-8">
                        <h2>Lista de Cursos</h2>
                        <div className="table-responsive">
                            <Table striped bordered hover size="sm" >
                                <thead>
                                    <tr>
                                        <th className='center'>#</th>
                                        <th className='center'> Name</th>
                                        <th className='center'>Creditos</th>
                                        <th className='center'>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Object.values(post).map((date, index) => { //error en el .map no es una funcion agregar el objects.values para obtener una matriz de los valores del objeto.
                                        return (
                                            <tr key={index.id}>
                                                <td>
                                                    {/* para increentar valor e uno en uno llamar al index y sumarle uno haci  */}
                                                    <Date name={index + 1} />
                                                </td>
                                                <td>
                                                    <Date name={date.name} />
                                                </td>
                                                <td>
                                                    <Date name={date.creditos} />
                                                </td>
                                                <td>
                                                    <button onClick={() => { setRecord(date); setShow(true) }}
                                                        className='btn btn-sm btn-block btn-edit'>
                                                        <FaEdit />
                                                    </button>
                                                    <button onClick={() => { handleDelete(date.id) }}
                                                        className='btn btn-sm btn-block btn-trash'>
                                                        <FaTrashAlt />
                                                    </button>

                                                </td>


                                            </tr>
                                        )
                                    })}


                                </tbody>
                            </Table >
                        </div>
                    </div>
                </div>
            </div>


            {/* //Modals PopUp */}
            <PopUp
                show={show} setShow={setShow}
                setRecord={setRecord} record={record}
                post={post} setPost={setPost}
            />

        </div>
    )
}

export default Tablefun


