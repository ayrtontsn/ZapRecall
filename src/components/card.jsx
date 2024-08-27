import React from 'react'
import Zap from "./zap.jsx"
import CARDS from "./mock.js"

export default function Carta({concluida, setConcluida}) {

    return (
        CARDS.map((card, index) =>(
            <div key={index}>
                <Zap index={index}
                card={card}
                concluida={concluida}
                setConcluida={setConcluida}
                 />
            </div>
        )
    ))
}


