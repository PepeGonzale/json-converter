import { useState } from "react";
import UploadFile from "../ui/upload-file";
import { splitJson } from "@/utils/utils";

export default function JSON({
    inputJson,
    handleInputJson
}) {
    const [file, setFile] = useState();
    const handleFile = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader();


        reader.onload = (e) => {
            const content = e.target.result;
            handleInputJson(content, "text")
        }

        reader.readAsText(file);
    } 
    return (
        <div className="grid">
            <div className="m-4 flex items-center justify-between">
                <span>JSON</span>
                <div>
                    <UploadFile file={file} handleFile={handleFile} />
                </div>
            </div>
            <textarea value={inputJson} onChange={(e) => handleInputJson(e)} className="textarea textarea-lg h-[700px] w-[600px]" placeholder="Enter your JSON"></textarea>
            </div>
    )
}