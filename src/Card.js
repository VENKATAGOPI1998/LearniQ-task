import React from "react";
import "./Easy";
import "./Medium";
import "./Hard";
import {Link} from 'react-router-dom';

function Card(props) {
    return (
        <div className="central row">
            <div
                className="card m-5"
                style={{
                    background: "linear-gradient(180deg,blue 10%,skyblue 100%)",
                    minWidth: "250px",
                    minHeight: "350px",
                    alignItems: "center",
                    paddingTop: "80px",
                }}
            >
                <h1 className="cardimg">Easy</h1>
                <div className="card-body">
                    <div className="card-text">
                        <div>
                            <Link style={{textDecoration:"none"}} className="btn-lg btn-danger central" to="/Easy">Take Easy test</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="card m-5"
                style={{
                    background: "linear-gradient(180deg,blue 10%,skyblue 100%)",
                    minWidth: "250px",
                    minHeight: "350px",
                    alignItems: "center",
                    paddingTop: "80px",
                }}
            >
                <h1 className="cardimg">Medium</h1>
                <div className="card-body">
                    <div className="card-text">
                        <div>
                            <Link style={{textDecoration:"none"}} className="btn-lg btn-danger central" to="/Medium">Take Medium test</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="card m-5"
                style={{
                    background: "linear-gradient(180deg,blue 10%,skyblue 100%)",
                    minWidth: "250px",
                    minHeight: "350px",
                    alignItems: "center",
                    paddingTop: "80px",
                }}
            >
                <h1 className="cardimg">Hard</h1>
                <div className="card-body">
                    <div className="card-text">
                        <div>
                            <Link style={{textDecoration:"none"}} className="btn-lg btn-danger central" to="/Hard">Take Hard test</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
