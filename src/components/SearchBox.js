import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='center pt4'>
            <input className='w5 h2 pa2'
            type='search'
            placeholder='Search villager'
            onChange={searchChange} // detects change in search box
            />
        </div>
    )
}

export default SearchBox
