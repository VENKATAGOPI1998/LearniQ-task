import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
            
    return (
        <>
        <div className="central mt-5">
            <div className="card" style={{background:"linear-gradient(180deg,blue 10%,skyblue 100%)",height:"300px",alignItems:"center",paddingTop:"80px"}}>
            <h1 className="cardimg">LearniQ</h1>
                <div className="card-body">
                    <div className="central">
                        <Link style={{textDecoration:"none"}} className="btn-lg btn-danger" to="/Card">Start Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home