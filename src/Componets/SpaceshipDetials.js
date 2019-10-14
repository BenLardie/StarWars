/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core'
import React from 'react'
import { useLocation } from 'react-router-dom'

const SpaceshipDetails = () => {
    const { state } = useLocation()
    console.log(state.starshipData)
    const { name, model, manufacturer, cost_in_credits, max_atmosphering_speed, starship_class } = state.spaceshipData

    return (
        <div css={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backgroundImage: `url('https://wallpaperplay.com/walls/full/b/e/4/124178.jpg')`,
            height: 800,
            backgroundSize: 'cover',
            paddingTop: 10,
        }}>
            <Global
                styles={css`
            h1 {
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
            <h2>Model</h2>
                    <p>{model}</p>
                <h2>Manufacturer</h2>
                    <p>{manufacturer}</p>
                <h2>Cost in Credits</h2>
                    <p>{cost_in_credits}</p>
                <h2>Max Atmosphering Speed</h2>
                    <p>{max_atmosphering_speed}</p>
                <h2>Starship Class</h2>
                    <p>{starship_class}</p>
                </div>
        </div>
    )
}

export default SpaceshipDetails