import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ViewDetails = (props) => {
    const { name } = useParams()
    const { state } = useLocation()
    const [dataState, setDataState] = useState({})

    useEffect(()=>{
        let data = {}
        let url = state.url.url
        fetch(url)
        .then(res => res.json() )
        .then(res => {
            data = res.data
            setDataState(data)
        })
    },[])
    console.log(dataState)

    return (
        <h1>{name}</h1>
    )
}

export default ViewDetails