import React from 'react';
import './Card.css';

const Card = ({ name, personality, species, img, id, handleCardClick }) => {
    
    return (
        <div onClick={()=>handleCardClick(id)} className='card tc br3 pa3 ma2 bw2 grow shadow-5 w5'>
            <div>
                <h3 className='bg-light-green h2 br3 tc'>{name}</h3>
                <img className='br2' src={`https://acnhapi.com/v1/images/villagers/${id}`} alt='villager'/>
                <div className='bg-light-green br3 h3'>
                    <p className='mb1 pt3'>{`Species: ${species}`}</p>
                    <p className='mt0'>{`Personality: ${personality}`}</p>
                </div>

            </div>
        </div>
    )
}

export default Card
