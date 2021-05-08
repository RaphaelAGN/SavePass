import React, { useEffect, useState } from 'react';
import './styles.css'
import Modal from 'react-modal';
import strings from '../../assets/strings/strings'

import { Fab } from '@material-ui/core';
import Button from '@material-ui/core/Button'

import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

import { v4 as uuidv4 } from 'uuid';

const ModalAccountServiceForm = () => {

    //state do modal aberto 
    const [isMainOpen, setIsMainOpen] = useState(false);

    //state do input para editar o nome da categoria
    const [edit, setEdit] = useState(false);

    //use states para a lista, nome a ser inserido na lista e abertura do Modal
    const [list, setList] = useState(JSON.parse(localStorage.getItem('categoriesList')) || []);
    const [name, setName] = useState('');

    useEffect(() => {
        localStorage.setItem('categoriesList', JSON.stringify(list))
    }, [list])

    //função responsável por adicionar item na lista, passando o estado da lista atual mais o que será inserido (nome e id)
    const handleAdd = () => {
        setList(oldList => [...oldList, {name, id: uuidv4()}]);
        setName('');
    }

    //função responsável por deletar o item da lista selecionado através de um filter em cima da lista atual (...list)
    const handleDeleteItemList = (id) => {
        setList(oldList => [...oldList.filter((item) => item.id !== id)]);
    }

    //função que lida com mudança no input
    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    const openModal = () => {
        setIsMainOpen(true)
    }

    const closeModal = () => {
        setIsMainOpen(false)
    }

    //função para alterar o item a ser editado após o click no edit button
    const confirm = () => {
        setEdit(false)
        setList((oldList) => oldList.map((item) => ({
            ...item,
            name: edit === item.id ? name: item.name,
        })))
    }

    //função para definir ação de enter após clicar no edit button
    const teclaEnter = (e) => {
        if (e.key === 'Enter') confirm();
    };

    return (
        <div>
            <div>
                {list.length === 0 ? 
                    <h2 className="empty-list">{strings.emptyCategoriesListH2}</h2> :
                    <div className="list">
                        <h2 className="list-title">{strings.categoriesListH2}</h2>
                        <ul>
                            {list.map((item) => ( 
                                <li key={item.id}> { /*Método que percorre a lista adicionando um li com ícones */}
                                    {  edit === item.id ? 
                                        <input 
                                            onBlur={confirm} 
                                            onKeyPress={(e) => teclaEnter(e)} 
                                            type="text" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)}
                                            autoFocus/> 
                                    : 
                                        <div>
                                            <span>{item.name}</span>
                                            <InfoIcon className="list-icon" id="info-icon"/>
                                            <DeleteIcon className="list-icon" id="delete-icon" onClick={() => handleDeleteItemList(item.id)}/>
                                            <EditIcon className="list-icon" id="edit-icon" onClick={() => setEdit(item.id)}/>
                                        </div>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
            <Fab className="fabAddFloatButton" aria-label="add" onClick={openModal}>
                <AddIcon />
            </Fab>
            <Modal
                className="Modal"
                overlayClassName="Overlay"
                isOpen={isMainOpen}
                onRequestClose={closeModal}>
                <h2>{strings.categoryFormH2}</h2>
                <form className="form" onSubmit={(e) => {
                    handleAdd();
                    e.preventDefault();
                }}>
                    <div className="form-inputs">
                        <label>
                            {strings.categoryFormLabel}
                            <input placeholder="Ex: Gmail" value={name} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <Button className="submit-button" onClick={handleAdd}>{strings.submitFormButton}</Button>
                    <Fab className="fabCloseFloatButton" aria-label="add" onClick={closeModal}>
                        <CloseIcon />
                    </Fab>
                </form>  
            </Modal>
        </div>
    )
}

export default ModalAccountServiceForm