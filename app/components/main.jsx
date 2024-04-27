export default function Main() {
    return (
        <div className="flex">
            <div >
            <textarea className="textarea textarea-lg h-[700px] w-[600px]" placeholder="Enter your JSON"></textarea>
            </div>
            <div className="text-center items-center m-auto ml-24">
                <button className="btn btn-primary">
                    Translate
                </button>
            </div>
            <div className="ml-24">
                <textarea className="textarea textarea-lg h-[700px] w-[600px]">

                </textarea>
            </div>
        </div>
    )
}