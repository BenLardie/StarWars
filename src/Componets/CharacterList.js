import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { fetchStarships } from '../actions/starshipActions'
import { Link } from 'react-router-dom'

// need an if statement if url is null dont fetch
// need to work on infinity scroll and and if to that for loading so it doesnt fetch twice
// style


const CharacterList = () => {

    const people = useSelector(state => state.people.people)
    const loading = useSelector(state => state.people.loading)
    const starshipLoading = useSelector(state => state.starships.loading)
    const starships = useSelector(state => state.starships.starships)
    const dispatch = useDispatch()
    const table = document.getElementById('characters')


    useEffect(() => {
        dispatch(fetchPeople())
        dispatch(fetchStarships())
    }, [dispatch]);



    // useEffect(() => {
    //     const table = document.getElementById('characters')
    //     table.addEventListener('scroll', handleScroll);
    //     return () => table.removeEventListener('scroll', handleScroll);
    // });

    // function handleScroll() {
    //     if (table.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //     dispatch(fetchPeople());
    // }



    return (
        <div>
            <h1 id='title'>Star Wars Characters</h1>
            <table id='characters'>
                <tbody>
                    <tr>
                        <th key={2} >NAME</th>
                        <th key={3} >BIRTH YEAR</th>
                        <th key={4} >HEIGHT</th>
                        <th key={5} >MASS</th>
                    </tr>
                    {loading && <p>loading</p>}
                    { starships.length > 0 && people.length > 0 ? people.map((person, i = 0)=> {
        let x = 0
        x++
        if(i!== 0 && (i + 1) % 8 === 1){
            const { name } = starships[x]
            return (
                <tr key ={i}>
                    <td>{name}</td>
                </tr>
            )
        } else {
            const { name, birth_year, height, mass, url } = person
            return (
                <tr key={i}>
                <td>{i + 1}</td>
                <td>
                <Link to={{
                    pathname: `/viewdetials/${name}`,
                    state: {
                        url: {url}
                    }
                }}>
                {name}
                </Link>
                </td>
                <td>{birth_year}</td>
                <td>{height}</td>
                <td>{mass}</td>
            </tr>
            ) 

        }
    }) : null }
                </tbody>
            </table>
        </div>
    )
}

export default CharacterList