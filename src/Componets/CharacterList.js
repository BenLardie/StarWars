import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'


const CharacterList = () => {

    const state = useSelector(state => state)
    // const characterURL = useSelector(state => state.url)
    const dispatch = useDispatch()
    const [url, setUrl] = useState('https://swapi.co/api/people/');

    console.log(state)
      useEffect(() => {
        dispatch(fetchPeople(url));
      }, []);


    

    useEffect(() => {
        let newURL = JSON.stringify(state.people.next)
        setUrl(newURL)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        dispatch(fetchPeople(url));
      }
console.log(url)
    const display = state.people.people.map((character, i) => {
        return (
            <h1 key={i}>{character.name}</h1>
        )
    })
   

    return (
        <>
        {display}
        </>
    )
}

export default CharacterList