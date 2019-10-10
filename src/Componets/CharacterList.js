import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const CharacterList = () => {

    const characters = useSelector(state => state.characters)
    const characterURL = useSelector(state => state.url)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);

    function storeCharacters() {
        dispatch({
            type: 'ADD_CHARACTERS'
        })
    }

    async function getCharacters() {
        setIsLoading(true)
        const response = await fetch(characterURL);
        const myJson = await response.json();
        console.log(myJson.next)
        dispatch({
            type: 'ADD_CHARACTERS',
            characters: myJson.results,
            url: myJson
        })
        setIsLoading(false)
    }

    useEffect(()=>{
        getCharacters()
    },[])

    return (
        <>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                    <ul>
                        {characters.map(character => (
                            <li key={character.id}>
                                <h1>{character.name}x</h1>
                            </li>
                        ))}
                    </ul>
                )}
        </>
    )
}

export default CharacterList