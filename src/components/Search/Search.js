import React, { memo, useState } from 'react';
import PropTypes from "prop-types"

const Search = ({findCharacter}) => {

    const [ character, setCharacter ] = useState('');

    const getCharacters = (e) => {
        e.preventDefault()
        findCharacter(character)
    }

    return(
        <form className='search' onSubmit={getCharacters}>
            <div className='container-input'> 
                <input
                    name='keyworks'
                    placeholder='Search...' 
                    onChange={(e) => setCharacter(e.target.value)}
                    value={character}
                />
            </div>
        </form>
    )
}

Search.propTypes = {
    findCharacter : PropTypes.func.isRequired
}

export default memo(Search);