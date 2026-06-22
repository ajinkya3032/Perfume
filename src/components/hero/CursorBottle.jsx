import { motion } from "framer-motion";
import { useState } from "react";
import "../../styles/cursor.css";

function CursorBottle() {

const [pos,setPos]=useState({
x:0,
y:0
});

window.onmousemove=(e)=>{

setPos({
x:e.clientX,
y:e.clientY
});

};

return(

<motion.div

animate={{
x:pos.x-25,
y:pos.y-25
}}

transition={{
type:"spring",
stiffness:120,
damping:15
}}

className="cursorBottle"

>

🧴

</motion.div>

);

}

export default CursorBottle;