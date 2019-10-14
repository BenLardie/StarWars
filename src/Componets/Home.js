import React from 'react'
import CharacterList from './CharacterList'
/** @jsx jsx */
import { jsx } from '@emotion/core'

function Home() {
    return (
        <div css={{
            backgroundImage: "url('https://wallpapertag.com/wallpaper/middle/d/9/9/278133-star-wars-background-1920x1080-macbook.jpg')",
            height: 900,
            paddingTop: 10,
            backgroundSize: 'cover',
            fontFamily: "'Rubik Mono One', sans-serif",
        }}>
        <h1 css={{
            textAlign: 'center',
            color: 'white',
        }}
        >BiteCine SWAPI Challenge</h1>
        <CharacterList />
        </div>
    )
}

export default Home
