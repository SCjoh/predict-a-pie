import './Nav.scss';
import menu from '../assets/menu.svg';
import React from 'react';
import { Link } from "react-router-dom";


function Nav() {

  const [open, setOpen] = React.useState(false);
  const [menuStyle, setMenuStyle] = React.useState();

  const onClick = (event) => {
    setMenuStyle({
      'left': (event.clientX - 5) + 'px',
      'top': (event.clientY - 5) + 'px'
    });
    setOpen(!open);
  }

  return (
    <div className={open ? 'Nav Nav-open' : 'Nav Nav-closed'} onClick={onClick}>
      <button className="Nav-toggle">
        <img src={menu} alt="Menu icon" />
      </button>
      <nav className="Nav-menu" style={menuStyle}>
        <Link to="/">Build a Neural Network</Link>
        <Link to="/trained">Test a Trained Network</Link>
      </nav>
    </div>
  );
}

export default Nav;
