

export default function TestButton({text_btn}){

    return (
        <div className="m-">
            <button className="transition-all duration-50 ease-in cursor-pointer bg-white border-b-5 border-r-5 w-[200px] h-[50px] text-[150%] font-semibold 
            hover:w-[210px] hover:h-[60px]"
            >
                {text_btn}
            </button>
        </div>
    )
}