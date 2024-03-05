import React from 'react'
import './info.css'
import City from './city.webp'
const Info = () => {
    return (
        <div>
            <div className='cards'>
                <div className='card-item'>
                    <img src={City} alt='City' />
                    <h2>Title1</h2>
                    <p>Price:1000$</p>
                </div>
                <div className='card-item'>
                    <img src={City} alt='City' />
                    <h2>Title2</h2>
                    <p>Price:300$</p>
                </div>
                <div className='card-item'>
                    <img src={City} alt='City' />
                    <h2>Title3</h2>
                    <p>Price:100$</p>
                </div></div>
        </div>
    )
}

export default Info
