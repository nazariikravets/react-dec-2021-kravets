import {useEffect, useState} from "react";
import {servicePolits} from "../../service";
import Polit from "../Polit/Polit";


const Polits = () => {
    const [polits,setPolits]=useState([])
useEffect(()=>{
    servicePolits.addAllPolits()
    //     .then(value => {
    //     let array=[]
    //     for (const valueElement of value) {
    //
    //         if (valueElement.launch_year !=='2020'){
    //             array.push(valueElement)
    //         }
    //
    //     }
    //     return array
    // })
        .then(value => setPolits(value))
},[])
    return (
        <div>
            {polits.filter(polits=>polits.launch_year!=='2020') .map(polits=><Polit key={polits.flight_number} polits={polits}/>)}
        </div>
    );
};

export default Polits;