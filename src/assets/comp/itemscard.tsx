import type { ClothingProduct } from "../../data (3)";




export default function ItemCard({

name,
price,
quantity,
image,
fit,
category,
color,
description,
size,
id,
itemQuantity, 


}: ClothingProduct) {

    return (
        <div className="itemscard">
        
        
        
        
        <h2>{name}</h2>
        <p>quantity: {quantity} </p>

        {
         <p>price: {price.toFixed(2)}$</p>
         <p>price: {total.toFixed(2)}$</p>
         </div>

        ):


        }
        
        




    