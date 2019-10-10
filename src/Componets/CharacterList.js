import React, { useState, useEffect } from 'react'


const CharacterList = () => {

    async function getCharacters() {
        const response = await fetch('https://swapi.co/api/people/');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }

    useEffect(()=>{
        getCharacters()
    },[])

    return (
        <h1>Hello CharacterList</h1>
    )
}

export default CharacterList