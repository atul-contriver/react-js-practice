import React, { useState } from 'react'
import { questions } from "./api";
import MyAccordion from './MyAccordion';
import './accordion.css';

const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <div className='container bg-warning w-50 ml-0 mr-0 mx-auto text-center'>
            <section className="main-div">
                <h1> Accordion</h1>
                {
                    data.map((curElem) => {
                        return <MyAccordion key={curElem.id} {...curElem} />
                        //here the spread operator is use to pass the the properties of the questions api
                    })
                }
            </section>
        </div>
    )
}

export default Accordion

    
