import React, { useState } from "react"

interface Props{
    setData: (value:string) => any; 
}

export const Input: React.FC<Props> = ({setData}) => {

    const [input, setInput] = useState<string>("")

    const onInputChange = (value:any) => {
        setData(value)
    }

    return(
        <>
            <input type="text" value={input} onChange={(e)=>onInputChange(e.target.value)} />
        </>
    )
}