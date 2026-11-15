import type { ClothingProduct } from "../../data (3)";


import ItemCard from "./itemscard";


interface itemsContainerProps {

data:ClothingProduct[];
productinfo: ClothingProduct;
handleAdjustQuantity: (delta: number) => void;
handleChangePrice: (price: number) => void;
handleAddToCart: () => void;
} 



