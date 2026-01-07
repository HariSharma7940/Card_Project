const Card = (props) =>{    
    return (       
        <>
        <div className="bg-white h-100 w-80 shadow-2xl rounded-2xl">
            <div className="pl-2">
                <div className="flex justify-between p-4">
                    <div className="">
                        <img className="h-20 w-20 rounded-full border border-indigo-200 pb-2" src={props.logo} alt="" />
                    </div>
                        <div className="flex  text-xl px-1 py-1 h-10 ">
                            <button className="text-black/50  pl-2 px-3 shadow rounded      ">Save 
                                <i className="ri-bookmark-line pl-2 "> </i>
                            </button>                           
                        </div>
                </div>
                    <div className="pl-5">
                        <h1 className="text-2xl font-bold">{props.company} <span className="text-sm font-normal text-black/50">{props.date}</span> </h1>
                        <h1 className="font-bold text-2xl">{props.post}</h1>
                    </div>
                    <div className="ml-5 flex gap-2 mt-3">
                        <button className=" rounded bg-gray-200 text-gray-700 py-1 px-3 font-bold text-sm ">{props.time}</button>
                        <button className=" rounded bg-gray-200 text-gray-700 py-1 px-3 font-bold text-sm ">{props.level}</button>
                    </div>                    
                <div className=" text-pink-400 mt-[81px] w-60 bg-blue-100 h-0.5 ml-8">
                </div>
                <div className="mt-2 flex justify-between pr-8 pl-8">
                    <div>
                        <h1 className="text-2xl font-bold">{props.payment}</h1>
                        <h1 className="text-sm text-black/60 ">{props.location}</h1>
                    </div>

                    <div>
                        <button className="bg-black text-white mt-2 py-1 px-2 rounded ">Apply Now </button>
                    </div>    
                </div>
            </div>
      
        </div> 
        </>
    )
}

export default Card;