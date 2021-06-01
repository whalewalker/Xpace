import SHOP_DATA from "./shopData";
import CollectionPreview from "../preview-collection/CollectionPreview";

const ShopPage = () => {

    const collections = SHOP_DATA;

    return(
        <div className="shop-page">
            {collections.map(({id, ...collectionProps}) => <CollectionPreview  key={id} {...collectionProps}/>)}
        </div>
    )
}

export default ShopPage;
