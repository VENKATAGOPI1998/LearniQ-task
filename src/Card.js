import React from 'react';
import {useHistory} from 'react-router-dom';
import { DeleteData } from './Api';

function Card(props) {
    let redirect = useHistory()
    return (
        <>
        <div className="card" style={{background:"linear-gradient(180deg,blue 10%,skyblue 100%)",minWidth:"250px",minHeight:"350px"}}>
            <h1 className="cardimg">{props.place.Topic}</h1>
                <div className="card-body">
                    <div className="card-text">
                        <ul>
                            <li>Total Questions : {props.place.Questions.length}</li>
                            <li>Created By : {props.place.Owner} </li>
                            <li>Time Based Quiz</li>
                            <li>Includes negitive marks</li>
                        </ul>
                        <div>
                        <span className="btn-sm btn-success" onClick={()=>{
                            if(props.place.Questions.length>0)
                            redirect.push(`Test/${props.place.id}`)
                            else
                            alert("No question's in this Quiz")
                        }}>Take test</span>
                            <div className="dropup float-right">
                                <button className="btn-sm btn-dark dropdown-toggle" type="button" data-toggle="dropdown"><i className="fas fa-sliders-h"></i>
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu" style={{listStyleType:"none",height:"80px"}}>
                                    <li className="ml-3" style={{color:"black"}}><span className="btn-sm btn-light" onClick={()=>{
                                        let x=prompt("Enter access Pin: ")
                                        if(x===props.place.Pin){
                                            if(props.place.Questions.length>0)
                                            redirect.push(`/Edit/${props.place.id}`)
                                            else
                                            alert("No question's to edit")
                                        }
                                        else
                                        alert("Incorrect Pin")
                                    }}>Edit Questions <i className="fas fa-edit"></i></span></li>
                                    <li className="divider" style={{color:"black"}}></li>
                                    <li className="ml-3" style={{color:"black"}}><span className="btn-sm btn-light" onClick={()=>{
                                        let x=prompt("Enter access Pin: ")
                                        if(x===props.place.Pin)
                                        redirect.push(`/Create-Quiz/${props.place.Topic}`)
                                        else
                                        alert("Incorrect Pin")
                                    }}>Add Questions <i className="fas fa-folder-plus"></i></span></li>
                                    <li className="divider" style={{color:"black"}}></li>
                                    <li className="ml-3" style={{color:"black"}}><span className="btn-sm btn-light" onClick={()=>{
                                        let x=prompt("You are Deleting Total Quiz Enter access Pin: ")
                                        if(x===props.place.Pin){
                                            DeleteData(props.place.id)
                                            redirect.push(`/`)
                                            redirect.push("/Categorized-Quiz's")
                                        }
                                        else
                                        alert("Incorrect Pin")
                                    }}>Delete Quiz <i className="fas fa-trash-alt"></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card