import React,{useState} from 'react';
import {useParams,Link, useHistory} from 'react-router-dom';
import { GetUserIdData, PutData } from './Api';
import Alert from 'react-bootstrap/Alert';
import { useEffect } from 'react';

function Edit() {
    let redirect = useHistory()
    let income = useParams()
    let [data,Setdata] = useState([])
    let [question,setQuestion] = useState([])
    let [options1,setOptions1] = useState([])
    let [options2,setOptions2] = useState([])
    let [options3,setOptions3] = useState([])
    let [options4,setOptions4] = useState([])
    let [score1,setScore1] = useState([])
    let [score2,setScore2] = useState([])
    let [score3,setScore3] = useState([])
    let [score4,setScore4] = useState([])
    useEffect(() => {
        async function detailed(){
        let dummy = await GetUserIdData(income.id)
        Setdata(dummy.data)
        setQuestion(dummy.data.Questions[0].question)
        setOptions1(dummy.data.Questions[0].options[0])
        setOptions2(dummy.data.Questions[0].options[1])
        setOptions3(dummy.data.Questions[0].options[2])
        setOptions4(dummy.data.Questions[0].options[3])
        setScore1(dummy.data.Questions[0].score[0])
        setScore2(dummy.data.Questions[0].score[1])
        setScore3(dummy.data.Questions[0].score[2])
        setScore4(dummy.data.Questions[0].score[3])
        }
        detailed()
    },[income.id])
    let [n,qes] =useState(0)
    function forward(){
        if(n<data.Questions.length-1)
        qes(++n)
        setQuestion(data.Questions[n].question)
        setOptions1(data.Questions[n].options[0])
        setOptions2(data.Questions[n].options[1])
        setOptions3(data.Questions[n].options[2])
        setOptions4(data.Questions[n].options[3])
        setScore1(data.Questions[n].score[0])
        setScore2(data.Questions[n].score[1])
        setScore3(data.Questions[n].score[2])
        setScore4(data.Questions[n].score[3])
    }
    function backward(){
        if(n>0)
        qes(--n)
        setQuestion(data.Questions[n].question)
        setOptions1(data.Questions[n].options[0])
        setOptions2(data.Questions[n].options[1])
        setOptions3(data.Questions[n].options[2])
        setOptions4(data.Questions[n].options[3])
        setScore1(data.Questions[n].score[0])
        setScore2(data.Questions[n].score[1])
        setScore3(data.Questions[n].score[2])
        setScore4(data.Questions[n].score[3])
    }
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
        <Alert variant="success" className="manage" show={showing} onClose={() => setShow(false)} dismissible>Successfully Updated</Alert>
        <div className="adder mt-4">
            <form className="form" onSubmit={async(e)=>{
                e.preventDefault()
                data.Questions[n]=userdata
                PutData(income.id,data)
                normal()
                setShow(true)
            }}>
                <span className="btn-sm btn-info mr-2" style={{cursor:"pointer"}} onClick={()=>{backward()}}><i className="fas fa-backward mr-2 mb-3"></i>Previous</span>
                <span className="btn-sm btn-info" style={{cursor:"pointer"}} onClick={()=>{forward()}}>Next<i className="fas fa-forward ml-2 mb-3"></i></span><Link to="/" className="btn-sm btn-warning float-right" style={{textDecoration:"none"}}><i className="fas fa-home mr-2"></i>Home</Link>
                <div></div>
                <label htmlFor="ques">Question</label>
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
                <button type="submit" className="btn btn-primary m-3">Update</button><button className="btn btn-danger m-3" onClick={()=>{
                    let z = prompt("Enter the Pin :")
                    if(z===data.Pin){
                        data.Questions.splice(n,1)
                        PutData(income.id,data)
                        redirect.push("/")
                    }
                    else
                    alert("Incorrect Password")
                }}><i class="fas fa-trash-alt mr-2"></i>Delete</button>
            </form>
        </div>
        </>
    )
}

export default Edit
