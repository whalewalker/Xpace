import "./component-item.scss";

const CollectionItem = ({id, name, imageUrl, price}) => {
    return (
        <div key={id} className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='name'>${price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;