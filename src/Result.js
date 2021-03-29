import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { GetUserIdData } from './Api'
import Resrow from './Resrow'
import {LineScalePulseOutRapid} from 'react-pure-loaders';

function Result() {
    let income = useParams()
    let [data,Setdata] = useState("")
    useEffect(() => {
        async function details(){
            let x = await GetUserIdData(income.id)
            Setdata(x.data)
        }
        details()
    }, [income.id])
    if(data!=="")
    return (
        <>
        <div className="adder mt-4">
            <div className="bg-dark d-flex" style={{color:"white",justifyContent:"center",fontWeight:"bold"}}>{data.Topic}</div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Score
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.Result.map((item,index)=>{
                            return <Resrow place={item} key={index}></Resrow>
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
    else
    return (
        <>
        <div className="adder mt-4 d-flex" style={{justifyContent:"center",alignItems:"center"}}>
           <LineScalePulseOutRapid className="m-5" color='#ffffff' loading={true}/>
        </div>
        </>
    )
}

export default Result
