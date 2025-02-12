import {Card,Button,Carousel,Tooltip} from "flowbite-react"
import {Link} from 'react-router-dom';
import {useState} from 'react'

import {formats,profils} from './../data'

function Img(p:any){
	const folder = '/foto/'
	return(	
		<div key={p.id}>
			<Tooltip content={p.nama}>
			<img src={folder + p.foto} alt={p.nama} />
			</Tooltip>
		</div>)
}

function CarouselFormasi() {
	
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 " >
      <Carousel>
        {profils.map(Img)}
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
  		nameLink = p.format.replace(/.jpg/g, "")
  	}
    setnameLink(link);

  };
  
	return(

	<div className=" max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4 " key={p.id}>
		<Card >
	      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
	        {p.details.toUpperCase()}
	      </h5>
	      <Button as={Link} to ={ p.format.replace(/.jpg/g, "") }  outline gradientDuoTone="purpleToBlue" onClick={()=>ClickLink(nameLink)}>
	       { p.format.replace(/.jpg/g, "") }
	      </Button>
	      
	    </Card>
	    
	</div>
	)
}

export function BerandaFormasi(){
	return(
	<div className="max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4">
		<CarouselFormasi />
	  <div id="content">
		{formats.map(Beranda)}
		</div>
	</div>
	)
}