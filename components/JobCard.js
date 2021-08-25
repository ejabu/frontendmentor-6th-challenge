import React, { useState, useEffect } from 'react'

export default function JobCard({setTags, data}) {
    // const [currentTags, setCurrentTags] = useState([]) 


    // const selectTag = (e) => {
    //     setCurrentTags(oldArray => [...currentTags, e.target.innerText])
    // }

    // useEffect(() => {
    //     setTags(currentTags)
    // })

    return (
        <div className="bg-white h-full w-full p-5 flex gap-6 flex-start items-center rounded-md shadow-xl">
            <img className="w-28 h-28 object-cover rounded-full" src={data.image}></img>
            <div id="job-title" className="flex flex-col gap-1">
                <div className="flex items-center gap-6">
                    <p id="brand" className="text-lg font-bold text-green-500">{data.brand}</p>
                    <div className="flex text-xs items-center gap-2 text-white font-medium">
                        {data.new ? <p className="bg-red-400 py-1 px-2 rounded-full font-medium">NEW!</p> : ""}
                        {data.featured ? <p className="bg-blue-500 py-1 px-2 rounded-full font-medium">FEATURED</p> : ""}
                    </div>
                </div>
                <h1 className="font-extrabold text-2xl text-dark">{data.title}</h1>
                <div className="flex text-gray-500 font-medium text-sm gap-3">
                    <p>1d ago</p>
                    <span>•</span>
                    <p>Full Time</p>
                    <span>•</span>
                    <p>USA only</p>
                </div>
            </div>
            <div id="tags" className="ml-auto">
                <ul className="flex gap-3">
                    {data.tags.map((tag, i) => <li key={i} className="text-green-500 bg-green-100 py-1 px-2 text-sm rounded-md font-medium cursor-pointer" onClick={setTags}>{tag}</li>)}
                </ul>
            </div>
        </div>
    )
}
