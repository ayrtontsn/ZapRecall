import Cabecalho from "./head.jsx"
import Corpo from "./body.jsx"
import Rodape from "./footer.jsx"
import styled from "styled-components"

export default function ZapRecall() {
    return (
        <All>
            <Cabecalho />
            <Corpo />
            <Rodape />
        </All>

    )
}

const All = styled.div`
    background: #FB6B6B;
`