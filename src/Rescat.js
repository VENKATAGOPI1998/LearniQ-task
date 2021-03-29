import React,{useState,useEffect} from 'react';
import { GetUserData } from './Api';
import Rescard from './Rescard';
import {LineScalePulseOutRapid} from 'react-pure-loaders';

function Rescat() {
    let [data,Setdata] = useState([])
    let [load,setload] = useState(true)
    useEffect(() => {
        async function details(){
        let x = await GetUserData()
        Setdata(x.data)
        setload(false)
        }
        details()
    }, [])
    return (
        <>
        <div className="central m-5 row">
        <LineScalePulseOutRapid color='#ffffff' loading={load}/>
        {
        data.map((item,index) => {
            return <Rescard place={item} key={index}></Rescard>
        })
        }
        </div>
        </>
    )
}

export default Rescat
