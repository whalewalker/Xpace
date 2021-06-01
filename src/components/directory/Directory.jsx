import "./directory.scss";
import {sections} from "../../directory.data";
import MenuItem from "../menu-item/MenuItem";
const Directory = () =>{


    return(
        <div className="directory-menu">
            {sections.map(({title, imageUrl, id, size}) => <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>)}
        </div>
    )
}

export default Directory;