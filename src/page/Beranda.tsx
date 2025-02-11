import {Card,Button} from "flowbite-react"
import {Link} from 'react-router-dom';
import {useState} from 'react'

import {formats} from './../data'





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
		<Card className="max-w-sm" imgSrc="/logo/formasi.jpg" horizontal>
	      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
	        {p.details}
	      </h5>
	      <p className="font-normal text-gray-700 dark:text-gray-400">
	       <Button as={Link} to ={ p.format.replace(/.jpg/g, "") }  color="blue" onClick={()=>ClickLink(nameLink)}>
	       Klik Disini
	       </Button>
	      </p>
	    </Card>
	    
	</div>
	)
}

export function BerandaFormasi(){
	return(
	<div>
		{formats.map(Beranda)}
	</div>
	)
}