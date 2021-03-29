import React from 'react';
import {Link} from 'react-router-dom';

function Rescard(props) {
    return (
        <>
        <div className="card" style={{background:"linear-gradient(180deg,blue 10%,skyblue 100%)",minWidth:"250px",minHeight:"100px",maxHeight:"100px"}}>
            <h1 className="cardimg" style={{height:"80px"}}>{props.place.Topic}</h1>
            <div className="card-body">
                <div className="card-text" style={{marginTop:"-20px"}}>
                    <Link to={`/Results/${props.place.id}`} className="btn-sm btn-warning">Results</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Rescard
