import React, {useState, useEffect} from 'react'

const InfoCard = (props)=>{
    return(
        <div>
            <p>Date: {props.date}</p>
            <p>Explanation: {props.explanation}</p>
            <img src={props.url} alt=""/>
            
        </div>
    )
}
export default InfoCard