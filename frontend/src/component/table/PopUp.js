import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

const PopUp = ({show, setShow , setRecord , record , post=[] , setPost}) => {
    //edit
    const handleUpdate = async (id, value) => {
        return axios.put(`/put/${id}/`, value)
            .then((response) => {
                const { data } = response;
                console.log(response.data)
                const newCurso = post.map(curso => {
                    if (curso.id === id) {
                        return data;
                        
                    }
                    return curso;
                    
                })
                setPost(newCurso)
            }).catch(() => {
                alert('No se pudo actualizar')
            })
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleSaveChanges = async () => {
        await handleUpdate(record.id, { name: record.name , creditos: record.creditos });
        handleClose();
    }

    //muestra lo que se quiere actualizar 

    const handleChange = (e) => {
        setRecord({
            ...record,
            name: e.target.value
        })
    }

    const handlechangenum = (e) => {
        setRecord({
            ...record,
            creditos: e.target.value
        })
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>

                <ModalHeader closeButton>
                    <Modal.Title>
                        EDIT BLOG
                    </Modal.Title>
                </ModalHeader>

                <Modal.Body>
                    <FormControl
                        value={record ? record.name : ''}
                        onChange={handleChange}
                    />
                    <FormControl
                        value={record ? record.creditos : []}
                        type='number'
                        min='1' max='10'
                        placeholder='0'
                        onChange={handlechangenum}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='dark' onClick={handleClose}>
                        CERRAR
                    </Button>

                    <Button variant='dark' onClick={handleSaveChanges}>
                        SAVE
                    </Button>
                </Modal.Footer>

            </Modal>

        </div>
    )
}

export default PopUp