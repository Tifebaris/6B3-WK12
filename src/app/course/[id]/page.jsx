"use client"
import { tech } from "@/app/page"
import Image from "next/image"

export default function page({params}) {
  const techList = tech.find(course => course.name === params.id)
  return (
 
      <article className="">
        <h1 className=" text-center border-b-8 border-sky-500 uppercase">{techList.name} </h1>
        <Image className="m-auto" src={techList.image} alt={techList.name} width={250} height={250} />
        <h2><span className="font-bold">Keywords:</span>{techList.keywords.join(', ')}</h2>
        <p className="py-1 text-xl">{techList.description.sentence1}</p>
        <p className="py-1 text-xl">{techList.description.sentence2}</p>
        <p className="py-1 text-xl">{techList.description.sentence3}</p>
      
      </article>
      

  )
}
