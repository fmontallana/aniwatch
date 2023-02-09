"use client"

import Section from "@/app/info/[id]/Section"
import { Card, EpisodeThumb, PlayerSection } from "@/components"
import { useAnimeStore } from "@/store/animeStore"
import { useGlobalStore } from "@/store/globalStore"
import { useEffect, useState } from "react"

export default function VideoContainer({ animeInfo, chunks }) {

  const [selectedChunk, setSelectedChunk] = useState(0)
  const { color, id, title, relations } = animeInfo
  const episodeUrl = useGlobalStore(state => state.episodeUrl)
  const currentEp = useGlobalStore(state => state.currentEp)
  const setEpisodeUrl = useGlobalStore(state => state.setEpisodeUrl)
  const fetchAnimeStreamingLinks = useAnimeStore(state => state.fetchAnimeStreamingLinks)
  const formattedDate = new Date(currentEp?.airDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

  useEffect(() => {
    console.log(relations)
    fetchAnimeStreamingLinks(currentEp.id).then(res => {
      console.log(res)
      setEpisodeUrl(res.sources[0].url)
    })
  }, [currentEp])

  return (
    <section className='h-full lg:w-10/12 mx-auto flex flex-wrap lg:flex-row flex-col gap-4 px-2 sm:px-0'>
      {/* player */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-2">
        <div style={{ borderColor: color || "#e7e7e7" }} className={`w-full lg:w-8/12 rounded-lg overflow-hidden border sm:border-2 aspect-video`}>
          <PlayerSection />
        </div>
        <div className="w-full lg:w-4/12 h-full flex lg:flex-row flex-col-reverse justify-start items-start gap-2 ">
          {/* episode thumbnails */}
          <div className='w-full lg:w-4/6 lg:h-96 lg:scrollbar-hide snap-mandatory lg:snap-y snap-x  flex lg:flex-col gap-2 overflow-scroll'>
            {chunks[selectedChunk]?.map((episode, index) => {
              return <EpisodeThumb key={episode.id} id={id} data={episode} color={color} />
            })}
          </div>
          {/* episode list */}
          <div style={{ borderColor: color || "#e7e7e7" }} className={`bg-gray-900 lg:scrollbar-hide snap-mandatory snap-both  lg:h-96 lg:w-2/6 w-full flex lg:flex-col lg:border sm:border-2 rounded-lg overflow-scroll`}>
            {chunks?.map((episode, index) => {
              const start = ((index) * 10) + 1
              let isOdd = index % 2 === 0
              const bg = isOdd ? 'bg-gray-900' : 'bg-gray-800'
              const selected = selectedChunk === index ? color : ''
              return (
                <button
                  key={index}
                  onClick={() => setSelectedChunk(index)}
                  style={{ backgroundColor: selected }}
                  className={`flex-shrink-0 h-auto text-xs snap-start flex justify-between items-center p-2 ${bg}`}>
                  <p className='w-full text-slate-200 capitalize flex flex-col lg:flex-row justify-between items-center gap-1'>
                    <span>Episodes</span>
                    <span className="font-bold"> {start} - {((index) * 10) + episode.length}</span>
                  </p>
                </button>
              )
            })}
          </div>
          {/* <p className='sm:hidden text-slate-100 font-bold fs-100 '>Episode List</p> */}
        </div>
      </div>
      {/* <div style={{ borderColor: color || "#e7e7e7" }} className={` lg:w-[60%] h-48 sm:h-96 rounded-lg overflow-hidden border sm:border-2 aspect-video`}>
        <PlayerSection />
      </div> */}

      <div className="flex flex-col gap-1 text-slate-100">
        <p className={`text-slate-100 text-2xl font-bold fs-125`}>{title?.english || "-"}</p>
        <p className="text-slate-300 text-xs sm:text-sm">
          <span style={{ color }} className="text-slate-100 font-semibold">EP Title:</span> {currentEp?.title || "No episode title"}
        </p>
        <p className="text-slate-300 text-xs sm:text-sm">
          <span style={{ color }} className="text-slate-100 font-semibold">EP #:</span> {currentEp?.number || "No episode number"}
        </p>
        <p className="text-slate-300 text-xs sm:text-sm">
          <span style={{ color }} className="text-slate-100 font-semibold">Date Aired:</span> {formattedDate || "?"}
        </p>
        <p className="text-slate-300 text-sm">
          <span style={{ color }} className="text-slate-100 font-semibold">Description:</span> {currentEp?.description || "No episode description"}
        </p>
      </div>

    </section>
  )
}
