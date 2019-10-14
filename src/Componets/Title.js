// eslint-disable-next-line no-unused-vars
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function Title(props) {
    return (
    <h1 css={{
            textAlign: 'center',
            color: 'white',
            fontFamily: "'Rubik Mono One', sans-serif",
        }}>
        {props.text}
    </h1>
    )
}
