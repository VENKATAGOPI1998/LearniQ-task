import React,{useState,useEffect} from 'react';
import { GetUserData } from './Api';
import Card from './Card';
import {LineScalePulseOutRapid} from 'react-pure-loaders';

function Categories() {
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
            return <Card place={item} key={index}></Card>
        })
        }
        </div>
        </>
    )
}

export default Categories
