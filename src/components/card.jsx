import React from 'react'
import Zap from "./zap.jsx"
import CARDS from "./mock.js"

export default function Carta({setConcluida}) {

    return (
        CARDS.map((card, index) =>(
            <div key={index}>
                <Zap index={index}
                card={card}
                setConcluida={setConcluida}
                 />
            </div>
        )
    ))
}


