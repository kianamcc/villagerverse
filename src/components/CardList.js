import React from 'react'
import Card from './Card';
// import Villager from './Villager';
import './CardList.css';

const CardList = ({ villager , handleCardClick }) => {

    return (
        <div className="MainContainer h-25">
            <div className='CardContainer'>
                {
                    // card body
                    villager.map((v, i) => {
                        return  (
                        <Card
                            key = {v.id}
                            id = {v.id}
                            name = {v.name['name-EUen']}
                            img = {v.image_uri}
                            personality = {v.personality}
                            species = {v.species}
                            handleCardClick = {handleCardClick}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardList
