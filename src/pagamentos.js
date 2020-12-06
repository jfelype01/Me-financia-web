import React from 'react'

import './styles/main-page.css'

function Pagamentos() {
    return (
        <div id="pagamentos">
            <div className="inicio">
                <h1>Pagamentos</h1>
                <p>Parcela atual</p>
            </div>

            <div className="fatura">
                <div className="referência">
                    <p>Referência</p>
                    <p>112020</p>
                </div>
                <div className="vencimento">
                    <p>Data de Vencimento</p>
                    <p>16/12</p>
                </div>
                <div className="fatura">
                    <p>Situação da fatura</p>
                    <p>Fechada</p>
                </div>
                <div className="valor-fatura">
                    <p>Valor da fatura</p>
                    <p>665,0</p>
                </div>
            </div>

            <div className="final">
                <div className="vizualizar">
                    <p>VISUALIZAR FATURA</p>
                </div>
                <div className="gerar">
                    <p>GERAR FATURA</p>
                </div>
                <p>Visualizar fatura</p>
            </div>
        </div>
    )
}

export default Pagamentos