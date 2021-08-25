import { useState, useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import JobCard from '../components/JobCard'
import FilterCard from '../components/FilterCard'
import filtering from "../utils/filtering"

const sampleData = [
  {
  brand: "Barokah Studio",
  title: "Frontend Developer",
  image: "https://cdn.dribbble.com/users/68544/screenshots/16090614/media/d474c1fcf485bfef5d71ffd8699bf1fb.png?compress=1&resize=1200x900",
  tags: ["Frontend", "React"],
  featured: true,
  new: true,
  },
  {
  brand: "Sakinah Skincare",
  title: "Social Media Planner",
  image: "https://cdn.dribbble.com/users/3333696/screenshots/15983977/media/fb431ec5a5a5976a4a24b01d2a930b39.jpg?compress=1&resize=1200x900",
  tags: ["Designer", "Social Media"],
  featured: true,
  new: true,
  },
  {
  brand: "Sams",
  title: "Backend Developer",
  image: "https://cdn.dribbble.com/users/13604/screenshots/15910715/media/1da4edf6238e967d22f6cc10b574ae8e.jpg?compress=1&resize=1200x900",
  tags: ["Backend", "Database", "Express", "MongoDB"],
  featured: false,
  new: true,
  },
  {
  brand: "Netrone Tech",
  title: "Frontend Developer",
  image: "https://cdn.dribbble.com/users/1821392/screenshots/16186780/media/07e5e8f8c2cc42d98d7a43680bdbad86.png?compress=1&resize=800x600",
  tags: ["React"],
  featured: false,
  new: false,
  },
  {
  brand: "Cat Allegori",
  title: "Social Media Planner",
  image: "https://cdn.dribbble.com/users/24078/screenshots/15473819/media/7eb9bc4f76cb8551771b95b48f732ccf.jpg?compress=1&resize=1200x900",
  tags: ["Social Media", "Planner", "Instagram"],
  featured: false,
  new: false,
  },
  {
  brand: "Bonzzzai",
  title: "Social Media",
  image: "https://cdn.dribbble.com/users/662810/screenshots/2449005/missouri_shoku-06.png?compress=1&resize=800x600",
  tags: ["Social Media", "Twitter", "Instagram"],
  featured: false,
  new: false,
  },

]

export default function Home() {
  //? state buat tag yang diklik 
  const [selectedTags, setSelectedTags] = useState([])

  //? state buat nyimpen tag yang kemunculannya cuma sekali
  const [newActiveTags, setNewActiveTags] = useState([])

  //? state buat daftar loker yang sudah kefilter sama tag yang dipilih
  const [activeList, setActiveList] = useState([])

  useEffect(() => {
    //! nge-filter array supaya tag nya ga bisa dipilih lagi
    const currentActiveTags = new Set(selectedTags);
    setNewActiveTags([...currentActiveTags])

  }, [selectedTags])


  const selectTag = (e) => {
    setSelectedTags([...selectedTags, e.target.innerText])
  }

  useEffect(() => {
    const filteredList = filtering(sampleData, newActiveTags)
    setActiveList(filteredList)
  }, [newActiveTags])


  //todo removing individual tag from filter card  ???????
  const removeTag = (e) => {
    // const tagName = e.target.getAttribute("id")
    // console.log(tagName)  
  }

  //! clear all tags from filter card
  const clearTags = () => {
    setSelectedTags([])
  }

  return (
    <div>
      {newActiveTags.length ? <FilterCard tags={newActiveTags} removeTag={removeTag} clearTags={clearTags}/> : ""}
      <div className="container-1280 mt-10 mb-10 flex flex-col gap-8">
        {/* {sampleData.map((data, i) => {
          return <JobCard
                  key={i}
                  setTags={selectTag}
                  data={data}
                  />
        })} */}
                {activeList.map((data, i) => {
            return <JobCard
                    key={i}
                    setTags={selectTag}
                    data={data}
                    />})}
      </div>
    </div>

  )
}
