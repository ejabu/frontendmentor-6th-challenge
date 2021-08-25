import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";


export default function FilterCard({tags, removeTag, clearTags}) {

    return (
        <div className="max-w-screen-xl relative h-10 m-auto transition-all">
        <div className=" w-full p-5 absolute -top-14 left-0">
            <div className=" flex justify-between  rounded-md shadow-xl bg-white p-5">
            <ul className="flex flex-row gap-4 flex-start items-center">
            {tags.map((tag, i) => <li key={i} className="text-green-500 bg-green-100 py-1 px-2 text-lg rounded-md font-medium flex items-center gap-2">{tag}
                <p id={tag} className="cursor-pointer" onClick={removeTag}><AiOutlineClose/></p>
            </li>)}
            </ul>
            <button onClick={clearTags} className="underline">clear</button>
            </div>
        </div>
        </div>
    )
}
