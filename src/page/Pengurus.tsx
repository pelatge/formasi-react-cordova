import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


export function ImagePengurus(){
	return(
	<TransformWrapper>
	<div className="container">
		 <TransformComponent>
			<img src="/doc/pengurus.jpg" />
		 </TransformComponent>
	</div>
	</TransformWrapper>
 )
}