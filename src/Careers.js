import React from 'react'
import './Careers.css'

function Careers() {
    return (
        <div className='careers'>
            <div className='careers__content'>
                <p className='careers__subject'>학력</p>
                <p>한국외국어대학교(글로벌, 2014.03 ~ 2021.02)</p>
                <p>전공: 정보통신공학과, 부전공: 컴퓨터공학과</p>
                <p>GPA: 3.95</p>
                <p>Major: 4.18/4.5</p>
                <p>Minor: 4.21/4.5</p>
            </div>

            <div className='careers__content'>
                <p className='careers__subject'>이력</p>
                <p>- 연구실 인턴(2019.12 ~ 2020.01)</p>
            </div>

            <div className='careers__content'>
                <p className='careers__subject'>자격증</p>
                <p>- 정보처리기사(2020.12.31)</p>
                <p>- TOEIC 735(2020.05.16)</p>
                <p>- Opic IM1(2020.01.12)</p>
            </div>
        </div>
    )
}

export default Careers
