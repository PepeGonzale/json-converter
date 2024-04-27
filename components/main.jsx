'use client'
import { useEffect, useState } from "react"
import JSON from "./conversion/json"
import CSV from "./conversion/csv"

export default function Main() 
{
    const [inputJson, setInputJson] = useState('')
    const [outputJson, setOutputJson] = useState('')

    useEffect(() => {
        fetch('/api/json').then(response => {
            console.log('response', response)
        })
    }, [])
    const handleInputJson = (value) => {
        console.log('value', value.target.value)
        setInputJson(value.target.value)
    }
    const handleTranslation = () => {
        console.log('SENDING REQUEST', inputJson)
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
            <CSV />
        </div>
        </div>
    )
}