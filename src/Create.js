import React,{useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import { GetUserData, PutData } from './Api';
import Alert from 'react-bootstrap/Alert'

function Create() {
    let income = useParams()
    let [question,setQuestion] = useState("")
    let [options1,setOptions1] = useState("")
    let [options2,setOptions2] = useState("")
    let [options3,setOptions3] = useState("")
    let [options4,setOptions4] = useState("")
    let [score1,setScore1] = useState("")
    let [score2,setScore2] = useState("")
    let [score3,setScore3] = useState("")
    let [score4,setScore4] = useState("")
    let [showing,setShow] = useState(false)
    let userdata = { question,options:[options1,options2,options3,options4],score:[score1,score2,score3,score4]}
    function normal(){
        setQuestion("")
        setOptions1("")
        setOptions2("")
        setOptions3("")
        setOptions4("")
        setScore1("")
        setScore2("")
        setScore3("")
        setScore4("")
    }
    return (
        <>
        <Alert variant="success" className="manage" show={showing} onClose={() => setShow(false)} dismissible>Successfully Added</Alert>
        <div className="adder mt-4">
            <form className="form" onSubmit={async(e)=>{
                e.preventDefault()
                let check = await GetUserData()
                let x 
                check.data.forEach((item,index)=>{
                    console.log(item)
                    if(item.Topic===income.id){
                        item.Questions.push(userdata)
                        x = index
                    }
                })
                await PutData(x,check.data[x])
                normal()
                setShow(true)
            }}>
                <label htmlFor="ques">Question</label><Link to="/" className="btn-sm btn-warning float-right" style={{textDecoration:"none"}}>Home</Link>
                <textarea id="ques" className="form-control" value={question} onChange={(e)=>{setQuestion(e.target.value)}}/>
                <label htmlFor="opt1">Option1</label>
                <input id="opt1" className="form-control" value={options1} onChange={(e)=>{setOptions1(e.target.value)}}/>
                <label htmlFor="scr1">Score for Option1</label>
                <input id="scr1" className="form-control" value={score1} onChange={(e)=>{setScore1(e.target.value)}}/>
                <label htmlFor="opt2">Option2</label>
                <input id="opt2" className="form-control" value={options2} onChange={(e)=>{setOptions2(e.target.value)}}/>
                <label htmlFor="scr2">Score for Option2</label>
                <input id="scr2" className="form-control" value={score2} onChange={(e)=>{setScore2(e.target.value)}}/>
                <label htmlFor="opt3">Option3</label>
                <input id="opt3" className="form-control" value={options3} onChange={(e)=>{setOptions3(e.target.value)}}/>
                <label htmlFor="scr3">Score for Option3</label>
                <input id="scr3" className="form-control" value={score3} onChange={(e)=>{setScore3(e.target.value)}}/>
                <label htmlFor="opt4">Option4</label>
                <input id="opt4" className="form-control" value={options4} onChange={(e)=>{setOptions4(e.target.value)}}/>
                <label htmlFor="scr4">Score for Option4</label>
                <input id="scr4" className="form-control" value={score4} onChange={(e)=>{setScore4(e.target.value)}}/>
                <button type="submit" className="btn btn-primary m-3">Add</button>
            </form>
        </div>
        </>
    )
}

export default Create
