import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Bottle(){

const ref=
useRef();

useFrame(({mouse,clock})=>{

if(ref.current){

ref.current.rotation.y+=0.01;

ref.current.rotation.x=
mouse.y*0.15;

ref.current.position.x=
mouse.x*1.5;

ref.current.position.y=

Math.sin(
clock.elapsedTime
)*0.3;

}

});

return(

<mesh
ref={ref}
>

<cylinderGeometry
args={[1,1,3,64]}
/>

<meshPhysicalMaterial

metalness={1}

roughness={0}

clearcoat={1}

color="#d6b370"

/>

</mesh>

);

}