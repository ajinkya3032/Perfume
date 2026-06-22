function ProductCard({

product

}){

return(

<div
className="card"
>

<div
className="imgBox"
>

<img

src={
product.image
}

alt="perfume"

/>

</div>

<div
className="content"
>

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

</div>

);

}

export default ProductCard;