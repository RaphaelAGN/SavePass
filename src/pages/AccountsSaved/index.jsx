import React from 'react';
import './styles.css'
import Menu from '../../components/Menu/index'
import ModalAccount from '../../components/AccountsComponents/index'

const Accounts = () => {

    return (
        <div id="page-landing">
            <Menu/>
            <ModalAccount/>
        </div>
    )
}

export default Accounts;