'use client'
import { useEffect, useMemo, useState } from "react"
import JSON from "./conversion/json"
import CSV from "./conversion/csv"
import { splitJson } from "@/utils/utils"
import Tab from "./ui/tab"

export default function Main() 
{
    const [inputJson, setInputJson] = useState('')
    const [outputJson, setOutputJson] = useState('')
    const [selectedTab, setSelectedTab] = useState("json");
    const [outputFileName, setOutputFilename] = useState('')

    useEffect(() => {
        fetch('/api/json').then(response => {
            console.log('response', response)
        })
    }, [])
    useMemo(() => {
        console.log('hey selected tab change', selectedTab)
    }, [selectedTab])
    const handleInputJson = async  (value, mode="file") => {
        if (mode != "text") {
            setInputJson(value.target.value);
        } else {
            setInputJson(value);
            setOutputJson(splitJson(value))
            
        }
    }
    const handleDownload = () => {
        console.log(outputJson)
        const blob = new Blob([outputJson], { type: "text/csv "});
        const url = window.URL.createObjectURL(blob);
    
    // Crear un enlace y hacer clic en él para descargar el archivo CSV
        const link = document.createElement('a');
        link.href = url;
        link.download = outputFileName != '' ? outputFileName + '.csv' : 'test.csv';
        link.click();
    
    // Liberar el objeto URL
    window.URL.revokeObjectURL(url);
    }
    const handleOutputJson = (value) => {
        console.log(value, 'handle output json');
        setOutputJson(value)
    }
    const handleTranslation = () => {
        console.log('SENDING REQUEST', inputJson)

        handleDownload()

    }
    const handleOutputName = (e) => {
        setOutputFilename(e.target.value)
    }
    
    return (
        <div className="text-center">
            <h1>Convert JSON to CSV FAST</h1>
            <Tab setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        <div className="flex">
            {
                selectedTab == 'json' ? (<> <JSON inputJson={inputJson} handleInputJson={handleInputJson} outputFileName={outputFileName} handleOutputName={handleOutputName} /> 
            
            <div className="text-center items-center m-auto ml-24">
                <button className="btn btn-primary" onClick={handleTranslation}>
                    Translate
                </button>
            </div>
            
            <CSV outputJson={outputJson} />
            </>)
            :
            <> <JSON inputJson={inputJson} handleInputJson={handleInputJson} outputFileName={outputFileName} handleInputChange={handleOutputName} /> 
            
            <div className="text-center items-center m-auto ml-24">
                <button className="btn btn-primary" onClick={handleTranslation}>
                    Translate
                </button>
            </div>
            
            <CSV outputJson={outputJson} /> </>
}
        </div>
        </div>
    )
}