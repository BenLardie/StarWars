import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import characterBackground from '../Images/character-background.jpg'






const ViewDetails = () => {
    const { state } = useLocation()
    const [homePlanet, setHomePlanet] = useState({})
    const [spaceship, setSpaceship] = useState({})
    const { name, height, hair_color, birth_year, gender, homeworld, starships } = state.characterData

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
            borderBottom: 'solid 3px white',

        }}>
        <Global
            styles={css`
            h2 {
                color: white;
                font-family: 'Fjalla One', sans-serif;
            }
            p {
                color: white;
            }
        `}/>
            <h1 css={{
                color: 'white',
                fontFamily: 'Rubik Mono One, sans-serif',
                textAlign: 'center',
                WebkitTextStroke: '2px black',
                fontSize: 50,
            }}>{name}</h1>
            <div css={{
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                maxWidth: '70%',
                margin: '0 auto',
                padding: 10,
            }}>
                <h2 css={{
                    color: 'white'
                }}>Birth Year</h2>
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