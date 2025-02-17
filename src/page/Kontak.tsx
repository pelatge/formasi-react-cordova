import { Card } from "flowbite-react";


import {Profil} from './../datatype'
import {useJsonFetch} from './../hooks'
import { CallNumber } from './../utils'


function Kontak(p:any){
    
    const foto = '/foto/'+p.foto

    return(
    <div className=" max-w-sm mx-auto my-auto p-4 md:max-w-xl space-y-4" key={p.id}>
    <Card
      className="max-w-sm"
      imgAlt="Pengurus formasi"
      imgSrc={foto}
    >
      <p>
        <h2 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
          {p.nama.toUpperCase()}
        </h2>
      </p>

      <p className="text-sm font-semibold tracking-tight text-gray-900 text-center dark:text-white">
        {p.divisi}
      </p>    
      <p className="bg-red-500 text-xl font-semibold tracking-tight text-gray-900 text-center dark:text-white">
        {p.sub}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900 dark:text-white">{p.handphone}</span>
        <button
          onClick = {()=>CallNumber(p.handphone) }
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Panggil
        </button>
      </div>
    </Card>
   </div>

  )   
       
}

export function KontakFormasi() {
  const   Url = '/data/Kontak.json'
  const { data : kontaks, loading, error } = useJsonFetch<Profil[]>(Url);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    {kontaks?.map(Kontak)}
    </div>
  )

}