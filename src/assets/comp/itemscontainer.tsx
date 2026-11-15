import type { ClothingProduct } from "../../data (3)";


interface itemscontainerprops {

    itemData: ClothingProduct[];
    


       
   
    <div className="itemsContainer">
      {

        {itemData.map((item) => (

        <itemsCard key={item.id} {...item} />
        ))}


        <h2>
            {ItemsData.lenght > 0}
            ? 'cart Total: ${CharacterData.reduce((acc + item.total=o .toFixed(2)}$`
            : the checkout has nothing in it }
            </h2>
            </div>
    );

    }
    