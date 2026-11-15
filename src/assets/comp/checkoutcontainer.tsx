import { products, type ClothingProduct } from "../../data (3)";
import type { itemsContainerProps } from "./checkoutcard";
import type { props } from "./itemscard";

interface checkoutContainerProps {
    data: ClothingProduct[];
    productinfo: ClothingProduct;
    handleAdjustQuantity: (delta: number) => void;
    handleChangePrice: (price: number) => void;
    handleAddToCart: () => void; }



}
    {priceOptions.map((price) => (
          <option key={price} value={price}>
            {price.toFixed(2)}
          </option>
        ))}
      </select>
      <br />
      {


      }

<button onClick={() =>  handleAdjustQuantity(-1)}>{"-"}</button>