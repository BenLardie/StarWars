// eslint-disable-next-line no-unused-vars
import React from 'react'
import CharacterList from './CharacterList'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import Title from './Title'

function Home() {
    return (
        <div css={{
            backgroundImage: "url('https://wallpapertag.com/wallpaper/middle/d/9/9/278133-star-wars-background-1920x1080-macbook.jpg')",
            height: 900,
            paddingTop: 10,
            backgroundSize: 'cover',
            
        }}>
        <Title text={'BitCine SWAPI Challenge'} />
        <CharacterList />
        </div>
    )
}

export default Home
