import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const SpaceshipDetails = () => {
    const { name } = useParams()
    const { state } = useLocation()

    // async function getCharacter(url) {
    //     let response = await fetch(url);
    //     let data = await response.json()
    //     return setDataState(data);

    //   }
      
    //       useEffect(()=>{
    //           getCharacter(state.url.url)
    //       },[state])
    // console.log(dataState)

    return (
        <>
        <h1>{name}</h1>
        <h1>{state.spaceshipData.name}</h1>
        </>
    )
}

export default SpaceshipDetails