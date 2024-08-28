import Carta from "./card.jsx"
import styled from 'styled-components';

export default function Corpo({setConcluida}) {
    return (
        <Body>
            <Carta setConcluida={setConcluida}
            />
        </Body>
    )
}

const Body = styled.div`
    background: #FB6B6B;
    font-family: "Recursive", sans-serif;
    margin: 0 15%;
    padding-bottom: 100px;
`
