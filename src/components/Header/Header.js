/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import logo from "../../images/logo.png";
import './Header.scss';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const items = [{
      label: 'Home',
      icon: 'pi pi-fw pi-home'
    },
    {
      label: 'Calendar',
      icon: 'pi pi-fw pi-calendar'
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil'
    },
    {
      label: 'Documentation',
      icon: 'pi pi-fw pi-file'
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog'
    }
  ];

  return (
    <nav className="grid">
      <div className="col-2">
        <img className="logo" alt="" src={logo}/>
      </div>
      <div className="col">
        < TabMenu model = { items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}/>
      </div>
      <div className="col-2">
      <Button label="Primary" className="p-button-rounded" />
      </div>
    </nav>
  );
}

export default Header;