import React from 'react'

export default function CharacterCard({ name, image, comics }) {
    return (
        <div className='character-card'>
            <h2>{name}</h2>
            <img src={image} />
        </div>
    )
}
