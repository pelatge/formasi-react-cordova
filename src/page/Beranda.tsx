import {Card,Button,Carousel,Badge } from "flowbite-react"
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

import {Format,Profil} from './../datatype'
import {useJsonFetch} from './../hooks'

function Img(p:any){
	const folderFoto = '/foto/'+ p.foto 
	return (	
		<div key={p.id}>
			<img src={folderFoto} alt={p.nama} />
		</div>)
}

function CarouselFormasi() {
	const   Url = '/data/Kontak.json'
  const { data : profils, loading, error } = useJsonFetch<Profil[]>(Url);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error }</div>;
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 " >
      <Carousel>
        {profils?.map(Img)}
      </Carousel>
    </div>
  );
}



function Beranda(p:any){
 
	return (

	<div className=" max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4 " key={p.id}>
		<Card >
	      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
	        {p.details.toUpperCase()}
	      </h5>
	      <Button as={Link} to ={ p.format.replace(/.jpg/g, "") }  outline gradientDuoTone="purpleToBlue">
	       { p.format.replace(/.jpg/g, "") }
	      </Button>
	    </Card>
	</div>
	)
}

export function BerandaFormasi(){
  const [tanggal, setTanggal] = useState('');
  const [jam,setJam] = useState(dayjs().format('HH:mm:ss'));

  const tanggalSekarang = dayjs().locale('id').format('dddd, DD MMMM YYYY');
 

  // hooks
  useEffect(() => {
   dayjs.locale('id') // Setel lokal ke Bahasa Indonesia
   setTanggal(tanggalSekarang);
  // Perbarui waktu setiap detik
    const interval = setInterval(() => {
      setJam(dayjs().format('HH:mm:ss'));
    }, 1000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  
  }, []);

   /* komponent render */
  const Url = "/data/Formasi.json"
 	const { data : formats, loading, error } = useJsonFetch<Format[]>(Url);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error }</div>;
 	
	return(
	<div className="max-w-sm mx-auto my-auto p-1 md:max-w-xl space-y-4">
		<Badge color="info" className="p-2 ">
			{tanggal}{" pukul : "}{jam}
		</Badge>
		<CarouselFormasi />
		
		<div id="content">
		{formats?.map(Beranda)}
		</div>
	</div>
	)
}