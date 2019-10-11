import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { fetchstarships } from '../actions/starshipActions'


const CharacterList = () => {

    const people = useSelector(state => state.people.people)
    const loading = useSelector(state => state.people.loading)
    const starships = useSelector(state => state.starships.starships)
    const dispatch = useDispatch()
    const table = document.getElementById('characters')

    console.log(starships)
    useEffect(() => {
        dispatch(fetchPeople())
        dispatch(fetchstarships())
    }, [dispatch]);




    useEffect(() => {
        const table = document.getElementById('characters')
        console.log(table)
        table.addEventListener('scroll', handleScroll);
        return () => table.removeEventListener('scroll', handleScroll);
    });

    function handleScroll() {
        if (table.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
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



    return (
        <div>
            <h1 id='title'>Star Wars Characters</h1>
            {loading && <p>loading</p>}
            <table id='characters'>
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