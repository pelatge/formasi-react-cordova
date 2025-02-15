
import {Card,Button,Carousel,DatePicker } from "flowbite-react"
import {Link} from 'react-router-dom';
import {useState} from 'react'

import {Format,Profil} from './../datatype'
import {useJsonFetch} from './../hooks'

function Img(p:any){
	const folderFoto = '/foto/' + p.foto + '.png'
	return(	
		<div key={p.id}>
			
			<img src={folderFoto} alt={p.nama} />
			
		</div>)
}

function CarouselFormasi() {
	const   Url = '/data/Profil.json'
  const { profil, loading, error } = useJsonFetch<Profil[]>(Url);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 " >
      <Carousel>
        {profil.map(Img)}
      </Carousel>
      
    </div>
  );
}



function Beranda(p:any){
	
  let [nameLink, setnameLink] = useState('/');

  const ClickLink = (link: string) => {
  	if(nameLink){
  		return
  	}else{
  		nameLink = p.format.replace(/.png/g, "")
  	}
    setnameLink(link);

  };
  
	return(

	<div className=" max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4 " key={p.id}>
		<Card >
	      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
	        {p.details.toUpperCase()}
	      </h5>
	      <Button as={Link} to ={ p.format.replace(/.png/g, "") }  outline gradientDuoTone="purpleToBlue" onClick={()=>ClickLink(nameLink)}>
	       { p.format.replace(/.png/g, "") }
	      </Button>
	      
	    </Card>
	    
	</div>
	)
}

export function BerandaFormasi(){
	const   Url = '/data/Format.json'
  const { format, loading, error } = useJsonFetch<Format[]>(Url);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log("contoh")
	return(
	<div className="max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4">
		<CarouselFormasi />
		
		<div id="content">
		{format.map(Beranda)}
		</div>
	</div>
	)
}