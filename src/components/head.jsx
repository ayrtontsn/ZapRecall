import styled from "styled-components";

export default function Cabecalho() {
    return(
        <Header>
            <img src="public/assets/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 15% 10%;

    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.7px;
    letter-spacing: -0.012em;
    text-align: center;
    color: #ffffff;

    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;

    img{
        width: 60px;
    }



`