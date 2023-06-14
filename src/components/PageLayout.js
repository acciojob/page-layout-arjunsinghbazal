import React from "react";
const Page=(props)=>{
return(
    <>
        {props.Header}
        {props.children}
        {props.Footer}
    </>
)
}

export default Page;