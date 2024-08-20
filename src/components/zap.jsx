import React from 'react'

export default function Card({index,card}){

    const [Cor, setCor] = React.useState("")
    const [Bol, setBol] = React.useState(true)
    const [Carta, setCarta] = React.useState(flashcard(index,Cor,Bol))

    function flashcard(index, Cor, Bol){
        return (
            <>
                <div Cor={Cor}>Pergunta {index + 1}</div>
                <img onClick={()=>Bol?setCarta(Zap(card)):""} src="src/assets/seta_play.png" alt="play" />
            </>
        )
    }

    function Zap(card) {
        return (
            <>
                <p1>{card.question}</p1>
                <img onClick={() => setCarta(Recall(card))} src="src/assets/seta_virar.png" alt="virar" />
            </>
        )
    }

    function Recall(card) {
        return (
            <>
                <p1>{card.answer}</p1>
                <div>
                    <img onClick={() => setCarta(flashcard(index, setCor("green"), setBol(false)))} src="src/assets/icone_certo.png" alt="certo" />
                    <img onClick={() => setCarta(flashcard(index, setCor("red"), setBol(false)))} src="src/assets/icone_erro.png" alt="erro" />
                    <img onClick={() => setCarta(flashcard(index, setCor("yellow"), setBol(false)))} src="src/assets/icone_quase.png" alt="quase" />
                </div>
            </>
        )
    }

    return (   
        <>
            {Carta}
        </>)
}