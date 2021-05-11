import React, { useState, useEffect } from 'react';
import './styles.css'
import Modal from 'react-modal';
import strings from '../../assets/strings/strings'

import { Fab } from '@material-ui/core';
import Select from 'react-select';
import Button from '@material-ui/core/Button'

import DescriptionIcon from '@material-ui/icons/Description';
import LockIcon from '@material-ui/icons/Lock';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { v4 as uuidv4 } from 'uuid';

Modal.setAppElement(document.getElementById('root'))

const ModalAccountsForm = () => {

    //use states para a lista, senha e descrição a serem inseridos na lista e item selecionado no select
    const [list, setList] = useState(JSON.parse(localStorage.getItem('accountsList')) || []);
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [option, setOption] = useState('');
    let categoriesList = JSON.parse(localStorage.getItem('categoriesList'))
    console.log(categoriesList)

    useEffect(() => { //useEffect para colocar a lista no localStorage toda vez que seu estado alterar
        localStorage.setItem('accountsList', JSON.stringify(list))
    }, [list])

    //state do input para editar o nome da categoria
    const [edit, setEdit] = useState(false);

    //state do main modal aberto 
    const [isOpen, setIsOpen] = useState(false);

    //funções que definem o state de abertura e fechamento do modal
    const openMainModal = () => {
        setIsOpen(true)
    }

    const closeMainModal = () => {
        setIsOpen(false);
    }

    //função responsável por adicionar item na lista, passando o estado da lista atual mais o que será inserido (descrição, senha e id)
    const handleAdd = () => {
        setList(list => [...list, {option, description, password, id: uuidv4()}]);
        setDescription('');
        setPassword('');
    }

    //função responsável por deletar o item da lista selecionado através de um filter em cima da lista atual (...list)
    const handleDeleteItemList = (id) => {
        setList(list => [...list.filter((item) => item.id !== id)]);
    }

    //função responsável por setar a opção escolhida do select no state
    const handleSelect = (event) => {
        setOption(event.target.value)
    }

    //função para alterar o item a ser editado após o click no edit button
    const confirm = () => {
        setEdit(false)
        setList((oldList) => oldList.map((item) => ({
            ...item,
            option: edit === item.id ? option : item.option,
            description: edit === item.id ? description: item.description,
            password: edit === item.id ? password: item.password,
        })))
    }

    //função para definir ação de enter após clicar no edit button
    const teclaEnter = (e) => {
        if (e.key === 'Enter') confirm();
    }

    //função para setar as options do select 
   /* const selectOptions = () => {
        let options = []
        let categoriesList = JSON.parse(localStorage.getItem('categoriesList')) //busca no local storage a lista de categorias
        categoriesList.forEach(({id, name}) => options.push({id, name})) //para cada item da storage, insere seus valores na lista de opções
        options.sort(compare) //ordena a lista
        return (options.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
        )))
    }*/

    //função para ordenar as options do select em ordem alfabética
    const compare = (x, y) => {
        if(x.id === -1){ //caso seja o valor default, mantém como o primeiro da lista e o selecionado por padrão
            return;
        } else {
            if ( x.name < y.name ) {
                return -1;
            }
            if ( x.name > y.name ) {
                return 1;
            }
        }
        return 0;
    }

    return (
        <div>
            <div className="content">
                {list.length === 0 ? 
                    <h2 className="empty-list">{strings.emptyAccountsListH2}</h2> :
                    <div className="list">
                        <h2 className="list-title">{strings.accountsListH2}</h2>
                        <ul>
                            {list.map((item) => ( 
                                <li key={item.id}> { /*Método que percorre a lista adicionando um li com ícones */}
                                    { edit === item.id ?
                                        <div>
                                            <input 
                                                /* onBlur={confirm} */
                                                onKeyPress={(e) => teclaEnter(e)}
                                                type="text"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                    :
                                        <div className="list-item">
                                            <span className="item-span" id="category-span">
                                                <p>
                                                    {item.option}
                                                    <DeleteIcon className="list-icon" id="delete-icon" onClick={() => handleDeleteItemList(item.id)}/>
                                                </p>                                        
                                            </span>
                                            <span className="item-span" id="desc-span">
                                                <DescriptionIcon id="desc-icon"/>
                                                <p>{strings.descAccountFormP}:</p>
                                                <EditIcon className="list-icon" id="edit-icon" /*onClick={() => setEdit(item.id)}*//>
                                                <span>{item.description}</span>
                                            </span>
                                            <span className="item-span" id="pass-span">
                                                <LockIcon id="pass-icon"/>
                                                <p>{strings.passAccountFormP}:</p>
                                                <EditIcon className="list-icon" id="edit-icon" /*onClick={() => setEdit(item.id)}*//>
                                                <span>{item.password}</span>
                                            </span>
                                        </div>
                                    }     
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
            <Fab className="fabAddFloatButton" aria-label="add" onClick={openMainModal}>
                <AddIcon />
            </Fab>

            <Modal
                className="modal-accounts"
                overlayClassName="overlay-accounts"
                isOpen={isOpen}
                onRequestClose={closeMainModal}>
                <h2>{strings.accountFormH2}</h2>
                <form className="account-form" onSubmit={(e) => {
                    if(document.getElementById("desc").value === "" ||  //Se um dos 3 campos da modal estiver vazio, lança um alert
                        document.getElementById("pass").value === "" || 
                        document.getElementById("opt").value === ""){
                        alert("Campo vazio!")
                    } else {
                        handleAdd()
                        e.preventDefault()
                    }
                }}>
                    <div className="form-inputs">
                        <label className="modal-inputs">
                            {strings.categoryAccountFormLabel}
                            <Select
                                placeholder="Selecione uma categoria" 
                                onChange={handleSelect}
                                options={categoriesList.value} 
                                value={categoriesList.value}/>
                        </label>
                        <label className="modal-inputs">
                            {strings.descAccountFormP}
                            <input placeholder="Ex: Conta pessoal gmail" id="desc" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </label>
                        <label className="modal-inputs">
                            {strings.passAccountFormP}
                            <input placeholder="Digite a senha" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <Button className="submit-account-button" type="submit">{strings.submitFormButton}</Button>
                    <Fab className="fabCloseFloatButton" aria-label="add" onClick={closeMainModal}>
                        <CloseIcon />
                    </Fab>
                </form>  
            </Modal>
        </div>
    )
}

export default ModalAccountsForm