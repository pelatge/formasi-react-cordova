import {Card,Button} from "flowbite-react"
import {HashRouter,Routes, Route} from 'react-router-dom';

import {formats} from './../data'



function Beranda(p:any){
	return(
	<div className=" max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4 " key={p.id}>
		<Card className="max-w-sm" imgSrc="/logo/formasi.jpg" horizontal>
	      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
	        {p.details}
	      </h5>
	      <p className="font-normal text-gray-700 dark:text-gray-400">
	       <Button color="blue">Klik Disini</Button>
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
	);
}