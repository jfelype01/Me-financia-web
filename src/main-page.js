import React from 'react'

import './styles/main-page.css'

function MainPage() {
    return (
        <div id="main-page">
            <div className="início">
                <h1>Olá, Joaquim</h1>
                <p>Aqui você encontra as melhores ofertas baseadas no seu score</p>

                <forms className="search">
                    <input type="text" id="busca"/>
                </forms>
            </div>

            <div className="score">
                <p>100pts</p>
            </div>

            <div id="banks">
                <div className="banco">
                    <img src="/src/images/brasil.svg" alt="Banco do Brasil"/>
                    <p>Banco do Brasil</p>
                    <p>Você tem XX,XXR$ em títulos de capitalização</p>
                </div>
                <div className="nubank">
                    <img src="/src/images/nubank.svg" alt="NuBank"/>
                    <p>NuBank</p>
                    <p>Você tem XX,XXR$ disponível em crédito para empréstimo</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage