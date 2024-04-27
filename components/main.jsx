'use client'
import { useEffect, useState } from "react"
import JSON from "./conversion/json"
import CSV from "./conversion/csv"
import { splitJson } from "@/utils/utils"

export default function Main() 
{
    const [inputJson, setInputJson] = useState('')
    const [outputJson, setOutputJson] = useState('')

    useEffect(() => {
        fetch('/api/json').then(response => {
            console.log('response', response)
        })
    }, [])
    const handleInputJson = (value, mode="file") => {
        if (mode != "text") {
            setInputJson(value.target.value);
        } else {
            setInputJson(value);
            setOutputJson(splitJson(value))
        }
    }
    const handleOutputJson = (value) => {
        console.log(value, 'handle output json');
        setOutputJson(value)
    }
    const handleTranslation = () => {
        console.log('SENDING REQUEST', inputJson)
        // TODO cambiar el valor por parse a csv o json dependiendo de en que modo este
        handleOutputJson(inputJson)
    }
    return (
        <div className="text-center">
            <h1>Convert JSON to CSV FAST</h1>
        <div className="flex">
            <JSON inputJson={inputJson} handleInputJson={handleInputJson} />
            <div className="text-center items-center m-auto ml-24">
                <button className="btn btn-primary" onClick={handleTranslation}>
                    Translate
                </button>
            </div>
            <CSV outputJson={outputJson} />
        </div>
        </div>
    )
}