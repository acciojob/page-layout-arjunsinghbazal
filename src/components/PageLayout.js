import React from "react";
const Page=({Header,Children,Footer})=>{
return(
    <>
        {Header}
        {Children}
        {Footer}
    </>
)
}

export default Page;