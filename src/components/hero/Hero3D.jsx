import { Canvas } from "@react-three/fiber";
import Bottle from "./Bottle";

import "../../styles/hero.css";

export default function Hero3D(){

return(

<div className="hero">

<div className="heroText">

<h1>

Luxury<br/>

Fragrance

</h1>

<p>
<br></br>
Preseved for you only

</p>

</div>

<div className="scene">

<Canvas
camera={{
position:[0,0,6]
}}
>

<ambientLight
intensity={2}
/>

<directionalLight
position={[4,3,2]}
/>

<Bottle/>

</Canvas>

</div>

</div>

);

}