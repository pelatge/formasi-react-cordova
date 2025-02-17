import {Avatar} from "flowbite-react"
// import {useState} from 'react'


import {Profil} from './../datatype'
import {useJsonFetch} from './../hooks'

function AlbumPengurus(p:any){
  const pengurus = p.status == "pengurus"
  return (
    <div>
    {pengurus ? 
    <div className="w-full sm:w-1/2  p-4" key={p.id}>
      <Avatar className="" img={'/foto/' + p.foto} size="lg"  />
      <h5 className="text-center">{p.nama}</h5>
    </div> : " "
  }  
    </div>
    )
}

function AlbumAnggota(p:any){
  const anggota = p.status == ""
  return (
    <div>
    {anggota ? 
    <div className="w-full sm:w-1/2  p-4" key={p.id}>
      <Avatar className="" img={'/foto/' + p.foto} size="lg"  />
      <h5 className="text-center">{p.nama}</h5>
    </div> : " "
  }  
    </div>
    )
}


export function AlbumFormasi(){
  const Url = '/data/Album.json'
  const { data : albums, loading, error } = useJsonFetch<Profil[]>(Url);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error }</div>;


	return (
    <div className="container">
      <h1 className="text-center text-lg font-bold">Pengurus</h1>
        <div className="grid  grid-cols-3 place-items-center gap-2 sm:grid-cols-3 bg-blue-400">
            {albums?.map(AlbumPengurus)}    
        </div>
    {/* Anggota */}
      <h1 className="text-center text-lg font-bold">Anggota</h1>
        <div className="grid  grid-cols-3 place-items-center gap-2 sm:grid-cols-3">
          {albums?.map(AlbumAnggota)}    
        </div>
    </div>	
    )
}