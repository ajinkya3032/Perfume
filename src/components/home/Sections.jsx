import "../../styles/sections.css";

const sections=[

{
title:"Featured Collection",

side:"right",

products:[

{
name:"Black Edition",
price:"₹1499",
img:"/products/black1.png"
},

{
name:"Royal Noir",
price:"₹1999",
img:"/products/black2.png"
}

]

},

{

title:"Luxury Collection",

side:"left",

products:[

{
name:"Night Luxury",
price:"₹1899",
img:"/products/black2.png"
},

{
name:"Elite Black",
price:"₹2399",
img:"/products/black3.png"
}

]

},

{

title:"Signature Collection",

side:"right",

products:[

{
name:"Midnight Oud",
price:"₹2299",
img:"/products/black1.png"
},

{
name:"Velvet Noir",
price:"₹2699",
img:"/products/black3.png"
}

]

}

];

function Sections(){

return(

<>

{

sections.map(

(section,index)=>(

<section

key={index}

className={

`section ${section.side}`

}

>

<div className="content">

<h1>

{

section.title

}

</h1>

<div className="productGrid">

{

section.products.map(

(product,id)=>(

<div
className="productCard"
key={id}
>

<img
src={product.img}
alt=""
/>

<h2>

{

product.name

}

</h2>

<p>

{

product.price

}

</p>

</div>

)

)

}

</div>

</div>

<div
className="bottle"
>

<img
src="/perfume.png"
/>

</div>

</section>

)

)

}

</>

);

}

export default Sections;