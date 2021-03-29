import React,{useEffect,useState} from 'react';
import { useHistory, useParams } from 'react-router';
import {GetUserIdData, PutData} from './Api';
import {LineScalePulseOutRapid} from 'react-pure-loaders';

function Test() {
    let redirect = useHistory()
    let income = useParams()
    let [username,setUser] = useState("")
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
    let [time,SetTime] = useState(20)
    useEffect(() => {
        async function detailed(){
        setUser(prompt("Enter your Name:"))
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
    let [re,setre] = useState([])
    let [res,Setres] = useState([])
    let [dumb,Setdumb] = useState("")
    let [load,setload] = useState(false)
    async function forward(){
        re.push(res)
        setre(re)
        Setres("0")
        if(n<data.Questions.length-1){
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
            time=21
        }
        else{
            setload(true)
            let score = re.reduce(myFunc)
            let userdata = {username,score,Total:data.Questions.length}
            data.Result.push(userdata)
            await PutData(income.id,data)
            setload(false)
            alert(`${username} you scored ${score}`)
            redirect.push("/")
        }
    }
    function myFunc(total, num) {
        return +total + +num;
      }
    useEffect(() => {
        time > 0 && setTimeout(() => SetTime(time - 1), 1000);
        if(time===0){
            SetTime(20)
            forward()
        }
      }, [time]);

    return (
        <div className="tester">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>
                            {question}<span className="float-right m-1 bg-light p-1" style={{color:"black",width:"30px"}}>{time}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="radio" name="option" checked={dumb===options1} value={score1} onChange={(e)=>{Setres(e.target.value);Setdumb(options1)}} className="mr-1"/>{options1}</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="option" checked={dumb===options2} value={score2} onChange={(e)=>{Setres(e.target.value);Setdumb(options2)}} className="mr-1"/>{options2}<div className="d-flex" style={{justifyContent:"center"}}><LineScalePulseOutRapid color='#000000' loading={load}/></div></td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="option" checked={dumb===options3} value={score3} onChange={(e)=>{Setres(e.target.value);Setdumb(options3)}} className="mr-1"/>{options3}</td>
                    </tr>
                    <tr>
                        <td><input type="radio" name="option" checked={dumb===options4} value={score4} onChange={(e)=>{Setres(e.target.value);Setdumb(options4)}} className="mr-1"/>{options4}</td>
                    </tr>
                    <tr>
                        <td><span className="btn-sm btn-primary float-right mr-3" style={{cursor:"pointer"}} onClick={()=>{forward()}}>Next</span></td>
                    </tr>
                </tbody>
            </table> 
        </div>
    )
}

export default Test
