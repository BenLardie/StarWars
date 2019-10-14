import React from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx } from '@emotion/core'

const TableRow = ({ person, index }, ref) => {

    const { name, birth_year, height, mass} = person
   

    return(
        <tr key={index} ref={ref} css={{
            height:48,
            borderBottom:'1px solid #E3F1D5',
            textAlign: 'center',
        }}>
            <td>{index + 1}</td>
            <td>
                <Link to={{
                    pathname: `/viewdetials/${name}`,
                    state: {
                        characterData: person
                    }
                }}>
                    {name}
                </Link>
            </td>
            <td>{birth_year}</td>
            <td>{height}</td>
            <td>{mass}</td>
        </tr>
    )
}
const forwardRow = React.forwardRef(TableRow) 
export default forwardRow