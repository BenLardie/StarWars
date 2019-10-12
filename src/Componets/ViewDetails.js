import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ViewDetails = () => {
    const { name } = useParams()
    const { state } = useLocation()
    const [dataState, setDataState] = useState({})

    async function getCharacter(url) {
        let response = await fetch(url);
        let data = await response.json()
        return setDataState(data);

      }
      
          useEffect(()=>{
              getCharacter(state.url.url)
          },[state])
    console.log(dataState)

    return (
        <h1>{name}</h1>
    )
}

export default ViewDetails