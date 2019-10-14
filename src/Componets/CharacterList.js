import React, { useEffect, useRef, useCallback  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions'
import { fetchStarships } from '../actions/starshipActions'
import yoda from '../Images/Yoda.png' 
/** @jsx jsx */
import { jsx } from '@emotion/core'
import TableRow from './TableRow'
import SpaceshipRow from './SpaceshipRow'



const CharacterList = () => {

    const people = useSelector(state => state.people.people)
    const loading = useSelector(state => state.people.loading)
    const url = useSelector(state => state.people.url)
    const starships = useSelector(state => state.starships.starships)
    const dispatch = useDispatch()
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
        if(url === null){
            return
        }
        dispatch(fetchPeople())
        dispatch(fetchStarships())
    }, [dispatch]);
    let x = -1
    
    return (
        <>
        <section css={{
            overflow: 'scroll',
            height: 400,
            paddingTop: 10,
        }}>
            <table css={{
            bordeSpacing: 1,
            borderCollapse: 'collapse', 
            background: 'white',
            borderRadius: 6,
            width: '75%',
            margin: '0 auto',
            scroll: 'smooth',
            }}>
                <tbody>
                    <tr css={{
                            height: 60,
                            background: '#FFED86',
                            fontSize: 16,
                    }}>
                        <th key={1} ></th>
                        <th key={2} >NAME</th>
                        <th key={3} >BIRTH YEAR</th>
                        <th key={4} >HEIGHT</th>
                        <th key={5} >MASS</th>
                    </tr>
                    
                    { starships.length > 0 && people.length > 0 ? people.map((person, i = 0)=> {
        if(i!== 0 && (i + 1) % 8 === 1){
            x++
            return <SpaceshipRow spaceship={starships[x]} index={i} key={i} />
        }
        if(people.length === i + 1){
            return <TableRow person={person} index={i} ref={lastNameRow} key={i} />
            } else {
            return <TableRow person={person} index={i} ref={null} key={i} />
        }
    }) : null }
            </tbody>
            </table>
            </section>
            {loading && <>
            <img src={yoda} alt='yoda' css={{
                width: '10%',
                margin: '0 auto',
                display: 'block',
            }} />
            <p css={{
                textAlign: 'center',
                color: 'white',
            }}>loading your data is...</p>
            </>}
        </>
    )
}

export default CharacterList