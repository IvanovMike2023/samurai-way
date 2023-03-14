import React from "react";
type AccordionProps={
    text: string
}
let Accordion = (props:AccordionProps)=>{
    return (
        <>
        <div>
            <h3>{props.text}</h3>
        </div></>
    )
}
export default Accordion