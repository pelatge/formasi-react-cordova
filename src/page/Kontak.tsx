import { Card } from "flowbite-react";
import {
  profils
} from './../data'

import {
  CallPhone
} from './../utils'

function Kontak(p:any){
    return(
    <div className=" max-w-sm mx-auto my-auto p-4 md:max-w-xl space-y-4" key={p.id}>

    {p.divisi}
    {p.sub}
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/logo/formasi.jpg"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {p.nama}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900 dark:text-white">{p.handphone}</span>
        <a
          href="tel:`${()=>CallPhone(p.handphone,'_system') | p.handphone}`"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Panggil
        </a>
      </div>
    </Card>
   </div>

      )   
       
}

export function KontakFormasi() {
  return (
    <div>
    {profils.map(Kontak)}
    </div>
  )

}