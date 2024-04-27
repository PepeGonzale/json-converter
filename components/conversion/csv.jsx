export default function CSV({
    outputJson
}) {
    const handleTextareaChange = (event) => {
        setOutputJson(event.target.value);
      };
    return (
        <div className="ml-24 grid">
                <div className="m-6">
                    CSV
                </div>
                <textarea value={outputJson} onChange={handleTextareaChange} className="textarea textarea-lg h-[700px] w-[600px]">
                </textarea>
            </div>
    )
}