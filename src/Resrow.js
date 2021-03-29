import React from 'react'

function Resrow(props) {
    return (
        <>
        <tr style={{color:"white"}}>
            <td>
                {props.place.username}
            </td>
            <td>
                {props.place.score}/{props.place.Total}
            </td>
        </tr>
        </>
    )
}

export default Resrow
