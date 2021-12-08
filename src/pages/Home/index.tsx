import React, { useState } from 'react'

import Sidebar from '../../components/Sidebar';

export function Home(){
    const [showSidebar, setShowSidebar] = useState(false)

    return(
        <>
            <Sidebar showSidebar={showSidebar} />
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={() => setShowSidebar(!showSidebar)} ></i>
                    <span className="text">Página Inicial</span>
                </div>
            </section>
        </>
    );
}