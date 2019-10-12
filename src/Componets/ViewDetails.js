import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const ViewDetails = () => {
    const { name } = useParams()
    const { state } = useLocation()



    return (
        <>
        <h1>{name}</h1>
        <h1>{state.characterData.name}</h1>
        </>
    )
}

export default ViewDetails