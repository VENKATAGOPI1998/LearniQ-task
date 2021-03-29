import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { GetUserData, PostUserData } from './Api';
import {LineScalePulseOutRapid} from 'react-pure-loaders';

function Home() {
    let test = "  Quiz created Successfully,\n Kindly Go to the Take quiz section and Add the questions"
    let [Owner,setOwner] = useState("")
    let [Pin,setPin] = useState("")
    let [Topic,setTopic] = useState("")
    let [load,setload] = useState(false)
    let userdata = {Owner,Pin,Topic}
            
    return (
        <>
        <div className="central m-5 row">
            <div className="card" style={{background:"linear-gradient(180deg,blue 10%,skyblue 100%)",minWidth:"250px",minHeight:"350px"}}>
                <h1 className="cardimg card-img-top">Create Quiz</h1>
                <div className="card-body">
                    <div className="card-text">
                        <ul>
                            <li>You can create your own Quiz</li>
                            <li>Incase of any update after creating, you can do that through the pin</li>
                            <li>Click on the below button to create</li>
                        </ul>
                        <span className="btn-sm btn-success" data-toggle="modal" data-target="#myModal">Create Quiz</span>
                        <div id="myModal" className="modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Fill the below Detail's</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                    <form className="form" onSubmit={async(e)=>{
                                        e.preventDefault()
                                        setload(true)
                                        let check = await GetUserData()
                                        let x = true
                                        check.data.forEach((item)=>{
                                            if(item.Topic===Topic)
                                            x = false
                                        })
                                        if(x){
                                            await PostUserData(userdata)
                                            setload(false)
                                            alert(test)
                                            window.location.reload()
                                        }
                                        else{
                                            setload(false)
                                            alert("Topic already Exist's")
                                            window.location.reload()
                                        }
                                    }}>
                                        <label htmlFor="Owner">Name :</label>
                                        <div className="d-flex" style={{justifyContent:"center"}}><LineScalePulseOutRapid color='#000000' loading={load}/></div>
                                        <input id="Owner" className="form-control" required  value={Owner} onChange={(e)=>{setOwner(e.target.value)}}/>
                                        <label htmlFor="Topic">Topic :</label>
                                        <input id="Topic" className="form-control" required  value={Topic} onChange={(e)=>{setTopic(e.target.value)}}/>
                                        <label htmlFor="Pin">Pin :</label>
                                        <input id="Pin" className="form-control" required maxLength="6"  value={Pin} onChange={(e)=>{setPin(e.target.value)}}></input>
                                        <input type="submit" className="btn-sm btn-primary mt-2 float-right" value="Continue"></input>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{background:"linear-gradient(180deg,blue 10%,skyblue 100%)",minWidth:"250px",minHeight:"350px"}}>
            <h1 className="cardimg">Take Quiz</h1>
                <div className="card-body m-0">
                    <div className="card-text m-0">
                        <ul>
                            <li>Click on take Quiz and choose the topic</li>
                            <li>Each Question has time limit</li>
                            <li>Test includes negitive marks.</li>
                        </ul>
                        <Link className="btn-sm btn-success" to="/Categorized-Quiz's">Take Quiz</Link>
                    </div>
                </div>
            </div>
            <div className="card" style={{background:"linear-gradient(180deg,blue 10%,skyblue 100%)",minWidth:"250px",minHeight:"350px"}}>
            <h1 className="cardimg">Quiz Results</h1>
                <div className="card-body">
                    <div className="card-text">
                        <ul>
                            <li>Check your Result here </li>
                            <li>Click on the Category and check for your name, what you entered while taking the Quiz.</li>
                        </ul>
                        <Link to="/Res/Categorized" className="btn-sm btn-success">Check Result</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home