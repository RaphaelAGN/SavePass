import React from 'react';
import './styles.css'
import Menu from '../../components/Menu/index'
import Modal from 'react-modal';
import CategoriesPage from '../../components/CategoriesComponents/index'

Modal.setAppElement(document.getElementById('root'))

const CategoriesList = () => {

    return (
        <div id="page-landing">
            <Menu/>
            <CategoriesPage />
        </div>
    )
}

export default CategoriesList;