
// import React from 'react'
import './DetailedCard.css';

const DetailedCard = ({ villagerDetailed, closeButtonClick }) => {
    const {name, species, personality, saying, img, birthday } = villagerDetailed
    return (
        <div className='DetailedCard center br3 bw2'>
            <img src={img} className='villagerimg' alt='villagerimg'></img>
            <div className='datacontainer bg-light-green br3 ma3'>
                <h1 className='ma3 name tc'>{`Name: ${name}`}</h1>
                {/* <span type='text' className=''>Name:</span>
                <span type='text' className=''>{name}</span> */}
                <div className='textbody ma4'>
                    <span type='text' className='key w4 underline br2'>Species: </span>
                    <span type='text' className='val'>{species}</span>

                    <span type='text' className='key w4 underline br2'>Personality: </span>
                    <span type='text' className='val'>{personality}</span>

                    <span type='text' className='key w4 underline br2'>Birthday </span>
                    <span type='text' className='val'>{birthday}</span>

                    <span type='text' className='key w4 underline br2'>Saying: </span>
                    <span type='text' className='val'>{saying}</span>
                </div>

            </div>
            <button onClick={closeButtonClick} className='btn h2 tc w3 br3 pa2 center'>close</button>

        </div>
    )
}

export default DetailedCard

