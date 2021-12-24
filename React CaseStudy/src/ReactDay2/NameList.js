import React from "react";
function NameList(){
    const names =['sharath','nikhil','someone']
    const namelist = names.map(name=><h1>{name}</h1>)
    const Product=[{id:1, name:'tv', rate:567},
    {id:2, name:'laptop', rate:667},
    {id:3, name:'mouse', rate:777}]
const productList = Product.map(product =><h1>{product.id} {product.name}  {product.rate}</h1>)
return(
    <div>
        <hr></hr>
        {namelist}
        <hr></hr>
        {productList}
    </div>
)
}
export default NameList;