export default function UploadFile({file, handleFile}) {
    return (
        <div>
            <input type="file" onChange={(e) => handleFile(e)} className="file-input w-full max-w-xs" />
        </div>
    )
}