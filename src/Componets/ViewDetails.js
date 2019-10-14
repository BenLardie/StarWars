import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import characterBackground from '../Images/character-background.jpg'

/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core'

const ViewDetails = () => {
    const { state } = useLocation()
    const [homePlanet, setHomePlanet] = useState({})
    const { name, height, hair_color, birth_year, gender, homeworld } = state.characterData

    async function getHome(url) {
        let response = await fetch(url);
        let data = await response.json()
        return setHomePlanet(data);
    }


    useEffect(() => {
        getHome(homeworld)
    }, [homeworld])

    return (
        <div css={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backgroundImage: `url(${characterBackground})`,
            height: 800,
            backgroundSize: 'cover',
            paddingTop: 10,
        }}>
            <Global
                styles={css`
            h1{
                color: white;
                font-family: 'Rubik Mono One', sans-serif;
                text-align: center;
                -webkit-text-stroke-: 2px black;
                font-size: 50;
                }
            h2 {
                color: white;
                font-family: 'Fjalla One', sans-serif;
            }
            p {
                color: white;
            }
            .data {
                text-align: center;
                background-color: rgba(0, 0, 0, 0.6);
                max-width: 70%;
                margin: 0 auto;
                padding: 10px;
            }
        `} />
            <h1>{name}</h1>
            <div className= 'data'>
                <h2>Birth Year</h2>
                    <p>{birth_year}</p>
                <h2>Gender</h2>
                    <p>{gender}</p>
                <h2>Height</h2>
                    <p>{height}</p>
                <h2>Hair Colour</h2>
                    <p>{hair_color}</p>
                <h2>Home World</h2>
                    <p>{homePlanet.name}</p>
            </div>
        </div>

    )
}

export default ViewDetails