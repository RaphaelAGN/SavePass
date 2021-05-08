import React from 'react';
import './styles.css'

import strings from '../../assets/strings/strings'
import Menu from '../../components/Menu/index'

import LockIcon from '@material-ui/icons/Lock';

const MainPage = () => {
    return (
        <div id="page-landing">
            <Menu />
            <div className="container">
                <div className="logo-container">
                    <div className="logo">
                        <LockIcon style={{ fontSize: 80 }} className="lock-icon"/>
                        <h2>{strings.mainPageH2}</h2>
                    </div>
                    <p>{strings.mainPageP}</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
