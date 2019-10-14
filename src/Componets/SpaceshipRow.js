// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx } from '@emotion/core'

const SpaceshipRow = ({ spaceship, index }) => {

    const { name } = spaceship
   

    return(
        <tr key={index} css={{
            height:48,
            borderBottom:'1px solid #E3F1D5',
            textAlign: 'center',
        }}>
            <td>{index + 1}</td>
            <td>
                <Link to={{
                    pathname: `/viewspaceship/${name}`,
                    state: {
                        spaceshipData: spaceship
                    }
                }}>
                    {name}
                </Link>
            </td>
        </tr>
    )
}

export default SpaceshipRow