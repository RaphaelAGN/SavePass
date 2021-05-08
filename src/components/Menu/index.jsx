import React from "react";
import './styles.css'
import {Link} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

const AppMenu = () => {

  return (
    <Menu disableAutoFocus>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/categories">Categorias</Link>
      <Link className="menu-item" to="/accounts">Contas</Link>
    </Menu>
  );
};

export default AppMenu;