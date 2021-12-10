import React from 'react';
import './styles.css'

interface SidebarProps {
    showSidebar: boolean;
}

function Sidebar({ showSidebar }: SidebarProps) {

    return(
        <div className={showSidebar ? "sidebar close" : "sidebar"}>
        <div className="logo-details">
          <i ></i>
          <span className="logo_name">MDS</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">
            <i className='bx bxs-home'></i>
              <span className="link_name">Página Inicial</span>
            </a>
          </li>
          <li>
            <a href="/calculadora">
            <i className='bx bxs-calculator' ></i>
              <span className="link_name">Calculadora</span>
            </a>
          </li>
          <li>
            <a href="/">
            <i className='bx bxs-book-alt' ></i>
              <span className="link_name">Estudos</span>
            </a>
          </li>
          <li>
            <a href="/provas">
            <i className='bx bxs-calendar' ></i>
              <span className="link_name">Provas</span>
            </a>
          </li>
          
        </ul>
      </div>
    );
}

export default Sidebar;