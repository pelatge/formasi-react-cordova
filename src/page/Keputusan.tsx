import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


export function ImageKeputusan(){
	return(
	<TransformWrapper>
	<div className="container">
		 <TransformComponent>
			<img src="/doc/keputusan.jpg" />
		 </TransformComponent>
	</div>
	</TransformWrapper>
 )
}