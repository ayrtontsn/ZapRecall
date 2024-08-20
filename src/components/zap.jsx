import React from 'react'

export default function Card({index,card}){

    const [Cor, setCor] = React.useState("")
    const [Carta, setCarta] = React.useState(flashcard(index,Cor))

    function flashcard(index, Cor){
        return (
            <>
                <div Cor={Cor}>Pergunta {index + 1}</div>
                <img onClick={()=>setCarta(Zap(card))} src="src/assets/seta_play.png" alt="play" />
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
                    <img onClick={() => Zap(index, "green")} src="src/assets/icone_certo.png" alt="virar" />
                    <img onClick={() => Zap(index, "red")} src="src/assets/icone_erro.png" alt="virar" />
                    <img onClick={() => Zap(index, "yellow")} src="src/assets/icone_quase.png" alt="virar" />
                </div>

            </>
        )
    }

    return (   
        <>
            {Carta}
        </>)
}