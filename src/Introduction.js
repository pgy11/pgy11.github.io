import React from 'react'
import './Introduction.css'

function Introduction() {
    return (
        <div className='intro'>
            <p className="intro__myself">
                서버 개발과 클라우드에 관심이 많고, 실력 향상을 위해 항상 노력합니다.
            </p>
            <p className='intro__stack'>
                Stack
            </p>

            <hr />
            <div className='intro__tech'>
            <p>Java, Python, C#, HTML, CSS, JS</p>
            <p>Docker, K8s, AWS</p>
            </div>

        </div>
    )
}

export default Introduction
