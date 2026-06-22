import ProductCard from "./ProductCard";

import {
perfumes
}
from "../../data/perfumes";

import "../../styles/product.css";

function Products(){

return(

<section
className="products"
>

<h1>

Featured Collection

</h1>

<div
className="grid"
>

{

perfumes.map(

(item)=>(

<ProductCard

key={item.id}

product={item}

/>

)

)

}

</div>

</section>

);

}

export default Products;