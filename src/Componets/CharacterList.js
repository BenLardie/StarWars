import React, { useEffect, useRef, useCallback  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { fetchStarships } from '../actions/starshipActions'
import { Link } from 'react-router-dom'

// need an if statement if url is null dont fetch
// style


const CharacterList = () => {

    const people = useSelector(state => state.people.people)
    const loading = useSelector(state => state.people.loading)
    const url = useSelector(state => state.people.url)
    const starshipLoading = useSelector(state => state.starships.loading)
    const starships = useSelector(state => state.starships.starships)
    const dispatch = useDispatch()
    const tableRef = useRef(null)
    const observer = useRef()
    
    const lastNameRow = useCallback(node => {
        if(loading)return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && url ){
                dispatch(fetchPeople())
            }
        })
        if (node) observer.current.observe(node)
    },[loading, url, dispatch])


    useEffect(() => {
        dispatch(fetchPeople())
        dispatch(fetchStarships())
    }, [dispatch]);

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
        }
        if(people.length === i + 1){
            const { name, birth_year, height, mass, url } = person
            return (
                <tr key={i} ref={lastNameRow}>
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
            ) } else {
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