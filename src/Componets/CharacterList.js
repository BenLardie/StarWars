import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople, fetchMorePeople } from '../actions/peopleActions'


const CharacterList = () => {

    const people = useSelector(state => state.people.people)
    const url = useSelector(state => state.people.url)
    const loading = useSelector(state => state.people.loading)
    const dispatch = useDispatch()
    // const [url, setUrl] = useState('https://swapi.co/api/people/');


    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);




    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        dispatch(fetchPeople());
    }


    const renderTableData = () => {
        return people.map((character, index) => {
            const { name, birth_year, height, mass } = character //destructuring
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{birth_year}</td>
                    <td>{height}</td>
                    <td>{mass}</td>
                </tr>
            )
        })
    }

    // const renderTableHeader = () => {
    //     let header = Object.keys(people[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    //  }


    return (
        <div>
            <h1 id='title'>Star Wars Characters</h1>
            {loading && <p>loading</p>}
            <table id='students'>
                <tbody>
                    <tr>
                        <th key={2} >NAME</th>
                        <th key={3} >BIRTH YEAR</th>
                        <th key={4} >HEIGHT</th>
                        <th key={5} >MASS</th>
                    </tr>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    )
}

export default CharacterList