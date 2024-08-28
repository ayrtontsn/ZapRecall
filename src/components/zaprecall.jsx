import Cabecalho from "./head.jsx"
import React from 'react'
import Corpo from "./body.jsx"
import Rodape from "./footer.jsx"
import styled from "styled-components"

export default function ZapRecall() {
    const [concluida,setConcluida] = React.useState(0);

    return (
        <All>
            <Cabecalho />
            <Corpo setConcluida={setConcluida} />
            <Rodape concluida={concluida}/>
        </All>
    )
}

const All = styled.div`
    background: #FB6B6B;

    width: 100%;

    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;

    
`